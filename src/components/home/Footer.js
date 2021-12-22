import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

export default function Footer() {
  return (
    <footer className="text-white bg-black p-10 mt-20">
      <div className="flex items-center space-x-3">
        <div className="h-16 w-16 bg-pink-700 rounded-full"></div>
        <h1 className="text-4xl font-semibold text-emerald-600">
          Skills.<span className="text-pink-600">id</span>
        </h1>
      </div>
      <nav className="mt-8 flex justify-between items-center">
        <ul className="flex space-x-10 font-semibold">
          <li>Home</li>
          <li>Privacy</li>
          <li>Term</li>
          <li>FAQ</li>
        </ul>
        <ul className="flex items-center space-x-8">
          <li className="h-5 w-5">
            <Instagram />
          </li>
          <li className="h-5 w-5">
            <Facebook />
          </li>
          <li className="h-5 w-5">
            <Youtube />
          </li>
          <li className="h-5 w-5">
            <Twitter />
          </li>
        </ul>
      </nav>
    </footer>
  );
}
