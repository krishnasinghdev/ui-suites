import React from 'react';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className='container'>
      <div className='mx-6 py-10 text-center text-left'>
        <div className='grid grid-1 grid-cols-2 lg:grid-cols-4 gap-8'>
          <div>
            <div className='  font-semibold mb-4 flex items-center justify-center '>
              <h1 className='font-serif text-3xl'>Suites</h1>
            </div>
            <p>
              Here you can use rows and columns to organize your footer content.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Quick Menu
            </h6>
            <Link href='/room'>
              <a className='text-gray-600 block'>Rooms</a>
            </Link>
            <Link href='/event'>
              <a className='text-gray-600 block'>Events</a>
            </Link>
            <Link href='/about'>
              <a className='text-gray-600 block'>About</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Useful links
            </h6>
            <Link href='/'>
              <a className='text-gray-600 block'>Support</a>
            </Link>
            <Link href='/'>
              <a className='text-gray-600 block'>Managers</a>
            </Link>
            <Link href='/'>
              <a className='text-gray-600 block'>Services</a>
            </Link>
          </div>
          <div>
            <h6 className=' font-semibold mb-4 flex justify-center '>
              Contact
            </h6>
            <ul className='text-gray-600'>
              <li>Abc, Area Plot1</li>
              <li>Near Ney York </li>
              <li>+938-493-5892</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
