"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { label: "Platform", href: "/platform" },
  { label: "Clients", href: "/clients" },
  { label: "Vision", href: "/vision" },
  { label: "Acquire", href: "/acquire" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-green py-2.5 px-4 text-center">
        <p className="text-[13px] font-semibold text-ink">
          Payxara domain now available for acquisition —{" "}
          <a
            href="mailto:hello@madebyevoke.com"
            className="font-bold text-ink underline underline-offset-2 hover:opacity-70 transition-opacity"
          >
            Inquire now →
          </a>
        </p>
      </div>

      <header
        className={`sticky top-0 inset-x-0 z-50 h-[68px] flex items-center bg-white/96 backdrop-blur-xl border-b border-line transition-shadow duration-300 ${
          scrolled ? "shadow-[0_1px_0_rgba(0,0,0,0.08)]" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/payxara%20logo.png"
              alt="Payxara"
              width={100}
              height={26}
              className="object-contain h-6 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`text-[14px] transition-colors ${
                  pathname === l.href
                    ? "text-ink font-semibold"
                    : "text-ink-muted font-medium hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <Link
              href="#"
              className="text-[14px] font-medium text-ink-muted hover:text-ink transition-colors mr-2"
            >
              Log in
            </Link>
            <Link
              href="#"
              className="green-btn px-5 py-2.5 rounded-lg text-[14px]"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 flex flex-col gap-[5px]"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[1.5px] w-6 bg-ink transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-[calc(40px+68px)] flex flex-col px-6 py-8"
          >
            <nav className="flex flex-col">
              {links.map((l, i) => (
                <motion.div
                  key={l.label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block text-[32px] font-bold text-ink py-4 border-b border-line"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-10 flex flex-col gap-3">
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="text-center py-4 border border-line rounded-xl text-[15px] font-semibold text-ink hover:bg-canvas transition-colors"
              >
                Log in
              </Link>
              <Link
                href="#"
                onClick={() => setOpen(false)}
                className="green-btn text-center py-4 rounded-xl text-[15px]"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
