'use client';
import QuestRadio from '@/components/consultItem/questRadio';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const ConsultPage = () => {
  const [check, setCheck] = useState(false);
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Konsultasi <span className="text-pink-600">Minat Bakat</span>{' '}
      </p>
      {/* <div className="w-[700px] h-[540px] z-30 backdrop-blur-md bg-white/30"></div> */}
      <div className="z-10 absolute top-56 left-80">
        <Image
          src={'/images/ellipse.png'}
          alt="eclipse"
          width={157}
          height={113}
        />
      </div>
      <div className="absolute top-[420px] right-72">
        <Image
          src={'/icons/Titik-titik.svg'}
          alt="titik-titik"
          width={257}
          height={198}
        />
      </div>
      <div className="w-[700px] h-[600px] p-14 z-30  backdrop-blur-md bg-white/30">
        <div className="flex justify-center flex-col gap-5 items-start">
          <p className="text-lg  text-pink-600 font-bold text-center ">
            Pilih diantara pilihan ini yang sesuai dengan anak anda!
          </p>
          <p>
            1. Apakah Anak anda senang dan aktif saat diajak berbicara
            ?
          </p>
          <div className="flex flex-col gap-4 justify-center p-5">
            <QuestRadio name={'Sangat pasti'} value={1} id={'cf-1'} />
            <QuestRadio name={'Hampir Pasti'} value={0.8} id="cf-2" />
            <QuestRadio
              name={'Kemungkinan Besar'}
              value={0.6}
              id="cf-2"
            />
            <QuestRadio name={'Mungkin'} value={0.5} id="cf-2" />
            <QuestRadio name={'Tidak Tahu'} value={0.4} id="cf-2" />
            <QuestRadio
              name={'Mungkin Tidak'}
              value={0.3}
              id="cf-2"
            />
            <QuestRadio
              name={'Kemungkinan Besar Tidak'}
              value={0.2}
              id="cf-2"
            />
            <QuestRadio
              name={'Hampir Pasti Tidak'}
              value={0.1}
              id="cf-2"
            />
            <QuestRadio name={'Pasti Tidak'} value={0} id="cf-2" />
          </div>
          <div className="w-full flex  items-center justify-center">
            <Link href={'/result'}>
              <button className="text-white mt-3 w-32 h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
                Next
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultPage;
