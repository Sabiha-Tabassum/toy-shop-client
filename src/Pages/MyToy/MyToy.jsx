import {  useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import MyToyData from "./MyToyData";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const MyToy = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const navigate = useNavigate()

    const url = `https://toy-shop-backend-vert.vercel.app/addToy?email=${user?.email}`
    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('data-access-token')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.error) {
                    setMyToys(data)
                }
                else {
                    navigate('/')
                }
            })

    }, [url, navigate])

    const handleDelete = (id) => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`https://toy-shop-backend-vert.vercel.app/addToy/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Your data has been deleted successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        const remaining = myToys.filter(myToy => myToy._id !== id)
                        setMyToys(remaining);
                    }

                })
        }
    }

    return (
        <div className='max-w-5xl mx-auto'>
            <div className="overflow-x-auto w-full">
                <div>{myToys.length}</div>
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Email</th>

                            <th>Available Quantity</th>
                            <th>Price</th>
                            <th>deadline</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(MyToy => <MyToyData
                                key={MyToy._id}
                                MyToy={MyToy}
                                handleDelete={handleDelete}

                            >

                            </MyToyData>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToy;