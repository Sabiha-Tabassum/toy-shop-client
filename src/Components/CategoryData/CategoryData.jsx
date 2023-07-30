

const CategoryData = ({item}) => {
    const { name, image, price } = item
    return (
        <div className="max-w-6xl mx-auto">
            <div className="card bg-slate-200  card-compact w-72 h-56 mb-4 shadow-xl">
                <figure><img className="w-48 h-full mt-4" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default CategoryData;