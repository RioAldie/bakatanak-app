const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="w-96 h-96 border border-slate-400">
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="block w-full mt-3 border border-slate-400 rounded-md h-11 p-4 placeholder-[#002140]"
            placeholder="Email"
            autoFocus
            name="email"
          />
          <label htmlFor="password">Password</label>
          <input type="text" placeholder="masukan password" />
          <button>Masuk</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
