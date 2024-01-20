import Image from 'next/image';
import Link from 'next/link';

const Main = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Selamat Datang di Konsultasi{' '}
        <span className="text-pink-600">Minat Bakat</span>{' '}
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
      <div className="w-[700px] h-[360px] p-14 z-30  backdrop-blur-md bg-white/30">
        <div className="flex justify-center flex-col gap-5 items-center">
          <p className="text-xl  text-pink-700 font-bold text-center ">
            Perhatian!
          </p>
          <p className="text-sm w-full font-semibold text-black">
            1. Pilih ciri-ciri pada soal yang menurut anda sesuai
            dengan anak anda
          </p>
          <p className="text-sm w-full font-semibold text-black">
            2. Tidak ada jawaban yang benar maupun salah pada setiap
            pertanyaan
          </p>
          <p className="text-sm w-full font-semibold text-black">
            3. Hasil konsultasi ini tidak mutlak benar, untuk
            mendapatkan hasil yang lebih pasti bisa melakukan
            konsultasi langsung dengan pakar
          </p>
          <Link href={'consult'}>
            <button className="text-white mt-3 w-32 h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
              Mulai
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
