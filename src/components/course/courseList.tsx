import React, { Key } from 'react';

import { getRecomendationCourse } from '@/lib/course';
import CourseItem from '../resultItem/courseItem';

type courseFormat = {
  key: String;
  _id: String;
  name: String;
  image: String;
};

const CourseList = async () => {
  const courses: Array<courseFormat> = await getRecomendationCourse();

  return (
    <div className="flex flex-row flex-wrap gap-3  justify-center w-4/5 md:mt-28 mt-3">
      {courses.map((course: courseFormat, i: Number) => {
        return (
          <CourseItem
            key={course._id as Key}
            name={course.name}
            image={course.image}
            id={course._id}
          />
        );
      })}
    </div>
  );
};

export default CourseList;
