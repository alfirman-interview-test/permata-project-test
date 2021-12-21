import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GoToRegister from "../components/GoToRegister";
import LoginInputs from "../components/LoginInputs";
import RememberMe from "../components/RememberMe";

export default function Login() {
  const { push } = useHistory();
  const [isLoading, setLoading] = useState(false);
  const [input, setInput] = useState({
    username: "johndoe",
    password: "password",
  });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://tasklogin.herokuapp.com/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        if (data.code === 200) {
          localStorage.setItem("token", data.access_token);
          push("/");
        }
      })
      .catch((e) => console.log("error", e))
      .finally(() => setLoading(false));
  };

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    return () =>
      setInput({
        username: "johndoe",
        password: "password",
      });
  }, []);

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="w-[400px]">
        <h4 className="text-center font-bold text-2xl text-gray-700">
          Silahkan masuk ke akun anda
        </h4>
        <form onSubmit={(e) => submit(e)} className="mt-10">
          <LoginInputs handleChange={handleChange} input={input} />
          <div className="flex justify-end mt-2">
            <button className="text-pink-500 font-semibold">
              Lupa password?
            </button>
          </div>
          <RememberMe />
          <button
            type="submit"
            disabled={isLoading}
            className={`${
              isLoading
                ? "cursor-not-allowed bg-gray-300 text-gray-500"
                : "bg-emerald-400 hover:bg-emerald-500 text-white"
            } w-full my-4 py-2 rounded`}
          >
            {isLoading ? "Loading..." : "Masuk"}
          </button>
          <GoToRegister />
        </form>
      </div>
    </main>
  );
}
