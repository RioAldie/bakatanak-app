import React from 'react';

interface CourseProps {
  name: String;
  image: String;
  id: String;
}
const CourseItem = (props: CourseProps) => {
  const { name, image, id } = props;
  return (
    <div className="p-1 w-64 border border-gray-300 rounded-3xl">
      <img
        src={`${image}`}
        alt="img"
        className="w-64 h-44 rounded-3xl"
      />
      <p className="text-sm font-bold ml-2 my-4 text-pink-600">
        {name}
      </p>
    </div>
  );
};

export default CourseItem;
