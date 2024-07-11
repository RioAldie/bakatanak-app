import Loading from '@/components/loading';
import LoginForm from '@/components/login/loginForm';
import Link from 'next/link';
import { Suspense } from 'react';

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-96 h-96 md:p-0 p-10">
        <Suspense fallback={<Loading />}>
          <LoginForm />
        </Suspense>

        <p className="w-full text-center text-base text-gray-500 mt-5">
          Belum punya akun?{' '}
          <Link href={'/register'} className="text-pink-600">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
