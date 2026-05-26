import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MarqueeRow from "@/components/MarqueeRow";
import HorizontalScroll from "@/components/HorizontalScroll";
import ScrollReveal from "@/components/ScrollReveal";
import LimeAccent from "@/components/LimeAccent";

export const metadata: Metadata = {
  title: "Payxara — Luxury Fintech Brand & Domain",
};

const marqueeItems = [
  "Private Wealth Intelligence",
  "Capital Clarity",
  "Institutional Grade",
  "Precision Finance",
  "Zero Compromise",
  "Payxara",
];

const principles = [
  { n: "01", label: "Precision" },
  { n: "02", label: "Restraint" },
  { n: "03", label: "Intelligence" },
  { n: "04", label: "Permanence" },
];

const pillars = [
  {
    roman: "I",
    title: "Brand Capital",
    body: "A name that accrues value with every use. Payxara is distinctive, memorable, and protected — a brand asset that appreciates.",
  },
  {
    roman: "II",
    title: "Domain Authority",
    body: "Payxara.com is available. Clean. Unencumbered. Four syllables. Eleven characters. An asset most luxury fintech brands would build a decade to deserve.",
  },
  {
    roman: "III",
    title: "Market Position",
    body: "The luxury fintech segment is underbranded. Payxara occupies an unmistakable position — precise enough for private banking, distinctive enough for a digital-native wealth product.",
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* Marquee */}
      <div className="border-t border-b border-line py-5 overflow-hidden">
        <MarqueeRow items={marqueeItems} />
      </div>

      {/* Statement section */}
      <section className="py-24 lg:py-40 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[40%_60%] gap-16 lg:gap-24">
            {/* Left: sticky label + principles */}
            <div className="lg:sticky lg:top-32 lg:h-fit">
              <LimeAccent />
              <p className="font-sans font-semibold text-[11px] tracking-[0.2em] text-ink-faint uppercase mt-2">
                Brand Vision
              </p>
              <ul className="mt-8 space-y-0">
                {principles.map((p) => (
                  <li key={p.n} className="flex items-center gap-4 border-b border-line py-4 last:border-0">
                    <span className="font-serif italic text-[13px] text-ink-faint">{p.n}</span>
                    <span className="font-sans font-medium text-[13px] text-ink-muted">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: statements */}
            <div className="space-y-16">
              {[
                {
                  h: "Not faster. Not louder. Simply better than everything before it.",
                  p: "Payxara is built on the premise that high-net-worth clients don't need more features. They need fewer, executed with absolute precision. The brand says what a hundred competitors can't.",
                },
                {
                  h: "A name that carries weight before the product is even opened.",
                  p: "Payxara arrives with built-in brand gravity. The unusual 'x' creates a natural pause — a cognitive hook. The sound is assured. The shape on a letterhead commands rooms.",
                },
                {
                  h: "Designed for the institutions that shape capital — not follow it.",
                  p: "Private banks, family offices, boutique investment firms, and luxury digital wealth platforms — Payxara gives each of them a brand identity worth protecting.",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <h2 className="font-serif font-light italic text-[clamp(24px,3.5vw,42px)] leading-[1.1] text-ink">
                    {item.h}
                  </h2>
                  <p className="font-sans font-light text-[16px] text-ink-muted mt-4 leading-[1.8]">
                    {item.p}
                  </p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal scroll panels */}
      <HorizontalScroll />

      {/* Three Pillars */}
      <section className="border-t border-line bg-ivory">
        <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
          <LimeAccent />
          <p className="font-sans font-semibold text-[11px] tracking-[0.2em] text-ink-faint uppercase mt-3 mb-16">
            What Payxara Represents
          </p>
        </div>
        <div className="border-t border-line">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-line">
            {pillars.map((p, i) => (
              <ScrollReveal key={p.roman} delay={i * 0.1} className="px-8 lg:px-12 py-16">
                <span className="font-serif italic text-[clamp(60px,8vw,80px)] leading-none text-ink/10 block">
                  {p.roman}
                </span>
                <h3 className="font-serif font-medium text-[clamp(20px,2.5vw,26px)] text-ink mt-4">
                  {p.title}
                </h3>
                <p className="font-sans font-light text-[15px] text-ink-muted mt-3 leading-[1.7]">
                  {p.body}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
