'use client';

import { RootState } from '@/redux/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const SavePage = () => {
  const [child, setSchild] = useState({
    name: '',
    age: 0,
    school: '',
    city: '',
  });

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

  const handleSave = (e: any) => {
    e.preventDefault();

    const newRes = { ...child, ...result };
    console.log('Recent child: ', child);
    console.log('Result: ', result);
    console.log('New Result: ', newRes);
  };
  return (
    <div className="w-full min-h-screen flex items-center flex-col mt-28">
      <div className="w-96 h-96 ">
        <form
          className="flex flex-col gap-3 justify-center items-center"
          onSubmit={(e) => handleSave(e)}>
          <p className="text-3xl font-semibold">
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
          <button className="text-white mt-3  w-56 h-11 flex items-center justify-center bg-pink-600 transition-all duration-300 hover:text-white hover:bg-pink-800 border border-solid border-pink-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default SavePage;
