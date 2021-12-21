export default function LoginInputs() {
  return (
    <>
      <div className="space-y-1">
        <label className="text-gray-500 text-sm font-semibold">Email</label>
        <input
          placeholder="Masukkan Email Anda"
          className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none shadow-sm"
        />
      </div>
      <div className="space-y-1 mt-4">
        <label className="text-gray-500 text-sm font-semibold">Password</label>
        <input
          placeholder="Masukkan Password Anda"
          className="w-full px-3 py-2 rounded border-2 border-gray-300 focus:outline-none shadow-sm"
        />
      </div>
    </>
  );
}
