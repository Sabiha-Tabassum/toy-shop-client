import { Link } from "react-router-dom";

const AllToysData = ({allToy}) => {

    const { _id, name, image, subCategory, price } = allToy

    return (
        <div className="max-w-6xl mx-auto">
            <div className="card bg-slate-200  card-compact w-80 h-80 mb-4 shadow-xl">
                <figure><img className="w-48 h-full mt-4" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Category: {subCategory}</p>
                    <p>Price: ${price}</p>

                    <div className="card-actions justify-end">
                        <Link to={`/details/${_id}`}>
                            <button className="btn btn-primary">View Details</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysData;