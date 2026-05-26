import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vision — Why Payxara exists",
  description: "We built Payxara because global payments were broken. Slow, opaque, expensive. There had to be a better way.",
};

const values = [
  {
    n: "01",
    title: "Transparency first",
    body: "Hidden fees are a feature of the old system, not ours. Every rate, every charge, every line item — shown upfront, always.",
  },
  {
    n: "02",
    title: "Speed as a right",
    body: "Waiting three days to move money in 2025 is not a technical limitation. It's a choice. We chose differently.",
  },
  {
    n: "03",
    title: "Built for builders",
    body: "The businesses using Payxara are moving fast. Our infrastructure was built to keep up — not hold them back.",
  },
  {
    n: "04",
    title: "Security without friction",
    body: "Compliance and speed are not opposites. We built both, together, without making you choose.",
  },
];

export default function VisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-4">Our vision</p>
            <h1 className="text-[clamp(36px,6vw,68px)] font-extrabold text-ink leading-[1.05] tracking-tight mb-6 max-w-3xl">
              A world where moving money is as simple as sending a message.
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-muted leading-relaxed max-w-xl">
              We built Payxara because global payments were broken. Slow, opaque,
              expensive. There had to be a better way.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin story */}
      <section className="py-20 lg:py-28 px-5 bg-bg-alt border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal>
            <h2 className="text-[clamp(26px,3.5vw,40px)] font-bold text-ink leading-tight mb-6">
              The problem we set out to solve.
            </h2>
            <div className="space-y-4 text-[15px] text-muted leading-relaxed">
              <p>
                Businesses were paying 3–5% on every international transfer.
                Finance teams were reconciling transactions across five different
                bank portals. Settlement was taking days that nobody could afford
                to lose.
              </p>
              <p>
                The technology to fix this existed. The infrastructure to run it
                efficiently existed. What didn&apos;t exist was a product built with
                the end user in mind — the CFO, the developer, the operations
                lead who just needed it to work.
              </p>
              <p>
                That&apos;s Payxara. Payments infrastructure rebuilt from the ground
                up for the businesses that will define the next decade.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-card border border-border rounded-3xl p-8 space-y-6">
              {[
                { label: "Average FX markup eliminated", value: "4.2%", sub: "per transaction" },
                { label: "Settlement time reduced", value: "3 days", sub: "→ under 30 seconds" },
                { label: "Finance team hours saved", value: "14hrs", sub: "per week on average" },
              ].map((s) => (
                <div key={s.label} className="pb-6 border-b border-border last:border-0 last:pb-0">
                  <p className="text-[12px] text-muted font-medium mb-1">{s.label}</p>
                  <p className="text-[28px] font-bold text-ink leading-none">{s.value}</p>
                  <p className="text-[12px] text-muted mt-1">{s.sub}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 px-5 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-3">What we believe</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-ink leading-tight tracking-tight">
              The principles behind everything we build.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={v.n} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-2xl p-7">
                  <span className="text-[12px] font-semibold text-muted">{v.n}</span>
                  <h3 className="text-[18px] font-bold text-ink mt-3 mb-2">{v.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{v.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dark quote */}
      <section className="py-20 lg:py-28 px-5 bg-bg-dark">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote className="text-[clamp(22px,3.5vw,40px)] font-bold text-white leading-tight mb-8">
              &ldquo;The businesses winning the next decade won&apos;t be slowed down by the financial infrastructure of the last one.&rdquo;
            </blockquote>
            <Link href="#" className="bg-white text-ink text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors">
              Start building with Payxara
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
