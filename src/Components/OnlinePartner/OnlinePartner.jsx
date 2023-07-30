import img1 from '../../images/2080283.png'
import img2 from '../../images/Pickaboo.png'
import img3 from '../../images/Panda-Mart.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const OnlinePartner = () => {

    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <>
            <div className="text-amber-500 font-bold text-2xl text-center my-20">
                <h1>Our Online Partner</h1>
            </div>

            <div className='grid md:grid-cols-3 ml-36 mb-10 mt-14'>
                <div data-aos="fade-right">
                    <img className='h-32' src={img1} alt="" />
                </div>
                <div data-aos="zoom-in">
                    <img className='h-36' src={img2} alt="" />
                </div>
                <div data-aos="fade-left">
                    <img className='h-36' src={img3} alt="" />
                </div>
            </div>
        </>

    );
};

export default OnlinePartner;