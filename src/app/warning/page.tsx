import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const WarningPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col mb-10 ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[360px]">
        Konsultasi <span className="text-pink-600">Minat Bakat</span>{' '}
      </p>

      <div className="absolute top-[420px] right-72">
        <Image
          src={'/icons/Titik-titik.svg'}
          alt="titik-titik"
          width={257}
          height={198}
        />
      </div>
      <div className="md:w-[700px] w-[360px] h-[600px] p-14 z-20  backdrop-blur-md bg-white/30">
        <div className="flex flex-col justify-between items-center gap-6 ">
          <p className="text-xl w-full text-center font-semibold text-pink-700">
            Perhatian!
          </p>
          <div className="flex-col justify-between items-start gap-6 max-h-[500px">
            <p className="text-base font-semibold text-black">
              1. Pilih ciri-ciri pada soal yang paling menggambarkan
              anak Anda.
            </p>
            <p className="text-base font-semibold text-black mt-5">
              2. Tidak ada jawaban benar atau salah pada setiap
              pertanyaan.
            </p>
            <p className="text-base font-semibold text-black mt-5">
              3. Hasil konsultasi ini tidak sepenuhnya akurat. Untuk
              mendapatkan hasil yang lebih pasti, disarankan untuk
              melakukan konsultasi langsung dengan pakar.
            </p>
            <p className="text-base font-semibold text-black mt-5">
              4. Jika ragu pada sebuah pertanyaan, pilih jawaban yang
              paling mendekati.
            </p>
            <p className="text-base font-semibold text-black mt-5">
              5. Jika Anda memiliki pertanyaan atau membutuhkan
              klarifikasi lebih lanjut, jangan ragu untuk menghubungi
              kami.
            </p>
          </div>

          <Link href={'/consult'}>
            <button className="text-white mt-3  w-56  h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
              Mulai
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WarningPage;
