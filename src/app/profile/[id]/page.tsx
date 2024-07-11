import DisplayDetail from '@/components/profile/displayDetail';
import { getResultDetailByID } from '@/lib/result';
import Image from 'next/image';
import React, { Suspense } from 'react';

const ResultConsultPage = async ({
  params,
}: {
  params: { id: string };
}) => {
  const result = await getResultDetailByID(params.id);

  const code =
    result.talent === 'Bakat Akademik Khusus'
      ? 'H01'
      : result.talent === 'Kreatif Produktif'
      ? 'H02'
      : result.talent === 'Seni'
      ? 'H03'
      : result.talent === 'Kinestetik/Psikomotorik'
      ? 'H04'
      : result.talent === 'Sosial'
      ? 'H05'
      : 'H06';
  return (
    <div className="w-full min-h-screen flex items-center flex-col mb-48">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[360px]">
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
      <div className="md:w-[700px] w-[360px] h-[560px] p-14 z-30  backdrop-blur-md bg-white/30">
        <Suspense fallback={<div>Loading...</div>}>
          <DisplayDetail
            talent={result?.talent}
            prob={parseFloat(result?.prob)}
            id={code}
            allResult={result?.allResult}
          />
        </Suspense>
      </div>
    </div>
  );
};

export default ResultConsultPage;
