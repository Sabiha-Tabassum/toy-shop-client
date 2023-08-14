import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateData = () => {

    const data = useLoaderData();
    const { _id, title, price, deadline, image, availableQuantity, subCategory, rating } = data;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {

        fetch(`https://toy-shop-backend-vert.vercel.app/addToy/${_id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Data updated successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
        console.log(data);
    };

    return (
        <div className='bg-slate-300 '>
            <div className="mb-5 pt-5">
                <h1 className="text-center text-xl font-bold ">Update Data</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='ml-96'>
                {errors.exampleRequired && <span>This field is required</span>}
                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("title")}
                            placeholder="title"
                            defaultValue={title}

                        />
                    </div>

                    <div className='mb-5 pt-4 ml-5 '>
                        <select className="p-2 rounded-lg " {...register("subCategory")} defaultValue={subCategory}>
                            <option value="Lego Police Car">Lego Police Car</option>
                            <option value="Hot Wheels">Hot Wheels</option>

                            <option value="Matchbox Police Cruiser">Matchbox Police Cruiser</option>
                            <option value="Ferrari">Ferrari</option>
                            <option value="Porsche">Porsche</option>
                            <option value="Lamborghini">Lamborghini</option>
                            <option value="Tonka">Tonka</option>
                            <option value="Bruder">Bruder</option>
                            <option value="Hess">Hess</option>

                        </select>

                    </div>
                </div>




                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("deadline")}
                            placeholder="deadline"
                            type="date"
                            defaultValue={deadline}

                        />
                    </div>

                    <div className='mb-5 pt-4 ml-16'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("image")}
                            placeholder="image link"
                            type="url"
                            defaultValue={image}
                        />
                    </div>
                </div>



                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg "
                            {...register("availableQuantity")}
                            placeholder="Quantity"
                            type="text"
                            defaultValue={availableQuantity}
                        />
                    </div>


                </div>


                <div className='flex'>
                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("price")}
                            placeholder="price"
                            defaultValue={price}
                        />
                    </div>

                    <div className='mb-5 pt-4 ml-5'>
                        <input
                            className="p-2 rounded-lg"
                            {...register("rating")}
                            placeholder="rating"
                            defaultValue={rating}
                        />
                    </div>

                </div>



                <input className="bg-slate-600 p-4 ml-5 mb-2 rounded-xl text-white font-semibold cursor-pointer" value="Update Data" type="submit" />


            </form>
        </div>
    );
};

export default UpdateData;