"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Platform", href: "/platform" },
  { label: "Brand", href: "/" },
  { label: "Clients", href: "/clients" },
  { label: "Acquire", href: "/acquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
          scrolled
            ? "bg-ivory/95 backdrop-blur-xl border-b border-line"
            : "bg-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="font-sans font-semibold text-[13px] tracking-[0.2em] uppercase text-ink"
          >
            PAYXARA
          </Link>

          {/* Center nav — desktop */}
          <div className="hidden lg:flex items-center gap-8">
            <div className="h-px w-14 bg-line" />
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-sans text-[13px] text-ink-muted lime-hover hover:text-ink transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px w-14 bg-line" />
          </div>

          {/* Right — desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/acquire"
              className="hidden lg:inline-flex items-center bg-ink text-ivory font-sans font-semibold text-[12px] tracking-[0.05em] uppercase px-5 py-2.5 rounded-[4px] hover:bg-lime hover:text-ink transition-all duration-250"
            >
              Acquire Domain
            </Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-2 flex flex-col gap-[5px] group"
              aria-label="Toggle menu"
            >
              <span
                className={`block h-px w-6 bg-ink transition-all duration-300 origin-center ${
                  menuOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-all duration-300 ${
                  menuOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-all duration-300 origin-center ${
                  menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ivory grain flex flex-col items-center justify-center gap-2"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.07,
                }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif italic text-[clamp(36px,10vw,56px)] text-ink leading-tight block text-center hover:text-ink-muted transition-colors"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/acquire"
                onClick={() => setMenuOpen(false)}
                className="bg-ink text-ivory font-sans font-semibold text-[12px] tracking-[0.08em] uppercase px-6 py-3 rounded-[4px]"
              >
                Acquire Domain
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
