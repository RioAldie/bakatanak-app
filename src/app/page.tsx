import Image from 'next/image';
import Link from 'next/link';
import StepBox from '@/components/steps/stepBox';

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex min-h-screen h-max md:flex-row flex-col items-center md:justify-around justify-center md:px-40 px-2 gap-11 mt-10 ">
        <div className="w-[360px] flex flex-col md:justify-start justify-center md:items-start items-center gap-5 md:text-left text-center">
          <h1 className="font-bold md:text-5xl text-3xl text-black text-poppins">
            Temukan Minat dan Bakat, Untuk{' '}
            <span className="text-pink-600">Masa Depan!</span>{' '}
          </h1>
          <p className="font-normal text-base">
            Dengan menemukan minat dan bakat yang tepat, potensi anak
            dapat terasah dengan optimal dan masa depan mereka akan
            lebih cerah.
          </p>
          <Link
            href={'/warning'}
            className=" text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
            Konsultasi
          </Link>
        </div>

        <div>
          <Image
            src={'/images/thumbnail-bakatanak.png'}
            alt="thumbnail-bakatanak"
            width={470}
            height={421}
          />
        </div>
      </div>
      <StepBox />
    </main>
  );
}
