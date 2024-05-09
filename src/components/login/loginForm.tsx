'use client';
import { login } from '@/lib/action';
import { error } from 'console';
import React from 'react';
import { useFormState } from 'react-dom';
import { Toaster, toast } from 'sonner';

const LoginForm = () => {
  const [state, formAction] = useFormState<any, FormData>(
    login,
    undefined
  );
  return (
    <form
      className="flex flex-col gap-3 justify-center items-center"
      action={formAction}>
      <p className="text-3xl font-semibold">Login</p>
      <label htmlFor="email" className="text-slate-500 w-full">
        Email
      </label>
      <input
        type="email"
        className="block w-full border border-pink-600  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Email"
        autoFocus
        required
        name="email"
      />
      <label htmlFor="password" className="text-slate-500 w-full">
        Password
      </label>
      <input
        type="password"
        className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Password"
        autoFocus
        required
        name="password"
      />
      <button
        type="submit"
        className="text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
        Login
      </button>
      <Toaster richColors />
      <span className="hidden">
        {state?.error && toast.error(state?.error)}
      </span>
    </form>
  );
};

export default LoginForm;
