import { useLoaderData } from "react-router-dom";

const Details = () => {
    const data = useLoaderData();
    const { name, image, price, availableQuantity, subCategory, rating } = data
    return (
        <div className='my-10'>
            <div className='flex justify-center items-center max-w-4xl mx-auto border-2 bg-slate-100'>
                <div className='ml-2'>
                    <img src={image} alt="" />
                </div>
                <div className='ml-16'>
                    <h1 className='font-bold my-2'>Name: {name}</h1>
                    <p className='font-semibold my-2'>Category: {subCategory}</p>
                    <div className='flex'>

                        <p className='font-semibold my-2 '>Price: {price}</p>
                        <p className='font-semibold my-2 mx-14'>Quantity:   {availableQuantity}</p>

                    </div>
                    <p className='font-semibold my-2 '>rating: {rating}</p>



                </div>
            </div>
        </div>
    );
};

export default Details;