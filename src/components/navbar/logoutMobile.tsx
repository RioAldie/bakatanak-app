import { logout } from '@/lib/action';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const LogoutMobile = () => {
  return (
    <div
      onClick={() => logout()}
      className=" w-full flex items-center">
      <ArrowLeftEndOnRectangleIcon className="size-4 me-3 text-white" />
      Logout
    </div>
  );
};

export default LogoutMobile;
