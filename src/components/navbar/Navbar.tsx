import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="w-full px-10 items-center flex justify-between flex-row bg-white top-0 sticky h-14 border-b-2 border-l-slate-400">
      <Link href={'/'}>
        <div>
          <Image
            src={'/images/logo-bakatanak.png'}
            width={140}
            height={40}
            alt="logo-bakatanak"
          />
        </div>
      </Link>
      <div>
        <ul className="flex flex-row justify-center gap-10 font-medium">
          <li className="text-slate-700 hover:text-pink-600 ">
            {' '}
            <Link href="/"> About</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/consult">Konsultasi</Link>
          </li>
          <li className="text-slate-700 hover:text-pink-600">
            {' '}
            <Link href="/">Kursus</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Link href={'/auth/login'}>
          <button className="text-pink-600 h-11 bg-white transition-all duration-300 hover:text-white hover:bg-pink-700 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
            Login
          </button>
        </Link>
        <Link href={'/auth/register'}>
          <button className="text-white h-11 bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center ">
            Daftar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
