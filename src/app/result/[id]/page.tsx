import Loading from '@/components/loading';
import CourseDisplay from '@/components/resultItem/courseDisplay';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';

const RecommendationPage = ({
  params,
}: {
  params: { id: string };
}) => {
  const talent =
    params.id === 'H01'
      ? 'Akademik'
      : params.id === 'H02'
      ? 'Kreatif Produktif'
      : params.id === 'H03'
      ? 'Seni'
      : params.id === 'H04'
      ? 'Kinestetik/Psikomotorik'
      : params.id === 'H05'
      ? 'Sosial'
      : 'Kepemimpinan';
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Rekomendasi <span className="text-pink-600">Kursus</span>
      </p>
      <p className="text-sm mt-3 w-full text-center font-semibold text-black">
        Berikut adalah Rekomendasi Kursus untuk pengembangan bakat{' '}
        <span className="text-pink-600 font-bold">{talent}</span>
      </p>
      <Suspense fallback={<Loading />}>
        <CourseDisplay id={params.id} />
      </Suspense>
    </div>
  );
};

export default RecommendationPage;
