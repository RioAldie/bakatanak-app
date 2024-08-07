const Loading = () => {
  return (
    <section className="pt-24 px-[6.25%] text-navy h-fit transition-all mb-20 sm:mb-12">
      <div className="w-full min-h-screen flex items-center flex-col mt-28">
        <div className="flex items-center justify-center  border border-gray-200 rounded-lg bg-gray-50 ">
          <div className="px-3 py-1 text-xs font-medium leading-none text-center text-pink-800 bg-pink-200 rounded-full animate-pulse ">
            loading...
          </div>
        </div>
      </div>
    </section>
  );
};

export default Loading;
