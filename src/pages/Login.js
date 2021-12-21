import GoToRegister from "../components/GoToRegister";
import LoginInputs from "../components/LoginInputs";
import RememberMe from "../components/RememberMe";

export default function Login() {
  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-[400px]">
        <h4 className="text-center font-bold text-2xl text-gray-700">
          Silahkan masuk ke akun anda
        </h4>
        <form onSubmit={(e) => e.preventDefault()} className="mt-10">
          <LoginInputs />
          <div className="flex justify-end mt-2">
            <button className="text-pink-500 font-semibold">
              Lupa password?
            </button>
          </div>
          <RememberMe />
          <button
            type="submit"
            className="w-full py-2 bg-emerald-400 hover:bg-emerald-500 my-4 text-white rounded"
          >
            Masuk
          </button>
          <GoToRegister />
        </form>
      </div>
    </main>
  );
}
