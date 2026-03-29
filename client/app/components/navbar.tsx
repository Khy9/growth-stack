"use client";

export default function Navbar() {
  return (
    <div className="w-full px-8 py-4 flex items-center justify-between border-b border-white/10 bg-black/60 backdrop-blur-md">
      
      <h1 className="text-lg font-semibold tracking-wide text-white">
        GrowthStack
      </h1>

      <div className="flex items-center gap-6 text-sm text-gray-400">
        <button className="hover:text-white transition">Home</button>
        <button className="hover:text-white transition">Dashboard</button>
        <button className="hover:text-white transition">Logout</button>
      </div>

    </div>
  );
}