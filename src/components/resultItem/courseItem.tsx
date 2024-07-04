import Image from 'next/image';
import React from 'react';

interface CourseProps {
  name: string;
  image: string;
  id: string;
}
const CourseItem = (props: CourseProps) => {
  const { name, image, id } = props;
  return (
    <div className="p-1 w-64 border border-gray-300 rounded-3xl">
      <Image
        src={`${image}`}
        alt={name}
        width={250}
        height={250}
        className="w-64 h-44 rounded-3xl"
      />
      <p className="text-sm font-bold ml-2 my-4 text-pink-600">
        {name}
      </p>
    </div>
  );
};

export default CourseItem;
