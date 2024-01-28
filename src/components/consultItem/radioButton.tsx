import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

interface QuestTypes {
  selectedValue: number;
  setSelectedValue: any;
}
const RadioButtons = (props: QuestTypes) => {
  //   const [selectedValue, setSelectedValue] = useState(0);
  const { selectedValue, setSelectedValue } = props;
  const options = [
    { value: 1, label: 'Sangat Pasti' },
    { value: 0.8, label: 'Hampir Pasti' },
    { value: 0.6, label: 'Kemungkinan Besar' },
    { value: 0.5, label: 'Mungkin' },
    { value: 0.4, label: 'Tidak Tahu' },
    { value: 0.3, label: 'Mungkin Tidak' },
    { value: 0.2, label: 'Kemungkinan Besar Tidak' },
    { value: 0.1, label: 'Hampir Pasti Tidak' },
    { value: 0, label: 'Pasti Tidak' },
  ];

  return (
    <RadioGroup value={selectedValue} onChange={setSelectedValue}>
      <RadioGroup.Label className="font-medium mb-5">
        Berdasarkan pengmatan anda:
      </RadioGroup.Label>
      <div className="space-y-2 mt-4">
        {options.map((option) => (
          <RadioGroup.Option key={option.value} value={option.value}>
            {() => (
              <div className="flex items-center">
                <input
                  type="radio"
                  name="cf"
                  className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500 dark:focus:ring-pink-600 accent-pink-600"
                />
                <p className="ms-2 text-sm font-medium text-gray-900">
                  {option.label}
                </p>
              </div>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};

export default RadioButtons;
