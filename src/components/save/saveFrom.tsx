'use client';

import { postResultConsult } from '@/lib/result';
import { RootState } from '@/redux/store';
import { redirect, usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'sonner';
import ButtonLoading from './buttonLoading';
interface saveFromProps {
  userId?: string;
}
const SaveFrom = (props: saveFromProps) => {
  const [child, setSchild] = useState({
    name: '',
    age: 0,
    school: '',
    city: '',
    userId: props.userId,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const result = useSelector(
    (state: RootState) => state.result.value
  );
  const handleChangeValue = (e: any) => {
    const nameElement = e.target.name;
    const value = e.target.value;

    if (nameElement === 'name') {
      setSchild((prev) => ({ ...prev, name: value }));
    }
    if (nameElement === 'age') {
      setSchild((prev) => ({ ...prev, age: value }));
    }
    if (nameElement === 'school') {
      setSchild((prev) => ({ ...prev, school: value }));
    }
    if (nameElement === 'city') {
      setSchild((prev) => ({ ...prev, city: value }));
    }
  };

  const handleSave = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await postResultConsult({
      ...child,
      ...result,
    }).finally(() => {
      setIsLoading(false);
    });

    if (res === true) {
      toast.success('Konsultasi berhasil disimpan');
      router.push('/profile');
    }
    if (res === false) {
      toast.error('Konsultasi Gagal disimpan!');
    }
  };
  return (
    <form
      className="flex flex-col gap-3 justify-center items-center"
      onSubmit={(e) => handleSave(e)}>
      <Toaster />
      <p className="text-3xl text-center font-semibold">
        Simpan Hasil Konsultasi
      </p>
      <label htmlFor="name" className="text-slate-500 w-full">
        Nama Anak
      </label>
      <input
        type="text"
        className="block w-full border border-pink-600  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Nama"
        autoFocus
        name="name"
        onChange={(e) => handleChangeValue(e)}
        autoComplete="false"
      />
      <label htmlFor="age" className="text-slate-500 w-full">
        Umur
      </label>
      <input
        type="number"
        className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Umur"
        autoFocus
        onChange={(e) => handleChangeValue(e)}
        name="age"
      />
      <label htmlFor="school" className="text-slate-500 w-full">
        Asal Sekolah
      </label>
      <input
        type="text"
        className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Nama Asal Sekolah"
        autoFocus
        onChange={(e) => handleChangeValue(e)}
        name="school"
      />
      <label htmlFor="city" className="text-slate-500 w-full">
        Kota
      </label>
      <input
        type="text"
        className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
        placeholder="Masukan Kota"
        autoFocus
        onChange={(e) => handleChangeValue(e)}
        name="city"
      />
      {!isLoading ? (
        <button className="text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
          Simpan
        </button>
      ) : (
        <ButtonLoading />
      )}
    </form>
  );
};

export default SaveFrom;
