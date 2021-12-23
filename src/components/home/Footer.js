import { MailIcon, PhoneIcon } from "@heroicons/react/outline";
import Facebook from "../icons/Facebook";
import Instagram from "../icons/Instagram";
import Twitter from "../icons/Twitter";
import Youtube from "../icons/Youtube";

export default function Footer() {
  return (
    <footer className="text-white bg-black p-10 mt-20">
      <div className="flex items-center space-x-3">
        <img
          alt="logo"
          className="h-14 w-16 rounded-full"
          src="https://skills.id/source/edumy/images/icon_new.png"
        ></img>
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
      <div className="mt-10 flex space-x-20">
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">Contact</h3>
          <p className="mt-5">PT. Global Retail Bersama</p>
          <p className="mt-3">
            Jl. Cidodol Raya No 40 Kebayoran Lama, Jakarta Selatan 12220
          </p>
          <p className="mt-3 flex items-center space-x-1">
            <PhoneIcon className="h-5 w-5" />
            <span>+62 811-828-6996</span>
          </p>
          <p className="mt-3 flex items-center space-x-2">
            <MailIcon className="h-5 w-5" />
            <span>info@skills.id</span>
          </p>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">Category</h3>
          <ul className="grid grid-cols-2 gap-3 mt-5">
            <li>Music</li>
            <li>Music</li>
            <li>Art and Craft</li>
            <li>Art and Craft</li>
            <li>Food and Beverages</li>
            <li>Food and Beverages</li>
            <li>Design</li>
            <li>Design</li>
            <li>Photography</li>
            <li>Photography</li>
            <li>Sport</li>
            <li>Sport</li>
          </ul>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-3xl">Branch</h3>
          <ul className="grid grid-cols-2 gap-3 mt-5">
            <li>Jakarta</li>
            <li>Bali</li>
            <li>Tangerang</li>
            <li>Surabaya</li>
            <li>Bekasi</li>
            <li>Bandung</li>
            <li>Medan</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
