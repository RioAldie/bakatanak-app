import SignupForm from '@/components/register/signupForm';
import Link from 'next/link';

const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[600px] h-96 ">
        <p className="text-3xl font-semibold w-full text-center">
          Daftar Akun <span className="text-pink-600">Baru</span>
        </p>
        <SignupForm />
        <p className="w-full text-center text-base text-gray-500 mt-5">
          Sudah punya akun?{' '}
          <Link href={'/login'} className="text-pink-600">
            Masuk
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
