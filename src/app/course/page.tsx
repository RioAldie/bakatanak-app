import CourseList from '@/components/course/courseList';
import Loading from '@/components/loading';
import { revalidatePath } from 'next/cache';
import { Suspense } from 'react';

const CoursePage = () => {
  revalidatePath('/course');
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Semua <span className="text-pink-600">Kursus</span>
      </p>
      <p className="text-sm mt-3 w-full text-center font-semibold text-black">
        Rekomendasi kursus untuk pengembangan Minat Bakat Anak
      </p>
      <Suspense fallback={<Loading />}>
        <CourseList />
      </Suspense>
    </div>
  );
};

export default CoursePage;
