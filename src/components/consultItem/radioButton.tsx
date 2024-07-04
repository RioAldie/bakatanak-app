import React, { useEffect, useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface QuestTypes {
  selectedValue: number;
  setSelectedValue: any;
  isCheked: number;
}
const RadioButtons = (props: QuestTypes) => {
  //   const [selectedValue, setSelectedValue] = useState(0);
  const [value, setValue] = useState(0);
  const { selectedValue, setSelectedValue, isCheked } = props;
  const options = [
    { value: 0, label: 'Pasti Tidak' },
    { value: 0.1, label: 'Hampir Pasti Tidak' },
    { value: 0.2, label: 'Kemungkinan Besar Tidak' },
    { value: 0.3, label: 'Mungkin Tidak' },
    { value: 0.4, label: 'Tidak Tahu' },
    { value: 0.5, label: 'Mungkin Iya' },
    { value: 0.6, label: 'Kemungkinan Besar Iya' },
    { value: 0.8, label: 'Hampir Pasti Iya' },
    { value: 1, label: 'Sangat Pasti Iya' },
  ];
  const handleReset = () => {
    setValue(0);
  };
  const handleChange = (e: number) => {
    setSelectedValue(e);
    setValue(e);
  };
  useEffect(() => {
    handleReset();
  }, [isCheked]);

  return (
    <>
      {options.map((option, i) => {
        return (
          <div key={i} className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              onChange={() => handleChange(option.value)}
              value={option.value}
              name="cf"
              checked={value === option.value}
              className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500 dark:focus:ring-pink-600 accent-pink-600 cursor-pointer"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 ">
              {option.label}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default RadioButtons;
