import Section from "@/app/components/Section";

export default function Hero() {
  return (
    <Section>
      <section
        id="hero"
        className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto"
      >
        <p className="text-green-500 mb-3">
          Hi, my name is
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Rizki Syawaludin
        </h1>

        <h2 className="text-3xl md:text-4xl text-zinc-500 mt-2">
          <p>5th-Semester Undergraduate Student</p>
          <p>in Information Systems</p>
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400 leading-relaxed">
          Saya sedang belajar Frontend Development menggunakan Next.js
          dan tertarik pada UI/UX Design.
        </p>
      </section>
    </Section>
  );
}
