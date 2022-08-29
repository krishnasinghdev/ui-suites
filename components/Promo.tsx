import React from 'react';

export default function Promo() {
  return (
    <div className='container bg-bg-2 py-16 bg-fixed grid sm:grid-cols-2 gap-8 text-white bg-transparent'>
      <div>
        <h1 className='text-3xl '>Summer Promo 50% Off</h1>
        <button className='border mt-4 border-yellow-400 hover:bg-yellow-400 py-2 px-4 '>
          AVAIL NOW
        </button>
      </div>
      <div>
        <p className='mb-4 tracking-wider'>THE PROMO WILL START IN</p>
        <span className='text-3xl'>00</span>{' '}
        <span className='text-gray-400'>weeks </span>
        <span className='text-3xl'>00</span>{' '}
        <span className='text-gray-400'>days </span>
        <span className='text-3xl'>00</span>{' '}
        <span className='text-gray-400'>hr </span>
        <span className='text-3xl'>00</span>{' '}
        <span className='text-gray-400'>min </span>
        <span className='text-3xl'>00</span>{' '}
        <span className='text-gray-400'>sec </span>
      </div>
    </div>
  );
}
