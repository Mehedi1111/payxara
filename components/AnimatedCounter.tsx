"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export default function AnimatedCounter({
  value,
  suffix = "",
  prefix = "",
  className = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.5,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = `${prefix}${Math.round(v).toLocaleString()}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [isInView, value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
}
