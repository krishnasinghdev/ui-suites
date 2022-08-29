import React from 'react';
import { galleryImg } from '../data';
import Image from 'next/image';
export default function Gallery() {
  return (
    <>
      <h1 className='text-center  bg-white font-primary text-5xl pt-20 pb-10'>
        Our Gallery
      </h1>
      <main className='grid sm:grid-cols-2 lg:grid-cols-4 container'>
        {galleryImg.map((img, index) => (
          <Image
            src={img}
            height={200}
            width={200}
            alt={'gallery images'}
            key={index}
            className='hover:cursor-zoom-in hover:scale-110 transition duration-500 '
          />
        ))}
      </main>
    </>
  );
}
