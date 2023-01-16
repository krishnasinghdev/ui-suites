import Link from 'next/link';
import { useState } from 'react';
import { navLinks } from '../data/index';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCross } from 'react-icons/im';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav
        className={` py-4 pt-4 fixed shadow-md w-screen container z-10 top-0 flex justify-between items-center bg-white `}
      >
        <Link href='/'>
          <h1 className='font-serif text-3xl'>Suites</h1>
        </Link>
        <div className={`hidden lg:flex gap-6 text-black`}>
          {navLinks.map(({ path, title }, index) => (
            <Link href={path} key={index}>
              <a className=' hover:text-gray-400'>{title}</a>
            </Link>
          ))}
        </div>
        {!showMenu && (
          <AiOutlineMenu
            className='text-3xl lg:hidden'
            onClick={() => setShowMenu((prev) => !prev)}
          />
        )}
      </nav>
      {/* MOBILE MENU */}

      {showMenu && (
        <aside className='w-[60vw] h-screen fixed bg-white transition flex flex-col gap-5 p-4 duration-1000  z-10 right-0'>
          <ImCross
            onClick={() => setShowMenu(false)}
            className='self-end mr-4 mt-4 text-2xl'
          />
          {navLinks.map(({ title, path }, index) => (
            <Link href={path} key={index}>
              <a
                className={'text-black hover:text-gray-400 '}
                onClick={() => setShowMenu(false)}
              >
                {title}
              </a>
            </Link>
          ))}
        </aside>
      )}
    </>
  );
}
