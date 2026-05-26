"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Platform", href: "/platform" },
  { label: "Vision", href: "/vision" },
  { label: "Pricing", href: "/pricing" },
  { label: "Clients", href: "/clients" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 h-16 flex items-center transition-all duration-300 ${
          scrolled ? "bg-bg/95 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto w-full px-5 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-[17px] font-bold text-ink tracking-tight">
            Payxara
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`px-4 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  pathname === l.href
                    ? "text-ink bg-bg-alt"
                    : "text-muted hover:text-ink hover:bg-bg-alt"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="#" className="text-[14px] font-medium text-muted hover:text-ink transition-colors">
              Log in
            </Link>
            <Link
              href="#"
              className="bg-ink text-bg text-[13px] font-semibold px-4 py-2 rounded-full hover:bg-ink/80 transition-colors"
            >
              Get started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 flex flex-col gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 bg-ink transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg pt-16 flex flex-col px-5 py-8"
          >
            <nav className="flex flex-col gap-1">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[24px] font-semibold text-ink py-3 border-b border-border"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-8 flex flex-col gap-3">
              <Link href="#" className="text-center py-3 border border-border rounded-full text-[15px] font-medium text-ink">
                Log in
              </Link>
              <Link href="#" className="text-center py-3 bg-ink text-bg rounded-full text-[15px] font-semibold">
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
