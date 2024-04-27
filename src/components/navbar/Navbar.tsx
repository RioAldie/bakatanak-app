'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <div
        className="flex md:hidden ml-36 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}>
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
        <Link href={'/auth/login'}>
          <button className="text-pink-600 h-11 bg-white transition-all duration-300 hover:text-white hover:bg-pink-700 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
            Login
          </button>
        </Link>
        <Link href={'/auth/register'}>
          <button className="text-white h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
            Daftar
          </button>
        </Link>
      </div>

      {/* <img
          src="/icons/bars-solid.svg"
          className={`cursor-pointer transition ${
            isOpen ? 'rotate-180' : ''
          }`}
          onClick={() => setIsOpen(!isOpen)}
          alt="dropdown"
        /> */}
      <div className={`absolute ${isOpen ? 'block' : 'hidden'} `}>
        <ul className="mt-20 ms-[-40px] lg:ms-[-240px] bg-pink-600 w-[200px] lg:w-[260px]">
          <li className="bg-pink-600 hover:bg-pink-800 text-white  py-2 px-5  justify-center ">
            <Link
              href={'/'}
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full cursor-pointer flex items-center">
              <svg
                className="inline me-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 576 512">
                <path
                  fill="#ffffff"
                  d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"
                />
              </svg>
              Home
            </Link>
          </li>
          <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 ">
            <Link
              href="/consult"
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full flex items-center">
              <svg
                className="inline me-3 text-white"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M13.5 20c-6.6-6.1-10-9.2-10-12.9C3.5 4 5.9 1.6 9 1.6c1.7 0 3.4.8 4.5 2.1c1.1-1.3 2.8-2.1 4.5-2.1c3.1 0 5.5 2.4 5.5 5.5c0 3.8-3.4 6.9-10 12.9M12 21.1C5.4 15.2 1.5 11.7 1.5 7v-.6c-.6.9-1 2-1 3.2c0 3.8 3.4 6.9 10 12.8l1.5-1.3Z"
                />
              </svg>
              Konsultasi
            </Link>
          </li>
          <li className="bg-pink-600 hover:bg-pink-800 text-white py-2 px-5 rounded-b-md cursor-pointer">
            <Link
              href="/course"
              onClick={() => setIsOpen(!isOpen)}
              className=" w-full flex items-center">
              <svg
                className="inline me-3 text-white "
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 640 512">
                <path
                  fill="#ffffff"
                  d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
                />
              </svg>
              Kursus
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
