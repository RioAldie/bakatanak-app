'use client';
import QuestRadio from './questRadio';
import question from '../../data/question';
import Question from './question';

const QuestionSection = () => {
  console.log(question);
  return (
    <div className="w-[700px] h-[600px] p-14 z-30  backdrop-blur-md bg-white/30"></div>
  );
};

export default QuestionSection;
