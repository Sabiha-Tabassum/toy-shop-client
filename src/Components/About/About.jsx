import img1 from './../../images/toyshop.jpg';
import img2 from './../../images/shop.jpg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const About = () => {
    
    useEffect(()=>{
        Aos.init({duration: 2000})
    },[])

    return (
        <>
            <div className='max-w-4xl mx-auto flex items-center gap-36'> 
                <div className='relative my-24 '>

                    <img className='w-72' data-aos="flip-left" src={img1} alt="" />

                    <img className='w-60 absolute left-28 top-24' data-aos="flip-right" src={img2} alt="" />

                </div>

                <div className='mt-20'>
                    <h1 className='text-emerald-500 font-bold text-3xl'>Our Story</h1>
                    <p className='w-72 mt-4'>Welcome to The Toy Shop, a treasure trove of children’s toys, games, and gifts.With 16 years experience in the toy trade, we decided to take the plunge and open our first shop on the 1st of June 2017.Our aim was to create a magical space for kids, where they could touch, feel, play and interact with the toys they see.</p>
                </div>
            </div>


        </>

    );
};

export default About;