import { getSession } from '@/lib/action';
import Image from 'next/image';
import Link from 'next/link';
import Menu from './menu';
import Logout from './logout';
import AuthBox from './AuthBox';
import Navlink from './navlink';
import { Bars3Icon } from '@heroicons/react/24/solid';
import BoxNavlink from './boxNavlink';

const Navbar = async () => {
  const session = await getSession();

  return (
    <nav className=" top-0 w-full fixed z-30 bg-white border-b-2 border-gray-300">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={'/images/logo-bakatanak.png'}
            width={140}
            height={40}
            alt="logo-bakatanak"
          />
        </Link>

        <BoxNavlink isLoggedin={session.isLoggedin} />
      </div>
    </nav>
  );
};

export default Navbar;
