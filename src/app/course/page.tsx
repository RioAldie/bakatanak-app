import CourseDisplay from '@/components/resultItem/courseDisplay';
import { revalidatePath } from 'next/cache';

const CoursePage = () => {
  revalidatePath('/course');
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[400px]">
        Rekomendasi <span className="text-pink-600">Kursus</span>
      </p>
      <p className="text-sm mt-3 w-full text-center font-semibold text-black">
        Berikut adalah Rekomendasi Kursus untuk pengembangan bakat
        Atletik
      </p>
      <CourseDisplay />
    </div>
  );
};

export default CoursePage;
