import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


import { Pagination } from 'swiper/modules';
import slider1 from '../../images/pink-easter-car-with-red-egg.jpg'
import slider2 from '../../images/black-friday-elements-assortment.jpg'
import slider3 from '../../images/slider2.jpg'
import slider4 from '../../images/slider.jpg'
import slider5 from '../../images/hand-toy-car-my-hand-1253586.jpg'

const Slider = () => {

    useEffect(()=>{
        Aos.init({duration: 3000})
    },[])

    return (
        <div>
            <div className='text-center my-28'>
                <p className='font-semibold'>_ _ _ _From 8 A.M to 7 P.M_ _ _ _</p>
                <h1 className='text-amber-400 font-bold text-2xl'>Order Online</h1>
            </div>
            <div className='max-w-6xl mx-auto'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={15}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img className='h-64' data-aos="fade-left" src={slider1} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64' data-aos="fade-left" src={slider2} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className='h-64' data-aos="fade-left" src={slider3} alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider4} data-aos="fade-left" alt="" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slider5} data-aos="fade-left" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;