import { getSession } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './menu';
import Logout from './logout';
import AuthBox from './AuthBox';

const Navbar = async () => {
  const session = await getSession();

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
            <Link href="/warning">Konsultasi</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/course">Kursus</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/profile">Riwayat</Link>
          </li>
        </ul>
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
      <Menu isLoggedin={session.isLoggedin} />
    </div>
  );
};

export default Navbar;
