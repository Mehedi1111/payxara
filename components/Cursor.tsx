"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { damping: 22, stiffness: 180, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 22, stiffness: 180, mass: 0.5 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Lime dot — instant follow */}
      <motion.div
        id="cursor-dot"
        style={{ left: mouseX, top: mouseY }}
        className="fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-lime mix-blend-multiply"
      />
      {/* Ring — spring lag */}
      <motion.div
        id="cursor-ring"
        style={{ left: ringX, top: ringY }}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full border border-ink mix-blend-multiply"
      />
    </>
  );
}
