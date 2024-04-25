import StepItem from './stepItem';

const StepBox = () => {
  return (
    <div className="w-full h-fit mt-32 flex flex-col gap-14 justify-center items-center mb-14 ">
      <p className="text-l text-center text-gray-400 font-semibold">
        Apa saja fitur utama yang dimiliki{' '}
        <span className="text-pink-600">BakatMu</span> ?
      </p>
      <p className="text-xl text-center mb-8 text-black font-bold">
        {' '}
        Ada <span className="text-pink-600">3</span> fitur utama yang
        membantu mengidentifikasi minat bakat anak anda
      </p>
      <div className="w-full relative h-fit flex md:flex-row flex-col justify-evenly items-center">
        <StepItem
          urlImage="/images/step-fill-q.png"
          title="Kuisioner"
          desc="Isi seluruh Kuis yang ada, sesuai dengan pengamtan
            anda terhadap anak anda."
        />
        <StepItem
          urlImage="/images/step-res.png"
          title="Hasil Konsultasi"
          desc="Hasil Konsultasi akan menampilkan minat bakat anak anda sesuai perhitungan Certainty Factor"
        />
        <StepItem
          urlImage="/images/step-rec.png"
          title="Rekomendasi Kursus"
          desc="Anda dapat melihat rekomendasi kursus yang tepat sesuai dengan minat bakat anak anda"
        />
      </div>
    </div>
  );
};

export default StepBox;
