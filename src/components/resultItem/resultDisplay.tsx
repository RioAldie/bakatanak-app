import Link from 'next/link';

const ResultDisplay = (params: any) => {
  const { talent, prob, id } = params;

  const formattedPercentage = (prob * 100).toFixed(2) + '%';
  return (
    <div className="flex justify-center flex-col gap-5 items-center">
      <p className="text-xl  text-pink-700 font-bold text-center ">
        Konsultasi Selesai
      </p>
      <p className="text-sm font-semibold text-black">
        Berikut adalah hasil konsultasi Minat Bakat anak anda
      </p>
      <p className="text-xl text-green-600 font-bold text-center ">
        {talent}
      </p>
      <div className="w-56 h-56 rounded-full border-4 flex justify-center items-center">
        <p className="font-bold text-6xl text-green-600">
          {formattedPercentage}
        </p>
      </div>
      <Link href={`/result/${id}`}>
        <button className="text-white mt-3 md:w-full w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Lihat Rekomendasi Kursus
        </button>
      </Link>
    </div>
  );
};

export default ResultDisplay;
