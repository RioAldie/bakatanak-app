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
  ]);

  const handleSetValueCfIndicator = (e: any) => {
    e.preventDefault();

    for (let i = 0; i < cfIndicator.length; i++) {
      if (cfIndicator[i].code === code) {
        console.log('value: ', selectedValue);
      }
    }

    handleNextQuest();
  };
  let counter = 0;
  const handleNextQuest = () => {
    counter = counter + 1;
    setQuest();
  };
  return (
    <div className="flex justify-center flex-col gap-5 items-start">
      <p className="text-lg  text-pink-600 font-bold text-center ">
        Pilih diantara pilihan ini yang sesuai dengan anak anda!
      </p>
      <p>
        {no}. {name}
      </p>
      <form action="" onSubmit={(e) => handleSetValueCfIndicator(e)}>
        {/* <div className="flex flex-col gap-4 justify-center p-5">
          <QuestRadio name={'Sangat pasti'} value={1} id={'cf-1'} />
          <QuestRadio name={'Hampir Pasti'} value={0.8} id="cf-2" />
          <QuestRadio
            name={'Kemungkinan Besar'}
            value={0.6}
            id="cf-2"
          />
          <QuestRadio name={'Mungkin'} value={0.5} id="cf-2" />
          <QuestRadio name={'Tidak Tahu'} value={0.4} id="cf-2" />
          <QuestRadio name={'Mungkin Tidak'} value={0.3} id="cf-2" />
          <QuestRadio
            name={'Kemungkinan Besar Tidak'}
            value={0.2}
            id="cf-2"
          />
          <QuestRadio
            name={'Hampir Pasti Tidak'}
            value={0.1}
            id="cf-2"
          />
          <QuestRadio name={'Pasti Tidak'} value={0} id="cf-2" />
        </div> */}
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
