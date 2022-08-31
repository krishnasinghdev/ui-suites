import React from 'react';
import Header from '../components/Header';
import Promo from '../components/Promo';
import RoomCard from '../components/RoomCard';
import { roomData } from '../data';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';

export default function room(
  roomData: {
    img: StaticImageData;
    title: string;
    price: string;
  }[]
) {
  return (
    <>
      <Header t1={'Hotel Rooms'} t2={'LUXURIOUS ROOMS '} />
      <h1 className='text-center font-primary text-5xl mt-20 mb-10'>
        Our Rooms
      </h1>
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8'>
        {roomData.roomData.map((data, index) => (
          <RoomCard
            key={index}
            img={data?.img}
            title={data?.title}
            price={data?.price}
          />
        ))}
      </section>
      <Promo />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      roomData,
    },
  };
};
