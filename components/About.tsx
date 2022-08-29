import Image from 'next/image';
import React from 'react';
import room1 from '../public/room1.webp';
import { FaPlay } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
export default function About() {
  return (
    <main className='grid sm:grid-cols-2 gap-8 my-20 container justify-center items-center bg-white py-16'>
      <div className='flex justify-center items-center'>
        <Image src={room1} height={400} width={500} alt='video' />
        <p className='absolute bg-[rgba(255,255,255,.4)] opacity-70 p-4 rounded-full'>
          <FaPlay className=' text-white text-4xl z-10' />
        </p>
      </div>

      <div>
        <h1 className='font-primary text-4xl '>About Us</h1>
        <p className='mt-8 mb-4 text-gray-500'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit nobis
          magni eaque velit eum, id rem eveniet dolor possimus voluptas..
        </p>
        <p className='text-red-500'>
          WATCH VIDEO <FiArrowRight className='inline font-bold' />
        </p>
      </div>
    </main>
  );
}
