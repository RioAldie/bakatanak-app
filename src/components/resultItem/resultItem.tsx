import React from 'react';

const getResultIndicator = () => {};

const ResultItem = () => {
  return (
    <div className="w-[700px] h-[560px] p-14 z-30  backdrop-blur-md bg-white/30">
      <div className="flex justify-center flex-col gap-5 items-center">
        <p className="text-xl  text-pink-700 font-bold text-center ">
          Konsultasi Selesai
        </p>
        <p className="text-sm font-semibold text-black">
          Berikut adalah hasil konsultasi Minat Bakat anak anda
        </p>
        <p className="text-xl text-green-600 font-bold text-center ">
          Bakat Seni
        </p>
        <div className="w-56 h-56 rounded-full border-4 flex justify-center items-center">
          <p className="font-bold text-7xl text-green-600">89%</p>
        </div>
        <button className="text-white mt-3 w-full h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Lihat Rekomendasi Kursus
        </button>
      </div>
    </div>
  );
};

export default ResultItem;
