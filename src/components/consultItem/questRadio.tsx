import React from 'react';

interface QuestRadio {
  id: string;
  value: number;
  name: String;
}

const QuestRadio = (props: QuestRadio) => {
  const { id, value, name } = props;
  return (
    <div className="flex items-center  ">
      <input
        id={id}
        type="radio"
        value={value}
        name="cf"
        className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500 dark:focus:ring-pink-600 accent-pink-600"
      />
      <label
        htmlFor="cf-1"
        className="ms-2 text-sm font-medium text-gray-900">
        {name}
      </label>
    </div>
  );
};

export default QuestRadio;
