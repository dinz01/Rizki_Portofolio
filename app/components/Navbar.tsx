export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur bg-background/70 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Brand */}
        <span className="font-semibold text-foreground">
          R
        </span>

        {/* Navigation */}
        <ul className="flex gap-6 text-sm font-mono">
          <li>
            <a
              href="#about"
              className="text-zinc-400 hover:text-foreground transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-zinc-400 hover:text-foreground transition"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-zinc-400 hover:text-foreground transition"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
