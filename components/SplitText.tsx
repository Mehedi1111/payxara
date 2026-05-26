"use client";

import { motion } from "framer-motion";

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const wordVariant = {
  hidden: { y: "110%", opacity: 0 },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export default function SplitText({ text, className = "", delay = 0 }: SplitTextProps) {
  const words = text.split(" ");

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className={`inline-flex flex-wrap gap-x-[0.28em] gap-y-1 ${className}`}
      style={{ transitionDelay: `${delay}s` }}
    >
      {words.map((word, i) => (
        <span key={i} className="overflow-hidden inline-block">
          <motion.span variants={wordVariant} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
