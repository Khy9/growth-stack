"use client";

import { useState } from "react";

const skillOptions = [
  "Python",
  "Java",
  "C++",
  "JavaScript",
  "SQL",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Data Science",
  "Data Analysis",
  "Frontend Development",
  "Backend Development",
  "Full Stack Development",
  "Cloud Computing",
  "DevOps",
  "Docker",
  "Kubernetes",
  "Cybersecurity",
  "IoT",
  "Blockchain",
];

export default function Home() {
  const [inputs, setInputs] = useState(["", "", "", ""]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleChange = (value: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
    setActiveIndex(index);
  };

  const handleSelect = (skill: string, index: number) => {
    const newInputs = [...inputs];
    newInputs[index] = skill;
    setInputs(newInputs);
    setActiveIndex(null);
  };

  const getFilteredSkills = (input: string) => {
    return skillOptions.filter(
      (skill) =>
        skill.toLowerCase().includes(input.toLowerCase()) &&
        !inputs.includes(skill)
    );
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

        {/* Input Fields */}
        <div className="space-y-6">

          {inputs.map((input, index) => {
            const suggestions = getFilteredSkills(input);

            return (
              <div key={index} className="relative">

                <input
                  type="text"
                  value={input}
                  placeholder={`Skill ${index + 1}`}
                  onChange={(e) => handleChange(e.target.value, index)}
                  onFocus={() => setActiveIndex(index)}
                  className="w-full p-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-white/20"
                />

                {/* Dropdown */}
                {activeIndex === index && input.length >= 2 && suggestions.length > 0 && (
                  <div className="absolute w-full mt-2 bg-black border border-white/10 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">

                    {suggestions.map((skill) => (
                      <div
                        key={skill}
                        onClick={() => handleSelect(skill, index)}
                        className="px-4 py-2 hover:bg-white/10 cursor-pointer text-sm"
                      >
                        {skill}
                      </div>
                    ))}

                  </div>
                )}

              </div>
            );
          })}

        </div>

        {/* Button */}
        <div className="mt-10 text-center">
          <button
            onClick={() => (window.location.href = "/analysis")}
            className="px-8 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
          >
            Analyze My Skills
          </button>
        </div>

      </div>
    </div>
  );
}