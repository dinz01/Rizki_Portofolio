export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <ul className="flex items-center gap-8 px-8 py-3 rounded-full border border-zinc-700 bg-background/80 backdrop-blur">
        <li>
          <a
            href="#about"
            className="text-sm text-zinc-400 hover:text-foreground transition"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm text-zinc-400 hover:text-foreground transition"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-sm text-zinc-400 hover:text-foreground transition"
          >
            Contact
          </a>
        </li>

        {/* Resume Download */}
        <li>
          <a
            href="/CV_Rizki_Syawaludin.pdf"
            download
            className="text-sm text-primary border border-primary px-4 py-1.5 rounded-full hover:bg-primary hover:text-background transition"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
