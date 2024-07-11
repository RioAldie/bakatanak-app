'use client';
import { useState } from 'react';
import Navlink from './navlink';
import {
  ArchiveBoxIcon,
  Bars3Icon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Menu from './menu';
import Link from 'next/link';
import LogoutMobile from './logoutMobile';

interface menuProps {
  isLoggedin?: boolean;
}

const BoxNavlink = (props: menuProps) => {
  const [active, setActive] = useState(false);
  const { isLoggedin } = props;
  return (
    <>
      <div className="flex flex-row items-center gap-2">
        <button
          type="button"
          onClick={() => setActive(!active)}
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 focus:outline-none focus:ring-4 focus:ring-neutral-200 rounded-lg text-sm p-2.5 me-1">
          <Bars3Icon className="size-6 text-neutral-500" />
        </button>
      </div>
      <div
        className={`items-center justify-between ${
          active ? 'block' : 'hidden'
        } w-full md:flex md:w-auto md:order-1`}
        id="navbar-search">
        <ul className="flex flex-col p-2  mt-4 font-medium border border-none bg-white rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-[3px] ">
          <Navlink setActive={setActive} path={'/'} name={'Home'} />
          <Navlink
            setActive={setActive}
            path={'/warning'}
            name={'Konsultasi'}
          />
          <Navlink
            setActive={setActive}
            path={'/course'}
            name={'Kursus'}
          />
          <Navlink
            setActive={setActive}
            path={'/profile'}
            name={'Riwayat'}
          />

          {!isLoggedin ? (
            <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-md cursor-pointer">
              <Link
                href="/login"
                className=" w-full flex items-center">
                <UserIcon className="size-4 me-3 text-white" />
                Login
              </Link>
            </li>
          ) : (
            <li className="bg-pink-600  hover:bg-pink-800 text-white py-2 px-5 rounded-md cursor-pointer">
              <LogoutMobile />
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default BoxNavlink;
