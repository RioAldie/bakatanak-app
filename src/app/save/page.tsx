import React from 'react';

const SavePage = () => {
  return (
    <div className="w-full min-h-screen flex items-center flex-col mt-28">
      <div className="w-96 h-96 ">
        <form className="flex flex-col gap-3 justify-center items-center">
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
          />
          <label htmlFor="age" className="text-slate-500 w-full">
            Umur
          </label>
          <input
            type="number"
            className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Masukan Umur"
            autoFocus
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
            name="city"
          />
          <button className="bg-pink-600 rounded mt-3 h-10 w-64 text-white">
            Simpan
          </button>
        </form>
      </div>
    </div>
  );
};

export default SavePage;
