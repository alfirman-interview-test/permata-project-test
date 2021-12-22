import { SearchIcon } from "@heroicons/react/outline";

export default function Intro() {
  return (
    <div className="mt-16">
      <h3 className="font-semibold text-3xl text-gray-700 text-center">
        Selamat datang di Skills.id
      </h3>
      <p className="text-center text-gray-500 mt-5">
        Silahkan cari dan pilih kursus yang menarik bagi Anda di Skills.id
      </p>
      <div className="flex items-center justify-center space-x-5 mt-8">
        <div className="w-1/2 relative">
          <span className="absolute left-4 top-0 h-full flex items-center">
            <SearchIcon className="h-6 w-6 text-gray-300" />
          </span>
          <input
            placeholder="Find Course"
            className="border rounded-lg shadow py-4 pl-12 pr-4 w-full"
          />
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 rounded-md font-semibold text-white py-2 px-4">
          Find Course
        </button>
      </div>
    </div>
  );
}
