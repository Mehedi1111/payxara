import type { Metadata } from "next";
import SplitText from "@/components/SplitText";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clients — Who Payxara is built for",
  description:
    "Private banks, digital wealth platforms, family offices, and boutique PE firms — Payxara gives each of them a brand identity worth protecting.",
};

const profiles = [
  {
    n: "01",
    title: "Private Banks",
    body: "Institutions that have managed wealth for generations deserve a digital brand that reflects that tenure. Payxara gives private banking arms the modern digital identity they can't build from legacy infrastructure alone.",
    quote: "The brand a Rothschild would choose if they were launching today.",
  },
  {
    n: "02",
    title: "Digital Wealth Platforms",
    body: "The new generation of wealth management apps — built on API-first architecture, marketed to mass-affluent and HNWI clients — needs brand equity that the incumbents don't own. Payxara is unoccupied territory.",
    quote: "When the product is premium, the name cannot be generic.",
  },
  {
    n: "03",
    title: "Family Offices",
    body: "Single and multi-family offices operate with discretion above all. Payxara provides a brand container for custom technology stacks and client-facing portals that require gravitas without explanation.",
    quote: "Not for everyone. Precisely for you.",
  },
  {
    n: "04",
    title: "Boutique Investment Firms",
    body: "Performance speaks. But performance plus brand compounds. Payxara gives emerging boutique managers the brand infrastructure to compete for allocations alongside firms with 50-year track records.",
    quote: "Capital follows confidence. Confidence follows brand.",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif font-light italic text-[clamp(40px,6vw,90px)] leading-[1.04] text-ink">
            <span className="block">
              <SplitText text="Who Payxara" />
            </span>
            <span className="block">
              <SplitText text="is built for." delay={0.2} />
            </span>
          </h1>
        </div>
      </section>

      <div className="border-t border-line" />

      {/* Profiles */}
      <div className="max-w-6xl mx-auto px-6">
        {profiles.map((p, i) => (
          <section
            key={p.n}
            className="grid md:grid-cols-[20%_80%] gap-8 md:gap-16 py-16 lg:py-24 border-b border-line last:border-b-0"
          >
            <ScrollReveal direction="left">
              <div className="flex md:flex-col gap-4 md:gap-0">
                <span className="font-serif italic text-[clamp(48px,7vw,80px)] text-ink/10 leading-none block">
                  {p.n}
                </span>
                <div className="mt-0 md:mt-[-12px]">
                  <p className="font-sans font-semibold text-[13px] tracking-[0.08em] uppercase text-ink">
                    {p.title}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                <p className="font-sans font-light text-[16px] text-ink-muted leading-[1.8]">
                  {p.body}
                </p>
                <div className="relative pl-6 border-l border-line">
                  <blockquote className="font-serif italic text-[clamp(16px,2vw,20px)] text-ink leading-[1.4]">
                    &ldquo;{p.quote}&rdquo;
                  </blockquote>
                  {/* Lime accent dot — once per section */}
                  <span
                    className="absolute top-0 -left-1 w-2 h-2 bg-lime inline-block"
                    aria-hidden
                  />
                </div>
              </div>
            </ScrollReveal>
          </section>
        ))}
      </div>

      {/* Dark closing CTA */}
      <section className="grain relative bg-obsidian py-24 lg:py-32 px-6 text-center">
        <ScrollReveal>
          <p className="font-sans font-semibold text-[11px] tracking-[0.2em] text-ivory/50 uppercase mb-6">
            One Brand. One Buyer.
          </p>
          <blockquote className="font-serif font-light italic text-[clamp(28px,4vw,70px)] text-ivory max-w-4xl mx-auto leading-[1.1]">
            Payxara will not be sold at auction. It will be placed with one
            qualified buyer who understands what they are acquiring.
          </blockquote>
          <p className="font-sans font-light text-[16px] text-ivory/60 mt-8">
            hello@madebyevoke.com
          </p>
          <Link
            href="/acquire"
            className="inline-block mt-8 bg-lime text-ink font-sans font-semibold text-[13px] tracking-[0.08em] uppercase px-8 py-4 rounded-[4px] hover:bg-lime-dark transition-colors duration-200"
          >
            Begin Acquisition →
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
