"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isHidden, setIsHidden] = useState(false);

  // ===============================
  // ACTIVE SECTION
  // ===============================
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // ===============================
  // HIDE NAVBAR ON SCROLL
  // ===============================
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsHidden(currentScrollY > lastScrollY && currentScrollY > 80);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{
        y: isHidden ? -80 : 0,
        opacity: isHidden ? 0 : 1,
      }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
    >
      <ul className="flex items-center gap-6 md:gap-8 px-6 py-4 md:px-10 rounded-lg border border-zinc-700 bg-background/80 backdrop-blur">
        {/* NAV MENU */}
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <li key={item.href} className="relative">
              <motion.a
                href={item.href}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`relative text-sm md:text-base ${
                  isActive
                    ? "text-foreground"
                    : "text-zinc-400 hover:text-foreground"
                }`}
              >
                {item.label}

                {/* underline */}
                <motion.span
                  layout
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-foreground"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />
              </motion.a>
            </li>
          );
        })}

        {/* RESUME BUTTON */}
        <li>
          <motion.a
            href="/CV_Rizki_Syawaludin.pdf"
            download
            whileHover={{ scale: 1.05 }}
            className="text-sm md:text-base text-primary border border-primary px-5 py-2 md:px-7 md:py-2.5 rounded-lg hover:bg-primary hover:text-background transition"
          >
            Resume
          </motion.a>
        </li>
      </ul>
    </motion.nav>
  );
}
