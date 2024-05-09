'use client';
import QuestRadio from '@/components/consultItem/questRadio';
import Question from '@/components/consultItem/question';
import Image from 'next/image';
import Link from 'next/link';
import question from '../../data/question';
import { useEffect, useState } from 'react';

interface QuestionInterface {
  no: number;
  quiz: String;
  code: String;
}
interface indicatorType {
  C01: number;
  C02: number;
  C03: number;
}
const ConsultPage = () => {
  const [quest, setQuest] = useState<number>(0);
  const [active, setActive] = useState<QuestionInterface>({
    no: 1,
    quiz: '',
    code: '',
  });

  const dataQuest = question;
  const hadleQuestionActive = () => {
    setActive(dataQuest[quest]);
  };

  const handleNextQuest = () => {
    setQuest((prev) => (prev += 1));
  };

  useEffect(() => {
    hadleQuestionActive();
  }, [quest]);
  return (
    <div className="w-full min-h-screen flex items-center flex-col ">
      <p className="font-bold text-black mt-20 text-center text-2xl w-[360px]">
        Konsultasi <span className="text-pink-600">Minat Bakat</span>{' '}
      </p>

      <div className="z-10 hidden absolute md:block top-56 left-80">
        <Image
          src={'/images/ellipse2.png'}
          alt="eclipse"
          width={157}
          height={113}
        />
      </div>
      <div className="absolute top-[420px] right-72">
        <Image
          src={'/icons/Titik-titik.svg'}
          alt="titik-titik"
          width={257}
          height={198}
        />
      </div>
      <div className="md:w-[700px] w-[360px] h-[600px] p-14 z-20  backdrop-blur-md bg-white/30">
        <Question
          no={active.no}
          name={active.quiz}
          code={active.code}
          setQuest={handleNextQuest}
        />
      </div>
    </div>
  );
};

export default ConsultPage;
