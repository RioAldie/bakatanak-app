import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen h-max md:flex-row flex-col items-center md:justify-between justify-center md:px-40 px-2 gap-11 py-8">
      <div className="w-[360px] flex flex-col md:justify-start justify-center md:items-start items-center gap-5 md:text-left text-center">
        <h1 className="font-bold md:text-5xl text-3xl text-black text-poppins">
          Temukan Minat dan Bakat, Untuk{' '}
          <span className="text-pink-600">Masa Depan!</span>{' '}
        </h1>
        <p className="font-normal text-base">
          Tes minat bakat untuk mendapatkan minat bakat yang tepat
          bagi anak, agar potensi bakat mereka dapat dikembangkan
          dengan tepat.
        </p>
        <Link
          href={'/consult'}
          className="w-40 h-10 bg-pink-600 text-white rounded flex items-center justify-center">
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
    </main>
  );
}
