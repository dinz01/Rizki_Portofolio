"use client";

import Aurora from "@/components/Aurora";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      
      {/* DESKTOP */}
      <div className="hidden md:block w-full h-full">
        <Aurora
          colorStops={["#0891b2", "#5b21b6", "#020617"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full h-full">
        <Aurora
          colorStops={["#0891b2", "#5b21b6"]}
          blend={0.35}
          amplitude={0.6}
          speed={0.25}
        />
      </div>

    </div>
  );
}