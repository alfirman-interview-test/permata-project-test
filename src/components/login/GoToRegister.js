import { ArrowNarrowRightIcon } from "@heroicons/react/outline";

export default function GoToRegister() {
  return (
    <div className="flex items-center space-x-5">
      <span className="font-semibold text-gray-700">Belum punya akun?</span>
      <button className="text-pink-500 font-semibold flex items-center space-x-2">
        <span>Daftar sekarang</span>
        <ArrowNarrowRightIcon className="w-4 h-4 mt-1" />
      </button>
    </div>
  );
}
