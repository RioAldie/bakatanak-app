import Link from 'next/link';
import React from 'react';

const AuthBox = () => {
  return (
    <>
      <Link href={'/login'}>
        <button className="text-pink-600 h-11 bg-white transition-all duration-300 hover:text-white hover:bg-pink-700 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
          Login
        </button>
      </Link>
      <Link href={'/register'}>
        <button className="text-white h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
          Daftar
        </button>
      </Link>
    </>
  );
};

export default AuthBox;
