"use client";

import { useSearchParams } from "next/navigation";

export default function Analysis() {
  const params = useSearchParams();
  const skillsParam = params.get("skills");

  const userSkills = skillsParam
    ? decodeURIComponent(skillsParam)
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s !== "")
    : [];

  const marketSkills = [
    "Artificial Intelligence",
    "Cloud Computing",
    "Cybersecurity",
    "Data Science",
    "Backend Development",
  ];

  const missingSkills = marketSkills.filter(
    (skill) => !userSkills.includes(skill)
  );

  const matchingSkills = userSkills.filter((skill) =>
    marketSkills.includes(skill)
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white px-8 py-10">

      <div className="max-w-6xl mx-auto mb-10">
        <h1 className="text-2xl font-semibold mb-2">
          Skill Analysis
        </h1>
        <p className="text-gray-400 text-sm">
          Comparing your skills with market demand
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Market */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="mb-4 font-medium">Market Demand</h2>
          {marketSkills.map((skill) => (
            <div key={skill} className="p-3 mb-2 bg-white/5 rounded">
              {skill}
            </div>
          ))}
        </div>

        {/* User */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="mb-4 font-medium">Your Skills</h2>

          {userSkills.length > 0 ? (
            userSkills.map((skill) => (
              <div
                key={skill}
                className={`p-3 mb-2 rounded ${
                  marketSkills.includes(skill)
                    ? "bg-green-500/20 border border-green-500/30"
                    : "bg-white/10"
                }`}
              >
                {skill}
              </div>
            ))
          ) : (
            <p className="text-gray-400 text-sm">No skills entered</p>
          )}
        </div>

        {/* Recommendations */}
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h2 className="mb-4 font-medium">Recommendations</h2>

          {missingSkills.length > 0 ? (
            missingSkills.map((skill) => (
              <div
                key={skill}
                className="p-3 mb-2 bg-red-500/10 border border-red-500/20 rounded text-sm"
              >
                Consider learning {skill}
              </div>
            ))
          ) : (
            <p className="text-green-400 text-sm">
              You are well aligned with market demand
            </p>
          )}
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-10 bg-white/5 border border-white/10 rounded-xl p-6">
        <h2 className="mb-3 font-medium">Summary</h2>

        <p className="text-sm text-gray-300">
          You match <span className="text-green-400">{matchingSkills.length}</span> out of{" "}
          <span className="text-white">{marketSkills.length}</span> key market skills.
        </p>
      </div>

    </div>
  );
}