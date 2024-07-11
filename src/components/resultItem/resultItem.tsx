'use client';
import ResultDisplay from './resultDisplay';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const getResultConsultation = async (data: any) => {
  const formatingData = {
    indicator: {
      c1: data[0].value,
      c2: data[1].value,
      c3: data[2].value,
      c4: data[3].value,
      c5: data[4].value,
      c6: data[5].value,
      c7: data[6].value,
      c8: data[7].value,
      c9: data[8].value,
      c10: data[9].value,
      c11: data[10].value,
      c12: data[11].value,
      c13: data[12].value,
      c14: data[13].value,
      c15: data[14].value,
      c16: data[15].value,
      c17: data[16].value,
      c18: data[17].value,
      c19: data[18].value,
      c20: data[19].value,
    },
  };

  const response = await fetch(
    'https://bakatanak-server.vercel.app/consult',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formatingData),
    }
  );
  if (!response.ok) {
    throw new Error('something is wrong!');
  }

  return response.json();
};

const ResultItem = async () => {
  const consult = useSelector(
    (state: RootState) => state.consult.value
  );

  const result = await getResultConsultation(consult).then(
    (res) => res.data
  );

  return (
    <div className="md:w-[700px] w-[360px] h-[560px] p-14 z-30  backdrop-blur-md bg-white/30">
      <ResultDisplay
        talent={result?.talent}
        prob={parseFloat(result?.prob)}
        id={result?.code}
        allResult={result?.allResult}
      />
    </div>
  );
};

export default ResultItem;
