"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SplitText from "./SplitText";
import LimeAccent from "./LimeAccent";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const leftY = useTransform(scrollYProgress, [0, 0.5], [0, -60]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.5], [0, 6]);
  const rightScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <section
      ref={ref}
      className="grain relative min-h-screen bg-ivory overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 min-h-screen grid lg:grid-cols-[55%_45%]">
        {/* ── Left column ── */}
        <motion.div
          style={{ y: leftY }}
          className="flex flex-col justify-between py-36 lg:py-40 pr-0 lg:pr-16"
        >
          {/* Top: label + headline */}
          <div>
            <LimeAccent />
            <p className="font-sans font-medium text-[11px] text-ink-faint tracking-[0.15em] uppercase mt-3">
              Luxury Fintech — Brand &amp; Domain
            </p>

            <h1 className="mt-8 font-serif font-light text-display italic leading-none text-ink">
              <span className="block">
                <SplitText text="Finance," className="text-display" />
              </span>
              <span className="block not-italic font-semibold">
                <SplitText text="refined." className="text-display" delay={0.15} />
              </span>
            </h1>

            <div className="border-t border-line my-8 w-4/5" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans font-light text-[18px] text-ink-muted max-w-sm leading-[1.7]"
            >
              Payxara is a precision-built luxury fintech brand — engineered for
              private wealth intelligence, institutional capital, and the clients
              who expect both.
            </motion.p>
          </div>

          {/* Bottom: contact + scroll label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex items-end justify-between"
          >
            <a
              href="https://madebyevoke.com/domains/payxara"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans font-medium text-[13px] text-ink lime-hover"
            >
              madebyevoke.com →
            </a>
            <span
              className="font-sans text-[10px] tracking-[0.25em] text-ink-faint uppercase select-none"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Scroll to explore
            </span>
          </motion.div>
        </motion.div>

        {/* ── Right column ── */}
        <motion.div
          style={{ rotate: rightRotate, scale: rightScale }}
          className="relative hidden lg:flex items-center justify-center"
        >
          {/* Ghost letter */}
          <span
            className="absolute font-serif font-light text-ink select-none pointer-events-none"
            style={{ fontSize: "clamp(200px, 28vw, 360px)", opacity: 0.035, lineHeight: 1 }}
            aria-hidden
          >
            P
          </span>

          {/* Geometric SVG instrument */}
          <svg
            width="340"
            height="480"
            viewBox="0 0 340 480"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Outer portrait rectangle */}
            <rect x="1" y="1" width="338" height="478" stroke="#E0DFD8" strokeWidth="1" />

            {/* Inner lime-accented offset rectangle */}
            <rect x="40" y="60" width="220" height="300" stroke="#E4F222" strokeWidth="1" />

            {/* Cross-hair lines */}
            <line x1="170" y1="0" x2="170" y2="480" stroke="#E0DFD8" strokeWidth="0.5" />
            <line x1="0" y1="240" x2="340" y2="240" stroke="#E0DFD8" strokeWidth="0.5" />

            {/* Fine diagonals */}
            <line x1="0" y1="0" x2="340" y2="480" stroke="#E0DFD8" strokeWidth="0.35" />
            <line x1="340" y1="0" x2="0" y2="480" stroke="#E0DFD8" strokeWidth="0.35" />

            {/* Roman numeral — watch face element */}
            <text
              x="170"
              y="255"
              textAnchor="middle"
              dominantBaseline="middle"
              fontFamily="Cormorant Garamond, serif"
              fontSize="64"
              fontStyle="italic"
              fontWeight="300"
              fill="#0A0A08"
            >
              XII
            </text>

            {/* Corner marks */}
            <path d="M0 20 L20 20 L20 0" stroke="#E0DFD8" strokeWidth="0.75" fill="none" />
            <path d="M320 0 L320 20 L340 20" stroke="#E0DFD8" strokeWidth="0.75" fill="none" />
            <path d="M0 460 L20 460 L20 480" stroke="#E0DFD8" strokeWidth="0.75" fill="none" />
            <path d="M320 480 L320 460 L340 460" stroke="#E0DFD8" strokeWidth="0.75" fill="none" />
          </svg>

          {/* Bottom-right counter */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.7 }}
            className="absolute bottom-16 right-0 text-right"
          >
            <span className="block font-serif font-semibold text-[clamp(40px,5vw,64px)] text-ink leading-none">
              47
            </span>
            <span className="block font-sans font-light text-[13px] text-ink-faint mt-1 max-w-[160px]">
              M+ parcels of financial territory
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
