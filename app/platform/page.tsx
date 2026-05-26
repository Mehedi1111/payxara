import type { Metadata } from "next";
import SplitText from "@/components/SplitText";
import ScrollReveal from "@/components/ScrollReveal";
import LimeAccent from "@/components/LimeAccent";

export const metadata: Metadata = {
  title: "Platform — Built for wealth that demands more",
  description:
    "Payxara is the brand architecture for a private wealth intelligence platform — where machine precision meets human discernment.",
};

const cells = [
  {
    title: "Private Intelligence",
    body: "Real-time portfolio intelligence layered with macroeconomic signals. Not dashboards — decisions. Built for advisors who operate at the intersection of data and discretion.",
  },
  {
    title: "Institutional Grade Architecture",
    body: "The infrastructure private banks build in decades — delivered under a single brand. SOC 2 compliant, multi-jurisdictional, zero-latency trade execution intelligence.",
  },
  {
    title: "White-Glove Digital Experience",
    body: "Payxara's brand promise: technology that feels handmade. Every interaction calibrated for high-net-worth clients who have seen everything and are impressed by nothing ordinary.",
  },
  {
    title: "Capital Clarity Engine",
    body: "Position reports that don't require interpretation. Tax-optimized rebalancing that doesn't require explanation. Payxara makes complexity invisible.",
  },
];

const markets = [
  { n: "01", title: "Private Banking", sub: "Primary market" },
  { n: "02", title: "Digital Wealth", sub: "Product category" },
  { n: "03", title: "Family Office", sub: "Institutional use" },
  { n: "04", title: "Boutique PE", sub: "Capital markets" },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <LimeAccent />
          <p className="font-sans font-semibold text-[11px] tracking-[0.2em] text-ink-faint uppercase mt-2">
            Platform
          </p>
          <h1 className="font-serif font-light italic text-[clamp(44px,6vw,88px)] leading-[1.04] text-ink mt-8 max-w-3xl">
            <span className="block">
              <SplitText text="Built for wealth" />
            </span>
            <span className="block">
              <SplitText text="that demands more." delay={0.2} />
            </span>
          </h1>
          <ScrollReveal delay={0.4}>
            <p className="font-sans font-light text-[clamp(16px,1.8vw,19px)] text-ink-muted max-w-md mt-8 leading-[1.7]">
              Payxara is the brand architecture for a private wealth intelligence
              platform — where machine precision meets human discernment.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Feature grid */}
      <div className="border-t border-line">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2">
          {cells.map((cell, i) => (
            <ScrollReveal
              key={cell.title}
              delay={i * 0.1}
              className={`px-8 lg:px-14 py-16 border-b border-line ${
                i % 2 === 0 ? "md:border-r md:border-line" : ""
              }`}
            >
              <LimeAccent width={24} />
              <h2 className="font-serif font-semibold text-[clamp(20px,2.5vw,28px)] text-ink mt-4">
                {cell.title}
              </h2>
              <p className="font-sans font-light text-[15px] text-ink-muted mt-4 leading-[1.75]">
                {cell.body}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Large statement */}
      <section className="border-t border-b border-line py-24 lg:py-32 px-6 text-center">
        <ScrollReveal>
          <blockquote className="font-serif font-light italic text-[clamp(22px,4vw,62px)] text-ink max-w-5xl mx-auto leading-[1.15]">
            "The client experience should feel like the brand — quiet, confident,
            and impossible to confuse with anything else."
          </blockquote>
        </ScrollReveal>
      </section>

      {/* Markets */}
      <section className="py-24 lg:py-32 px-6 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
            {markets.map((m, i) => (
              <ScrollReveal key={m.n} delay={i * 0.1} className="px-6 lg:px-10 text-center">
                <p className="font-sans font-light text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-3">
                  {m.n}
                </p>
                <p className="font-serif italic text-[clamp(16px,2vw,22px)] text-ink">
                  {m.title}
                </p>
                <p className="font-sans font-light text-[13px] text-ink-faint mt-2">
                  {m.sub}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
