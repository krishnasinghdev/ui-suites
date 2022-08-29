import React from 'react';
import Image from 'next/image';
import { featureIcon } from '../data/index';
export default function Feature() {
  return (
    <>
      <h1 className='text-center  bg-white font-primary text-5xl pt-20 pb-10'>
        Hotel Features
      </h1>
      <main className='grid grid-cols-2 bg-white gap-8 container pb-10 sm:grid-cols-4'>
        {featureIcon.map(({ img, title }, index) => (
          <div
            className='flex flex-col gap-6 items-center  bg-slate-100 p-4'
            key={index}
          >
            <Image src={img} height={100} width={100} alt={title} />
            <h1>{title}</h1>
          </div>
        ))}
      </main>
    </>
  );
}
