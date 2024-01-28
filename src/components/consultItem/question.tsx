'use client';
import QuestRadio from './questRadio';
import question from '../../data/question';
import { useState } from 'react';
import RadioButtons from './radioButton';

interface QuestionInterface {
  no: number;
  name: String;
  code: String;
  setQuest: () => void;
}

const Question = (props: QuestionInterface) => {
  const { name, code, no, setQuest } = props;
  const [value, setValue] = useState(0);
  const [selectedValue, setSelectedValue] = useState(0);
  const [cfIndicator, setCfIndicator] = useState([
    {
      code: 'C01',
      value: 0,
    },
    {
      code: 'C02',
      value: 0,
    },
    {
      code: 'C03',
      value: 0,
    },
    {
      code: 'C04',
      value: 0,
    },
    {
      code: 'C05',
      value: 0,
    },
    {
      code: 'C06',
      value: 0,
    },
    {
      code: 'C07',
      value: 0,
    },
    {
      code: 'C08',
      value: 0,
    },
    {
      code: 'C09',
      value: 0,
    },
    {
      code: 'C10',
      value: 0,
    },

    {
      code: 'C11',
      value: 0,
    },
    {
      code: 'C12',
      value: 0,
    },
    {
      code: 'C13',
      value: 0,
    },
    {
      code: 'C14',
      value: 0,
    },
    {
      code: 'C15',
      value: 0,
    },
    {
      code: 'C16',
      value: 0,
    },
    {
      code: 'C17',
      value: 0,
    },
    {
      code: 'C18',
      value: 0,
    },
    {
      code: 'C19',
      value: 0,
    },
    {
      code: 'C20',
      value: 0,
    },
  ]);

  const handleSetValueCfIndicator = (e: any) => {
    e.preventDefault();

    let prevObj = cfIndicator;
    let objIndex = cfIndicator.findIndex((obj) => obj.code === code);

    prevObj[objIndex].value = selectedValue;

    setCfIndicator(prevObj);

    if (code === 'C20') {
      return handleFinish();
    }
    handleNextQuest();
  };
  let counter = 0;
  const handleNextQuest = () => {
    counter = counter + 1;
    setQuest();

    console.log(cfIndicator);
  };
  const handleFinish = () => {
    console.log('hasil:', cfIndicator);
  };
  return (
    <div className="flex justify-center flex-col gap-5 items-start">
      <p className="text-lg  text-pink-600 font-bold text-center ">
        Pilih diantara pilihan ini yang sesuai dengan anak anda!
      </p>
      <p className="font-medium">
        {no}. {name}
      </p>
      <form action="" onSubmit={(e) => handleSetValueCfIndicator(e)}>
        <RadioButtons
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
        <div className="w-full flex  items-center justify-center">
          {no !== 20 ? (
            <button className="text-white mt-3 w-32 h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
              Next
            </button>
          ) : (
            <button className="text-white mt-3 w-32 h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
              Selesai
            </button>
          )}{' '}
        </div>
      </form>
    </div>
  );
};

export default Question;
