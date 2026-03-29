export default function Home() {
  return (
    <main className="min-h-screen bg-gray-200 p-8">
      <h1 className="text-4xl font-bold mb-6 text-black">
        GrowthStack
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-black">
            User Profile
          </h2>
          <p className="text-gray-700">Form will go here</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-black">
            Dashboard
          </h2>
          <p className="text-gray-700">Charts will go here</p>
        </div>

      </div>
    </main>
  );
}