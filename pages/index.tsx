import type { NextPage } from 'next';
import About from '../components/About';
import Event from '../components/Event';
import Feature from '../components/Feature';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Promo from '../components/Promo';
import Review from '../components/Review';
import RoomCard from '../components/RoomCard';
import { roomData } from '../data';
import { GetStaticProps } from 'next';
import { StaticImageData } from 'next/image';
const Home = () => {
  return (
    <>
      <Hero />
      <h1 className='text-center font-primary text-5xl mt-20 mb-10'>
        Our Rooms
      </h1>
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8'>
        {roomData.map((data, index) => (
          <RoomCard
            key={index}
            img={data?.img}
            title={data?.title}
            price={data?.price}
          />
        ))}
      </section>
      <About />
      <Feature />
      <Promo />
      <Gallery />
      <Event />
      <Review />
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      roomData,
    },
  };
};
