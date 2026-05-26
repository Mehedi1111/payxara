"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const panels = [
  {
    num: "01",
    word: "Intelligence",
    body: "Private wealth platforms deserve better data architecture.",
    bg: "bg-ivory",
    numColor: "text-ink-faint",
    wordColor: "text-ink",
    bodyColor: "text-ink-muted",
  },
  {
    num: "02",
    word: "Precision",
    body: "Every client touchpoint engineered to the millimeter.",
    bg: "bg-ivory-dark",
    numColor: "text-ink-faint",
    wordColor: "text-ink",
    bodyColor: "text-ink-muted",
  },
  {
    num: "03",
    word: "Elevation",
    body: "The gap between good and exceptional is a brand decision.",
    bg: "bg-obsidian",
    numColor: "text-ivory/40",
    wordColor: "text-ivory",
    bodyColor: "text-ivory/60",
  },
  {
    num: "04",
    word: "PAYXARA",
    body: "Acquire the brand. Own the category.",
    bg: "bg-lime",
    numColor: "text-ink/40",
    wordColor: "text-ink",
    bodyColor: "text-ink",
    showCta: true,
  },
];

export default function HorizontalScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-300vw"]);

  return (
    <>
      {/* Desktop: pinned horizontal scroll */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: "400vh" }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            style={{ x }}
            className="flex will-change-transform"
            aria-label="Horizontal scroll panels"
          >
            {panels.map((p) => (
              <div
                key={p.num}
                className={`${p.bg} w-screen h-screen shrink-0 flex flex-col items-center justify-center px-12 border-r border-line`}
              >
                <p className={`font-sans font-light text-[11px] tracking-[0.2em] uppercase ${p.numColor} mb-6`}>
                  {p.num}
                </p>
                <p
                  className={`font-serif font-light italic ${
                    p.num === "04" ? "not-italic font-black tracking-[0.05em] font-sans text-[clamp(48px,6vw,72px)]" : "text-[clamp(56px,7vw,88px)]"
                  } ${p.wordColor} leading-none`}
                >
                  {p.word}
                </p>
                <p className={`font-sans font-light text-[16px] ${p.bodyColor} max-w-xs text-center mt-8 leading-relaxed`}>
                  {p.body}
                </p>
                {p.showCta && (
                  <a
                    href="mailto:hello@madebyevoke.com"
                    className="font-sans font-semibold text-[13px] text-ink underline underline-offset-4 mt-8 hover:text-obsidian transition-colors"
                  >
                    hello@madebyevoke.com →
                  </a>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile: vertical stack fallback */}
      <div className="lg:hidden border-t border-line">
        {panels.map((p) => (
          <div
            key={p.num}
            className={`${p.bg} px-8 py-24 flex flex-col items-center text-center border-b border-line`}
          >
            <p className={`font-sans font-light text-[10px] tracking-[0.2em] uppercase ${p.numColor} mb-4`}>
              {p.num}
            </p>
            <p
              className={`font-serif font-light italic ${
                p.num === "04" ? "not-italic font-black tracking-[0.05em] font-sans text-[48px]" : "text-[clamp(44px,12vw,64px)]"
              } ${p.wordColor} leading-none`}
            >
              {p.word}
            </p>
            <p className={`font-sans font-light text-[15px] ${p.bodyColor} max-w-xs mt-6 leading-relaxed`}>
              {p.body}
            </p>
            {p.showCta && (
              <a
                href="mailto:hello@madebyevoke.com"
                className="font-sans font-semibold text-[13px] text-ink underline underline-offset-4 mt-6 hover:text-obsidian transition-colors"
              >
                hello@madebyevoke.com →
              </a>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
