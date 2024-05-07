import { getSession } from '@/lib/action';
import { getResultByUser } from '@/lib/result';
import ResultConsultItem from './resultConsultItem';
import { revalidatePath } from 'next/cache';

interface resultConsultProps {
  prob: number;
  name: string;
  _id: string;
  date: Date;
  talent: string;
}
const ListResultConsult = async () => {
  revalidatePath('/profile');
  const session = await getSession();
  const dataResult = await getResultByUser(session.userId || '');

  return (
    <div className="border w-full  p-4 rounded-lg mt-7 h-fit">
      <div className="font-semibold border-b pb-2 text-xl">
        Riwayat Konsultasi
      </div>
      <div className="w-full p-5 flex flex-col gap-5">
        {dataResult.length > 0 ? (
          dataResult.map((result: resultConsultProps, i: any) => {
            return (
              <ResultConsultItem
                prob={result.prob}
                key={i}
                name={result.name}
                _id={result._id}
                date={result.date}
                talent={result.talent}
              />
            );
          })
        ) : (
          <p>Belum ada riwayat</p>
        )}
      </div>
    </div>
  );
};

export default ListResultConsult;
