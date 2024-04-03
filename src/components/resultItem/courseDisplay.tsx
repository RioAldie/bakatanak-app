import CourseItem from './courseItem';
import { getRecomendationCourse } from '@/lib/course';

type courseFormat = {
  _id: String;
  name: String;
  image: String;
};
const CourseDisplay = async () => {
  const courses: Array<courseFormat> = await getRecomendationCourse();

  return (
    <div className="flex flex-row flex-wrap gap-3  justify-center w-4/5 md:mt-28 mt-3">
      {courses.map((course: courseFormat) => {
        return (
          <CourseItem
            key={course._id}
            name={course.name}
            image={course.image}
            id={course._id}
          />
        );
      })}
    </div>
  );
};

export default CourseDisplay;
