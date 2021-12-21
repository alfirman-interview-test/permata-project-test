export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-[400px]">
        <h4 className="text-center font-bold text-2xl text-gray-700">
          Silahkan masuk ke akun anda
        </h4>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10">
          <div className="space-y-1">
            <label className="text-gray-500 text-sm font-semibold">Email</label>
            <input
              placeholder="Masukkan Email Anda"
              className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none shadow-sm"
            />
          </div>
          <div className="space-y-1 mt-4">
            <label className="text-gray-500 text-sm font-semibold">
              Password
            </label>
            <input
              placeholder="Masukkan Password Anda"
              className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none shadow-sm"
            />
          </div>
          <div className="flex justify-end mt-2">
            <button className="text-pink-500 font-semibold">
              Lupa password?
            </button>
          </div>
          <div className="space-x-1 flex items-center">
            <input type="checkbox" className="h-5 w-5" />
            <label className="text-sm font-semibold text-gray-500">
              Remember me
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-emerald-400 hover:bg-emerald-500 my-4 text-white rounded"
          >
            Masuk
          </button>
          <div className="flex items-center space-x-5">
            <span className="font-semibold text-gray-700">
              Belum punya akun?
            </span>
            <button className="text-pink-500 font-semibold">
              Daftar sekarang {"->"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
