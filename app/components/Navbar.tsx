export default function Navbar() {
  return (
    <nav className="fixed top-6 md:top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-6 md:gap-8 px-6 py-4 md:px-10 py-4 rounded-lg border border-zinc-700 bg-background/80 backdrop-blur">
        <li>
          <a
            href="#about"
            className="text-sm md:text-base text-zinc-400 hover:text-foreground transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm md:text-base text-zinc-400 hover:text-foreground transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact" 
            className="text-sm md:text-base text-zinc-400 hover:text-foreground transition"
          >
            Contact
          </a>
        </li>

        {/* Resume Download */}
        <li>
          <a
            href="/CV_Rizki_Syawaludin.pdf"
            download
            className="text-sm md:text-base text-primary border border-primary px-5 py-2 md:px-7 py-2.5 rounded-lg hover:bg-primary hover:text-background transition"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
