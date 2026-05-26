import type { Metadata } from "next";
import SplitText from "@/components/SplitText";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vision — The luxury gap in financial services",
  description:
    "Premium wealth management firms carry the visual language of 1997. Payxara was built to close that gap with a single word.",
};

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-48 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif font-light italic text-[clamp(40px,7vw,100px)] leading-[1.02] text-ink">
            <span className="block">
              <SplitText text="The luxury gap" />
            </span>
            <span className="block">
              <SplitText text="in financial services" delay={0.2} />
            </span>
            <span className="block">
              <SplitText text="is a naming problem." delay={0.4} />
            </span>
          </h1>

          <ScrollReveal delay={0.5} className="mt-10">
            <p className="font-sans font-light text-[clamp(16px,2vw,20px)] text-ink-muted max-w-lg mx-auto leading-[1.7]">
              Premium wealth management firms carry the visual language of 1997.
              Payxara was built to close that gap with a single word.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <div className="border-t border-line" />

      {/* Section 1 — Names that sound like money */}
      <section className="py-24 lg:py-32 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[70%_30%] gap-12 lg:gap-20 items-start">
          <ScrollReveal direction="left">
            <h2 className="font-serif font-light italic text-[clamp(28px,4vw,52px)] leading-[1.1] text-ink">
              "Names that sound like money don't need to explain themselves."
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <p className="font-sans font-light text-[15px] text-ink-muted leading-[1.8] lg:pt-3">
              Goldman. Vanguard. Fidelity. Refinitiv. Each carries authority
              through sound alone. Payxara joins that lineage — an invented word
              that feels inevitable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 2 — Rarity scales */}
      <section className="py-24 lg:py-32 px-6 border-b border-line">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[30%_70%] gap-12 lg:gap-20 items-start">
          <ScrollReveal direction="left">
            <p className="font-sans font-light text-[15px] text-ink-muted leading-[1.8]">
              The &lsquo;x&rsquo; is not a trend. In a world drowning in &lsquo;-ify&rsquo; and
              &lsquo;-ly&rsquo; brand suffixes, an internal x creates typographic rarity.
              It signals precision engineering.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <h2 className="font-serif font-light italic text-[clamp(28px,4vw,52px)] leading-[1.1] text-ink">
              "Rarity is the only luxury that scales."
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Section 3 — Pay Xara */}
      <section className="grain relative py-24 lg:py-32 bg-ivory-dark border-b border-line text-center px-6">
        <ScrollReveal>
          <p className="font-serif font-light tracking-[0.15em] text-[clamp(42px,8vw,80px)] leading-none text-ink">
            PAY — XARA
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2} className="mt-8">
          <p className="font-sans font-light text-[15px] text-ink-muted max-w-lg mx-auto leading-[1.8]">
            Pay — the universal verb of financial action. Xara — coined, ownable,
            globally pronounceable in 47 languages. Together: a name that works in
            a Zürich boardroom and a Singapore wealth app.
          </p>
        </ScrollReveal>
      </section>

      {/* Dark closing quote */}
      <section className="grain relative bg-obsidian py-24 lg:py-32 px-6 text-center">
        <ScrollReveal>
          <blockquote className="font-serif font-light italic text-[clamp(24px,4vw,54px)] text-ivory/90 max-w-4xl mx-auto leading-[1.2]">
            "The best brand names feel like they always existed. Payxara was
            waiting to be found."
          </blockquote>
        </ScrollReveal>
      </section>
    </>
  );
}
