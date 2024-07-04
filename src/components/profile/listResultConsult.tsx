'use client';

import React, { useEffect, useState } from 'react';

import { getResultByUser } from '@/lib/result';
import ResultConsultItem from './resultConsultItem';
import Loading from '../loading';

interface resultConsultProps {
  prob: number;
  name: string;
  _id: string;
  date: Date;
  talent: string;
}

interface listProps {
  userId: string | undefined;
}

const ListResultConsult = (props: listProps) => {
  const [dataResult, setDataResult] = useState<
    Array<resultConsultProps>
  >([]);
  const [isChange, setIsChange] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { userId } = props;

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const result = await getResultByUser(userId || '');
      setDataResult(result || []);
      setIsLoading(false);
    };

    fetchData();
  }, [isChange]);

  if (isLoading) return <Loading />;
  return (
    <div className="border w-full p-4 rounded-lg mt-7 h-fit">
      <div className="flex flex-row justify-between border-b pb-2">
        <p className="font-semibold text-xl">Riwayat Konsultasi</p>
      </div>
      <div className="w-full p-5 flex flex-col gap-5">
        {dataResult.length > 0 ? (
          dataResult.map((result: resultConsultProps, i: number) => (
            <ResultConsultItem
              prob={result.prob}
              key={i}
              name={result.name}
              _id={result._id}
              date={result.date}
              talent={result.talent}
              setIsChange={setIsChange}
            />
          ))
        ) : (
          <p>Belum ada riwayat</p>
        )}
      </div>
    </div>
  );
};

export default ListResultConsult;
