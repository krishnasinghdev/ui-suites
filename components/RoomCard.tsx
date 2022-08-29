import Image from 'next/image';
import React from 'react';

type RoomType = {
  img: String | any;
  title: String;
  price: String;
  key: Number;
};

export default function RoomCard({ img, title, price }: RoomType) {
  return (
    <div className='bg-white hover:shadow-sm'>
      <Image
        src={img.src}
        className='hover:scale-105 transition duration-500 '
        alt='room'
        layout='responsive'
        height={270}
        width={400}
      />
      <div className='flex flex-col items-center my-8'>
        <p className='font-semibold '>{title}</p>
        <p className='text-gray-500'>{price}</p>
      </div>
    </div>
  );
}
