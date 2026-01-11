"use client";

import Section from "@/app/components/Section";
import Prism from "@/components/Prism";

export default function Hero() {
  return (
    <Section>
      <div className="relative min-h-screen overflow-hidden">
        
        {/* Background Prism */}
        <div className="absolute inset-0 -z-10">
          <Prism
            animationType="rotate"
            timeScale={0.5}
            height={3.5}
            baseWidth={5.5}
            scale={3.6}
            hueShift={0}
            colorFrequency={1}
            noise={0}
            glow={1}
          />
        </div>

        {/* Content */}
        <section
          id="hero"
          className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto text-left gap-3"
        >
          <p className="text-green-500 text-xl mb-3 leading-snug">
            Hi, my name is
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-none">
            Rizki Syawaludin.
          </h1>

          <h2 className="text-3xl md:text-4xl text-zinc-500 leading-snug">
            <p>5th-Semester Undergraduate Student</p>
            <p>in Information Systems.</p>
          </h2>

          <p className="mt-6 max-w-xl text-xl text-zinc-400 leading-relaxed">
            Currently exploring Frontend Development with Next.js, while pursuing my interest in UI/UX design.
          </p>
        </section>

      </div>
    </Section>
  );
}
