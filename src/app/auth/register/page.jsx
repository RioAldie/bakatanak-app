const RegisterPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-96 h-96 ">
        <form className="flex flex-col gap-3 justify-center items-center">
          <p className="text-3xl font-semibold">Login</p>
          <label htmlFor="email" className="text-slate-500 w-full">
            Email
          </label>
          <input
            type="email"
            className="block w-full border border-pink-600  text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Masukan Email"
            autoFocus
            name="email"
          />
          <label htmlFor="password" className="text-slate-500 w-full">
            Password
          </label>
          <input
            type="password"
            className="block w-full border border-pink-600 text-slate-500 rounded-md h-11 p-4 placeholder-slate-500"
            placeholder="Masukan Password"
            autoFocus
            name="password"
          />
          <button className="bg-pink-600 rounded mt-3 h-10 w-48 text-white">
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
