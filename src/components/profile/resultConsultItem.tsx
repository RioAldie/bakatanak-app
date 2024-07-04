import Link from 'next/link';
import { deleteResult } from '@/lib/result';
import { Dispatch, SetStateAction } from 'react';

interface resultConsultProps {
  prob: number;
  name: string;
  _id: string;
  date: Date;
  talent: string;
  setIsChange: Dispatch<SetStateAction<boolean>>;
}
const ResultConsultItem = (props: resultConsultProps) => {
  const { prob, name, _id, date, talent, setIsChange } = props;

  const formattedPercentage = (prob * 100).toFixed(2) + '%';

  const handleDelete = async () => {
    await deleteResult(_id);

    setIsChange((prev) => !prev);
  };
  return (
    <div className="w-full   bg-white border border-gray-200 rounded-lg shadow ">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-3 gap-4">
        <div className="w-64 ">
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            {name}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {talent}
          </span>
        </div>
        <div className="w-28 ">
          <h5 className="mb-1 text-xl font-medium text-gray-900 ">
            {formattedPercentage}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {date?.toString().slice(0, 10)}
          </span>
        </div>
        <div className="flex ">
          <Link href={`/profile/${_id}`}>
            <div className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800">
              Lihat
            </div>
          </Link>
          <button
            onClick={() => handleDelete()}
            type="submit"
            className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Hapus
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultConsultItem;
