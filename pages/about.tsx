import React from 'react';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Promo from '../components/Promo';
import StaffCard from '../components/StaffCard';
import { staffData } from '../data';

type staffDataType = {
  img: StaticImageData;
  title: string;
  price: string;
}[];

export default function about(staffData: staffDataType) {
  return (
    <>
      <Header t1={'About Us'} t2={'SUITES HOTEL & RESORT'} />
      <About />
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8'>
        {staffData.staffData.map((data, index) => (
          <StaffCard
            key={index}
            img={data?.img}
            title={data?.title}
            price={data?.price}
          />
        ))}
      </section>
      <Promo />
      <Gallery />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      staffData,
    },
  };
};
