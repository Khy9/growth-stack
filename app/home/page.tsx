"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [inputs, setInputs] = useState(["", "", "", ""]);

  const handleChange = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleSubmit = () => {
  const selected = inputs
    .map((s) => s.trim())
    .filter((s) => s !== "");

  console.log("FINAL SELECTED:", selected);

  if (selected.length === 0) {
    alert("Enter at least one skill");
    return;
  }

  const query = encodeURIComponent(selected.join(","));

  //FORCE navigation
  window.location.href = `/analysis?skills=${query}`;
};

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-8 py-12">
      <div className="max-w-xl mx-auto">

        <h1 className="text-2xl font-semibold mb-2">
          Add Your Skills
        </h1>

        <p className="text-gray-400 text-sm mb-8">
          Enter up to 4 skills.
        </p>

        <div className="space-y-6">
          {inputs.map((input, index) => (
            <input
              key={index}
              type="text"
              value={input}
              placeholder={`Skill ${index + 1}`}
              onChange={(e) => handleChange(e.target.value, index)}
              className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={handleSubmit}
            className="px-8 py-3 rounded-lg bg-white text-black font-medium"
          >
            Analyze My Skills
          </button>
        </div>

      </div>
    </div>
  );
}