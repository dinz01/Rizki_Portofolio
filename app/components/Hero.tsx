import Section from "@/app/components/Section";

export default function Hero() {
  return (
    <Section>
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

        <h2 className="text-3xl md:text-4xl text-zinc-500 mt-0 leading-snug">
          <p>5th-Semester Undergraduate Student</p>
          <p>in Information Systems.</p>
        </h2>

        <p className="mt-6 max-w-xl text-xl text-zinc-400 leading-relaxed">
          Currently exploring Frontend Development with Next.js, while pursuing my interest in UI/UX design.
        </p>
      </section>
    </Section>
  );
}
