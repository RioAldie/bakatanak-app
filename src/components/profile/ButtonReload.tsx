'use client';
import { ArrowPathIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';
import React from 'react';

const ButtonReload = () => {
  return (
    <button className="sm:p-2 bg-white-100 hover:bg-white-300 rounded-lg text-sm flex w-24 h-10 flex-row items-center">
      <ArrowPathIcon className="size-6 text-pink-500" />{' '}
    </button>
  );
};

export default ButtonReload;
