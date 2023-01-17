import React from 'react';
import { GetStaticProps } from 'next';
import Image, { StaticImageData } from 'next/image';
import bg1 from '../public/bg1.webp';
import bg2 from '../public/bg2.webp';
import bg3 from '../public/bg3.webp';
import room1 from '../public/room1.webp';
import room2 from '../public/room2.webp';
import Header from '../components/Header';
import { VscDebugStackframeDot } from 'react-icons/vsc';

const imgData = [bg1, bg2, bg3, room1, room2];



export default function event() {
  return (
    <>
      <Header t1={'READ OUR'} t2={'Blogs & Events '} />
      <section className='grid sm:grid-cols-2 lg:grid-cols-3 container gap-8 mt-16'>
        <div className='flex flex-col'>
          <Image
            src={imgData[0]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[1]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[3]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[2]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[4]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[1]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[3]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[2]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
        <div className='flex flex-col'>
          <Image
            src={imgData[4]}
            height={250}
            width={400}
            alt='galllery'
          />
          <div className='text-left mt-6'>
            <h1 className='mt-2'>Lorem ipsum dolor sit amet. </h1>
            <p className='text-gray-400 text-sm my-1 '>
              Dec 20th, 2022 <VscDebugStackframeDot className='inline' />{' '}
              <span className='text-red-500'>By Admin</span>{' '}
            </p>
            <p className='text-gray-400 font-light'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed odit
              officia labore in, perferendis mollitia. Optio, pariatur? Ad,
              repellendus voluptas.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      imgData,
    },
  };
};
