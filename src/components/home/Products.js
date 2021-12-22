export default function Products() {
  return (
    <div className="w-11/12 mx-auto grid grid-cols-4 gap-6 mt-20">
      {[1, 2, 3, 4].map((el) => (
        <div key={el} className="h-[480px] flex flex-col space-y-4">
          <img
            src="https://placeimg.com/640/480/any"
            alt="dummy"
            className="h-[60%] w-full object-cover rounded-lg"
          />
          <div className="flex-grow flex flex-col justify-between">
            <h4 className="font-semibold text-2xl text-gray-800">
              Fundamental web programming
            </h4>
            <h4 className="text-2xl text-pink-600">Rp 500k</h4>
            <button className="w-full py-2 border border-pink-400 text-pink-600 rounded-md">
              Beli
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
