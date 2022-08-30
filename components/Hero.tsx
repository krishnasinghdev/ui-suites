import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { Autoplay, Pagination, EffectFade } from 'swiper';

export default function App() {
  return (
    <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, EffectFade, Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <div className='bg-bg-1 brightness-90 w-full h-full flex justify-center flex-col items-center bg-cover text-white'>
          <h1 className='text-6xl sm:text-7xl mb-4 font-primary font-extrabold leading-1.5 '>
            Welcome to Suites
          </h1>
          <p className='text-xl '>HOTEL & RESORT</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-bg-2 brightness-90 w-full h-full flex justify-center flex-col items-center bg-cover text-white'>
          <h1 className='text-6xl sm:text-7xl mb-4 font-primary font-extrabold leading-1.5 '>
            Unique Experience
          </h1>
          <p className='text-xl '>ENJOY WITH US</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-bg-3 brightness-90 w-full h-full flex justify-center flex-col items-center bg-cover text-white'>
          <h1 className='text-6xl sm:text-7xl mb-4 font-primary font-extrabold leading-1.5 '>
            Relaxing Rooms
          </h1>
          <p className='text-xl '>YOUR ROOM YOUR STAY</p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
