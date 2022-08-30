import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { FreeMode, Navigation, Autoplay } from 'swiper';
import Image from 'next/image';
import xperson_1 from '../public/xperson_1.webp';
import xperson_2 from '../public/xperson_2.webp';
import xperson_3 from '../public/xperson_3.webp';
import xperson_4 from '../public/xperson_4.webp';
export default function Review() {
  return (
    <>
      <h1 className='text-center   font-primary text-5xl pt-28 pb-8'>
        What People Say
      </h1>
      <main className='container  py-20'>
        <Swiper
          autoHeight={true}
          freeMode={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[FreeMode, Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className='mySwiper'
        >
          <SwiperSlide className='flex gap-4 items-center'>
            <Image
              src={xperson_1}
              className='rounded-full'
              height={200}
              width={200}
              alt='galllery'
            />
            <div className='text-left '>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>

              <p className='text-gray-400 font-light italic'>
                &quot; Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sed odit officia labore in, perferendis mollitia. Optio,
                pariatur? Ad, repellendus voluptas.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex gap-4 items-center'>
            <Image
              src={xperson_2}
              className='rounded-full'
              height={200}
              width={200}
              alt='galllery'
            />
            <div className='text-left '>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>

              <p className='text-gray-400 font-light italic'>
                &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sed odit officia labore in, perferendis mollitia. Optio,
                pariatur? Ad, repellendus voluptas.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex gap-4 items-center'>
            <Image
              src={xperson_3}
              className='rounded-full'
              height={200}
              width={200}
              alt='galllery'
            />
            <div className='text-left '>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>

              <p className='text-gray-400 font-light italic'>
                &quot; Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sed odit officia labore in, perferendis mollitia. Optio,
                pariatur? Ad, repellendus voluptas.&quot;
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className='flex gap-4 items-center'>
            <Image
              src={xperson_4}
              className='rounded-full'
              height={200}
              width={200}
              alt='galllery'
            />
            <div className='text-left '>
              <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>

              <p className='text-gray-400 font-light italic'>
                &quot;Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Sed odit officia labore in, perferendis mollitia. Optio,
                pariatur? Ad, repellendus voluptas.&quot;
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </main>
    </>
  );
}
