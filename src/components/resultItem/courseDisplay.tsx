'use client';

import CourseItem from './courseItem';

const getRecomendationCourse = async () => {
  const response = await fetch(
    'https://bakatanak-server.vercel.app/course',
    {
      method: 'GET',
    }
  );

  if (!response.ok) {
    throw new Error('something is wrong!');
  }

  return response.json();
};

type courseFormat = {
  _id: String;
  name: String;
  image: String;
};
const CourseDisplay = async () => {
  const result =
    (await getRecomendationCourse().then((res) => res.data)) || [];

  console.log('courses =>', result);
  return (
    <div className="flex flex-row flex-wrap gap-3  justify-center w-4/5 mt-28">
      {result.map((course: courseFormat) => {
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
