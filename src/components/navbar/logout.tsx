import { logout } from '@/lib/action';
import React from 'react';

const Logout = () => {
  return (
    <form action={logout}>
      <button className="text-pink-600 h-11 bg-white transition-all duration-300 hover:text-white hover:bg-pink-700 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
        Logout
      </button>
    </form>
  );
};

export default Logout;
