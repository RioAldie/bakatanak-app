import Image from 'next/image';

const StepItem = (props) => {
  const { urlImage, title, desc } = props;

  return (
    <div className="w-60 h-fit flex flex-col justify-center gap-5 items-center ">
      <Image src={urlImage} width={200} height={200} />
      <p className="text-xl h-5 text-black font-semibold text-center">
        {title}
      </p>
      <p className="text-base text-center font-normal text-gray-400">
        {desc}
      </p>
    </div>
  );
};

export default StepItem;
