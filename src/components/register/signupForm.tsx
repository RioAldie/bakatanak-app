'use client';
import { register } from '@/lib/action';
import React, { useEffect, useState } from 'react';
import { useFormState } from 'react-dom';
import { Toaster, toast } from 'sonner';

const SignupForm = () => {
  const [state, formAction] = useFormState<any, FormData>(
    register,
    undefined
  );
  const [isLoad, setIsLoad] = useState<boolean>(false);

  useEffect(() => {
    if (state !== undefined) {
      setIsLoad(false);
    }
  }, [state]);

  return (
    <form
      action={formAction}
      onSubmit={() => setIsLoad(true)}
      className="flex w-full mt-5 justify-center flex-wrap flex-row gap-3 flex-grow">
      <Toaster richColors />
      <input
        type="email"
        className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Email"
        autoFocus
        name="email"
        required
      />
      <input
        type="text"
        className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Nama"
        autoFocus
        name="username"
        required
      />
      <input
        type="password"
        className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Password"
        autoFocus
        name="password"
        required
      />
      <input
        type="password"
        className="block w-2/5 border border-gray-300 text-slate-500 rounded-md h-11 focus:ring-pink-500 focus:border-pink-500 p-4 placeholder-slate-500"
        placeholder="Konfirmasi Password"
        autoFocus
        name="confirm password"
        required
      />
      <div className="w-2/5 h-11">
        <select
          id="countries"
          name="gender"
          defaultValue={'wanita'}
          className="bg-gray-50 border h-11 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500  w-full p-2.5 ">
          <option value="wanita">Wanita</option>
          <option value="pria">Pria</option>
        </select>
      </div>

      <input
        type="number"
        className="block w-2/5 border border-gray-300 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Umur"
        autoFocus
        name="age"
      />

      {!isLoad ? (
        <button className="text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Daftar
        </button>
      ) : (
        <button
          disabled
          type="button"
          className="text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      )}
      {state && toast.error(state?.error)}
    </form>
  );
};

export default SignupForm;
