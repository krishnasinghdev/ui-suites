import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import bg1 from '../public/bg1.webp';
import bg2 from '../public/bg2.webp';
import bg3 from '../public/bg3.webp';
import room1 from '../public/room1.webp';
import room2 from '../public/room2.webp';
import { VscDebugStackframeDot } from 'react-icons/vsc';
export default function Event() {
  return (
    <>
      <h1 className='text-center  bg-white font-primary text-5xl pt-28 pb-8'>
        Upcomings Events
      </h1>
      <main className='container bg-white py-20'>
        <Swiper
          autoHeight={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          modules={[FreeMode, Navigation, Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide className='flex flex-col'>
            <Image src={bg1} height={250} width={400} alt='galllery' />
            <div className='text-left mt-6'>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
              <p className='text-gray-400 text-sm my-1 '>
                Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
                <span className='text-red-500'>By Admin</span>{' '}
              </p>
              <p className='text-gray-400 font-light'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                odit officia labore in, perferendis mollitia. Optio, pariatur?
                Ad, repellendus voluptas.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col'>
            <Image src={bg2} height={250} width={400} alt='galllery' />
            <div className='text-left mt-6'>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
              <p className='text-gray-400 text-sm my-1 '>
                Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
                <span className='text-red-500'>By Admin</span>{' '}
              </p>
              <p className='text-gray-400 font-light'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                odit officia labore in, perferendis mollitia. Optio, pariatur?
                Ad, repellendus voluptas.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col'>
            <Image src={room1} height={250} width={400} alt='galllery' />
            <div className='text-left mt-6'>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
              <p className='text-gray-400 text-sm my-1 '>
                Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
                <span className='text-red-500'>By Admin</span>{' '}
              </p>
              <p className='text-gray-400 font-light'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                odit officia labore in, perferendis mollitia. Optio, pariatur?
                Ad, repellendus voluptas.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col'>
            <Image src={bg3} height={250} width={400} alt='galllery' />
            <div className='text-left mt-6'>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
              <p className='text-gray-400 text-sm my-1 '>
                Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
                <span className='text-red-500'>By Admin</span>{' '}
              </p>
              <p className='text-gray-400 font-light'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                odit officia labore in, perferendis mollitia. Optio, pariatur?
                Ad, repellendus voluptas.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex flex-col'>
            <Image src={room2} height={250} width={400} alt='galllery' />
            <div className='text-left mt-6'>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
              <p className='text-gray-400 text-sm my-1 '>
                Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
                <span className='text-red-500'>By Admin</span>{' '}
              </p>
              <p className='text-gray-400 font-light'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                odit officia labore in, perferendis mollitia. Optio, pariatur?
                Ad, repellendus voluptas.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
