import ResultItem from '@/components/resultItem/resultItem';
import Image from 'next/image';

const ResultPage = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Konsultasi <span className="text-pink-600">Minat Bakat</span>
      </p>
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
      <ResultItem />
    </div>
  );
};

export default ResultPage;
