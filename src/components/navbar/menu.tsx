'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import LogoutMobile from './logoutMobile';
import {
  HomeIcon,
  AcademicCapIcon,
  ChartPieIcon,
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  ArrowRightEndOnRectangleIcon,
  UserIcon,
} from '@heroicons/react/24/solid';

interface menuProps {
  isLoggedin?: boolean;
}

const Menu = (props: menuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedin } = props;
  return (
    <>
      <div
        className="flex md:hidden ml-36 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
        <Bars3BottomLeftIcon className="size-8 text-pink-600" />
      </div>
      <div className={`absolute ${isOpen ? 'block' : 'hidden'} `}>
        <ul className="mt-40 ms-[-36px] lg:ms-[-240px] bg-pink-600 w-[200px] lg:w-[260px]">
          <li className="bg-pink-600 hover:bg-pink-800 text-white  py-2 px-5  justify-center ">
            <Link
              href={'/'}
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full cursor-pointer flex items-center">
              <HomeIcon className="size-4 me-3 text-white" />
              Home
            </Link>
          </li>
          <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 ">
            <Link
              href="/warning"
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full flex items-center">
              <ChartPieIcon className="size-4 me-3 text-white" />
              Konsultasi
            </Link>
          </li>
          <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-b-md cursor-pointer">
            <Link
              href="/course"
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full flex items-center">
              <AcademicCapIcon className="size-4 me-3 text-white" />
              Kursus
            </Link>
          </li>
          <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-b-md cursor-pointer">
            <Link
              href="/profile"
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full flex items-center">
              <ArchiveBoxIcon className="size-4 me-3 text-white" />
              Riwayat
            </Link>
          </li>
          {!isLoggedin ? (
            <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-b-md cursor-pointer">
              <Link
                href="/login"
                onClick={() => setIsOpen(!isOpen)}
                className=" w-full flex items-center">
                <UserIcon className="size-4 me-3 text-white" />
                Login
              </Link>
            </li>
          ) : (
            <li
              className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-b-md cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}>
              <LogoutMobile />
            </li>
          )}
        </ul>
      </div>{' '}
    </>
  );
};

export default Menu;
