import { getSession } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './menu';
import Logout from './logout';
import AuthBox from './AuthBox';

const Navbar = async () => {
  const session = await getSession();

  console.log('session:', session);

  return (
    <div className="w-full  z-30 px-10  items-center flex justify-between flex-row bg-white top-0 sticky h-14 border-b-2 border-l-slate-400">
      <Link href={'/'}>
        <div>
          <Image
            src={'/images/logo-bakatanak.png'}
            width={140}
            height={40}
            alt="logo-bakatanak"
          />
        </div>
      </Link>
      <div>
        <ul className="md:flex hidden flex-row justify-center gap-10 font-medium">
          <li className="text-slate-700 hover:text-pink-600 ">
            {' '}
            <Link href="/"> About</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/consult">Konsultasi</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/course">Kursus</Link>
          </li>
        </ul>
      </div>
      <div className="flex md:hidden ml-36 cursor-pointer">
        <svg
          className="inline text-pink-600"
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>

      <div className="md:flex gap-4 hidden">
        {session.isLoggedin ? <Logout /> : <AuthBox />}
      </div>

      {/* <img
          src="/icons/bars-solid.svg"
          className={`cursor-pointer transition ${
            isOpen ? 'rotate-180' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
          alt="dropdown"
        /> */}
      <Menu />
    </div>
  );
};

export default Navbar;
