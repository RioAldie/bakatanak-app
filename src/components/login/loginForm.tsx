'use client';
import { login } from '@/lib/action';
import { error } from 'console';
import React from 'react';
import { useFormState } from 'react-dom';

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
        className="bg-pink-600 rounded mt-3 h-10 w-48 text-white">
        Login
      </button>
      {state?.error && <p>{state.error}</p>}
    </form>
  );
};

export default LoginForm;
