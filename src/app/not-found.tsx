import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function NotFound() {
  return (
    <div className="w-full min-h-screen flex items-center flex-col mt-28">
      <p className="text-black font-semibold text-xl ">
        <span className="text-pink-600">Opps...</span> Halaman tidak
        ditemukan
      </p>
      <Image
        src={'/images/not-found.png'}
        alt="not-found"
        width={400}
        height={300}
      />
      <Link href={'/'}>
        <button className="text-white mt-3 w-58  h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Kembali ke Home
        </button>
      </Link>
    </div>
  );
}

export default NotFound;
