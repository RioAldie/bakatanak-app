const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-[600px] h-96 ">
        <p className="text-3xl font-semibold w-full text-center">
          Daftar Akun <span className="text-pink-600">Baru</span>
        </p>
        <form className="flex w-full mt-5 justify-center flex-wrap flex-row gap-3 flex-grow">
          <input
            type="email"
            className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Email"
            autoFocus
            name="email"
          />
          <input
            type="text"
            className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Nama"
            autoFocus
            name="name"
          />
          <input
            type="password"
            className="block w-2/5 border border-gray-300 focus:ring-pink-500 focus:border-pink-500  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Password"
            autoFocus
            name="password"
          />
          <input
            type="password"
            className="block w-2/5 border border-gray-300 text-slate-500 rounded-md h-11 focus:ring-pink-500 focus:border-pink-500 p-4 placeholder-slate-500"
            placeholder="Konfirmasi Password"
            autoFocus
            name="confirm password"
          />
          <div className="w-2/5 h-11">
            <select
              id="countries"
              className="bg-gray-50 border h-11 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500  w-full p-2.5 ">
              <option value="female">Wanita</option>
              <option value="male">Pria</option>
            </select>
          </div>

          <input
            type="number"
            className="block w-2/5 border border-gray-300 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Umur"
            autoFocus
            name="age"
          />
          <button className="bg-pink-600 rounded mt-3 h-10 w-48 text-white">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
