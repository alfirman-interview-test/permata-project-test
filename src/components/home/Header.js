import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const token = localStorage.getItem("token");
  const [isAuth, setAuth] = useState(!!token);

  return (
    <header className="py-4">
      <div className="w-11/12 mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 bg-indigo-900 rounded-full"></div>
          <h1 className="text-2xl font-bold text-indigo-900">logoipsum</h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-8 text-indigo-900 font-semibold">
            <li>Course</li>
            <li>Category</li>
            <li>Become Instructor</li>
            <li>
              {isAuth ? (
                <button
                  onClick={() => {
                    localStorage.removeItem("token");
                    setAuth(false);
                  }}
                  className="border-2 border-yellow-500 text-yellow-500 rounded py-2 px-4"
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/login"
                  className="border-2 border-yellow-500 text-yellow-500 rounded py-2 px-4"
                >
                  Register/Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
