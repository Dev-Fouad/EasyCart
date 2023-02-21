// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import Content from './Content';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay'

const Wiper = () => {
  return (
    <>
    <div className=' mb-[229px] max-md:mb-[100px]'>

        <div className='items-center flex flex-col justify-center'>
            <h2 className=' font-rob text-[40px] font-bold leading-[44px] max-md:text-center'>Why choose easycart?</h2>
            <p className=' w-[622px] font-inter text-[20px] text-center leading-[23px] mt-[16px] max-md:w-[90%]'>Here are testimonials from people that use easycart to improve their sales.</p>
        </div> 

        <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={2500}
            slidesPerView={1}
            autoplay
            ally
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
        
        <SwiperSlide>{Content}</SwiperSlide>
        <SwiperSlide>{Content}</SwiperSlide>
        <SwiperSlide>{Content}</SwiperSlide>
        <SwiperSlide>{Content}</SwiperSlide>
        
        </Swiper>
        </div>
    </>
  );
};

export default Wiper
