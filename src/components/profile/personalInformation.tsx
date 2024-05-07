import { getSession } from '@/lib/action';
import React from 'react';

const PersonalInformation = async () => {
  const session = await getSession();
  const isFetching = false;

  console.log(session);
  return (
    <div className="border p-4 rounded-lg mt-7">
      <div className="font-semibold border-b pb-2 text-xl">
        Informasi Pribadi
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-1">
        <div>
          <div className="font-medium mt-5">Email</div>
          <div
            className={`text-sm ${
              isFetching
                ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent'
                : ''
            }`}>
            {session?.email}
          </div>
        </div>
        <div>
          <div className="font-medium mt-5">Gender</div>
          <div
            className={`text-sm ${
              isFetching
                ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent'
                : ''
            }`}>
            {session?.gender}
          </div>
        </div>
        <div>
          <div className="font-medium mt-5">Umur</div>
          <div
            className={`text-sm ${
              isFetching
                ? 'animate-pulse bg-white-400 h-6 rounded-lg me-5 text-transparent'
                : ''
            }`}>
            {session?.age} Tahun
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInformation;
