import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row items-center justify-between px-40">
      <div className="w-[500px] flex flex-col justify-start gap-5">
        <h1 className="font-bold text-5xl text-black text-poppins">
          Temukan Minat dan Bakat, Untuk{' '}
          <span className="text-pink-600">Masa Depan!</span>{' '}
        </h1>
        <p className="font-normal text-base">
          Tes minat bakat untuk mendapatkan minat bakat yang tepat
          bagi anak, agar potensi bakat mereka dapat dikembangkan
          dengan tepat.
        </p>
        <button className="w-40 h-10 bg-pink-600 text-white rounded">
          Konsultasi
        </button>
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
