
import bg from '../../images/truck-stacking-wooden-blocks.jpg'


const Banner = () => {

   

    return (
        <div className=' mb-2'>
            <div className=" min-h-screen  relative"  >
                <img src={bg} alt="" />
                <div className=" "></div>
                <div className=" ">
                    <div className="absolute top-16 left-20" >
                        <h1 className='font-bold text-4xl text-amber-400'>Welcome to our<br /><span className=''>shop____</span> </h1>
                        <br />

                        <p className='text-amber-400 font-bold'>Check out our toy car with name selection for the very best <br /> in unique or custom, handmade pieces from our shops.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;