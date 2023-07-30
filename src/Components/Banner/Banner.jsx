import Aos from 'aos';
import 'aos/dist/aos.css';
import bg from '../../images/truck-stacking-wooden-blocks.jpg'
import { useEffect } from 'react';

const Banner = () => {

    useEffect(()=>{
        Aos.init({duration: 3000})
    },[])

    return (
        <div className='max-w-6xl mx-auto mb-2'>
            <div className=" min-h-screen  relative"  >
                <img src={bg} alt="" />
                <div className=" "></div>
                <div className=" ">
                    <div className="absolute top-16 left-20" data-aos="fade-right">
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