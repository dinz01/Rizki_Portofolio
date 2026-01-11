"use client";

import Aurora from "@/components/Aurora";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      
      {/* DESKTOP */}
      <div className="hidden md:block w-full h-full">
        <Aurora
          colorStops={["#22c55e", "#fde68a", "#7c3aed"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full h-full translate-y-[-15%]">
        <Aurora 
          colorStops={["#22c55e", "#fde68a", "#7c3aed"]}
          blend={0.5}
          amplitude={0.5}
          speed={0.25}
        />
      </div>

    </div>
  );
}