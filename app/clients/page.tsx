import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";

export const metadata: Metadata = {
  title: "Clients — Wealth Professionals Who Chose Payxara",
  description:
    "From boutique advisory to institutional management. See how Payxara helps wealth professionals serve more clients with less overhead.",
};

const cases = [
  {
    firm: "Hartley Capital",
    type: "Private Wealth Manager · London",
    quote:
      "Payxara cut our compliance time by 70%. We can now serve twice the clients without adding headcount.",
    author: "Sarah Hartley",
    role: "Founder, Hartley Capital",
    stats: [
      { val: "70%", label: "less admin" },
      { val: "2×", label: "client capacity" },
      { val: "£0", label: "extra headcount" },
    ],
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80",
    bg: "https://images.unsplash.com/photo-1743529628081-6777a326a4e5?auto=format&fit=crop&w=700&h=480&q=80",
  },
  {
    firm: "Meridian Advisors",
    type: "Multi-Family Office · Edinburgh",
    quote:
      "We pay 140 contractors across 28 countries every month. Payxara makes it feel like we're paying one person in one country.",
    author: "Ananya Singh",
    role: "COO, Meridian Advisors",
    stats: [
      { val: "140", label: "contractors paid" },
      { val: "28", label: "countries covered" },
      { val: "99.9%", label: "on-time settlement" },
    ],
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&h=400&q=80",
    bg: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=700&h=480&q=80",
  },
  {
    firm: "Apex Wealth",
    type: "Institutional Asset Manager · Dublin",
    quote:
      "The compliance tooling alone would have taken us six months to build internally. We had it running on day one.",
    author: "David Lin",
    role: "CTO, Apex Wealth",
    stats: [
      { val: "6mo", label: "saved in dev time" },
      { val: "Day 1", label: "go-live" },
      { val: "100%", label: "audit coverage" },
    ],
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&h=480&q=80",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="bg-white pt-40 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h1
              className="font-black text-ink tracking-[-0.03em] leading-[1.02]"
              style={{ fontSize: "clamp(44px,6vw,78px)" }}
            >
              Wealth professionals who chose Payxara.
            </h1>
            <p className="text-[18px] text-ink-muted mt-6">
              From boutique advisory to institutional management.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CLIENT CASE STUDIES ──────────────── */}
      {cases.map((c, i) => (
        <section key={c.firm} className="border-t border-line">
          <div className={`max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}>
            {/* Image */}
            <ScrollReveal x={i % 2 === 0 ? -30 : 30}>
              <div className="relative rounded-2xl overflow-hidden h-72 w-full">
                <Image
                  src={c.bg}
                  alt={c.firm}
                  fill
                  className="object-cover"
                />
              </div>
            </ScrollReveal>

            {/* Content */}
            <ScrollReveal delay={0.1}>
              <p className="text-[26px] font-extrabold text-ink">{c.firm}</p>
              <p className="text-[14px] text-ink-faint mt-1">{c.type}</p>
              <div className="w-12 h-1 bg-green my-5" />
              <blockquote className="text-[20px] font-medium text-ink leading-[1.5] italic">
                &ldquo;{c.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 mt-6">
                <Image
                  src={c.photo}
                  alt={c.author}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-semibold text-ink">{c.author}</p>
                  <p className="text-[13px] text-ink-muted">{c.role}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex gap-6 mt-8 pt-8 border-t border-line">
                {c.stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-[22px] font-extrabold text-ink leading-tight">{s.val}</p>
                    <p className="text-[12px] text-ink-faint mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── STATS BAND ───────────────────────── */}
      <section className="bg-dark py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
            {[
              { to: 500, suffix: "+", label: "Wealth professionals" },
              { to: 4.2, suffix: "B", prefix: "£", label: "Assets on platform", decimals: 1 },
              { to: 99.9, suffix: "%", label: "Uptime SLA", decimals: 1 },
              { to: 2, suffix: "hrs", prefix: "< ", label: "Average onboarding" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.08}>
                <div
                  className={`text-center py-8 px-4 ${
                    i < 3 ? "border-b md:border-b-0 md:border-r border-white/10" : ""
                  }`}
                >
                  <p className="text-[44px] font-black text-white leading-none tracking-tight">
                    <AnimatedCounter to={s.to} prefix={s.prefix || ""} suffix={s.suffix} decimals={s.decimals || 0} />
                  </p>
                  <p className="text-[14px] text-white/50 mt-2">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────── */}
      <section className="bg-canvas py-20 px-6 border-t border-line text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em]"
              style={{ fontSize: "clamp(28px,4vw,48px)" }}
            >
              See if Payxara is right for your practice.
            </h2>
            <p className="text-[16px] text-ink-muted mt-5 max-w-xl mx-auto">
              Start free, no credit card. Or talk to the team about your specific needs.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/acquire" className="green-btn px-8 py-4 rounded-xl text-[16px]">
                Get Started Free
              </Link>
              <Link href="mailto:hello@madebyevoke.com" className="ghost-btn-dark px-8 py-4 rounded-xl text-[16px]">
                Talk to Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
