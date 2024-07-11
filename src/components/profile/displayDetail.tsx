import Link from 'next/link';
import React from 'react';

interface DisplayDetailProps {
  talent: string;
  prob: number;
  id: string;
  allResult: any;
}
const DisplayDetail = (props: DisplayDetailProps) => {
  const { talent, prob, id, allResult } = props;

  const getPercentage = (prob: number) => {
    const formattedPercentage = (prob * 100).toFixed(2) + '%';

    return formattedPercentage;
  };

  let bestTalentProb = getPercentage(prob);
  let H01 = getPercentage(allResult.H01);
  let H02 = getPercentage(allResult.H02);
  let H03 = getPercentage(allResult.H03);
  let H04 = getPercentage(allResult.H04);
  let H05 = getPercentage(allResult.H05);
  let H06 = getPercentage(allResult.H06);
  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <p className="text-xl  text-pink-700 font-bold text-center ">
        Riwayat Konsultasi
      </p>
      <p className="text-sm font-semibold text-black">
        Berikut adalah hasil Konsultasi Minat Bakat anak
      </p>
      <p className="text-xl text-green-600 font-bold text-center ">
        {talent}
      </p>
      <div className="w-56 h-56 rounded-full border-4 flex justify-center items-center">
        <p className="font-bold text-6xl text-green-600">
          {bestTalentProb}
        </p>
      </div>
      <div className="w-full p-2 gap-2 justify-between flex flex-row flex-wrap border-t-2 border-gray-200">
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-blue-600">{H01}</p>
          </div>
          <p className="text-sm max-w-24 text-blue-600 font-bold">
            Akademik
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-indigo-800">{H02}</p>
          </div>
          <p className="text-sm  max-w-24 text-center text-indigo-800 font-bold">
            Kreatif Produktif
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-orange-600">{H03}</p>
          </div>
          <p className="text-sm max-w-24 text-orange-600 font-bold">
            Seni
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-slate-600">{H04}</p>
          </div>
          <p className="text-sm text-center max-w-24 text-slate-600 font-bold">
            Psikomotorik Kinestetik
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-yellow-600">{H05}</p>
          </div>
          <p className="text-sm text-center max-w-24 text-yellow-600 font-bold">
            Sosial
          </p>
        </div>
        <div className="w-fit flex flex-col items-center">
          <div className="w-20 h-20 p-4 rounded-full border-4 flex justify-center items-center">
            <p className="font-bold text-xl text-emerald-600">
              {H06}
            </p>
          </div>
          <p className="text-sm text-center max-w-24 text-emerald-600 font-bold">
            Leadership
          </p>
        </div>
      </div>
      <Link href={`/result/${id}`}>
        <button className="text-white mt-3 md:w-full w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Lihat Rekomendasi Kursus
        </button>
      </Link>
    </div>
  );
};

export default DisplayDetail;
