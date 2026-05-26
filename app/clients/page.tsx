import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Clients — Who uses Payxara",
  description: "From Series A startups to global enterprises — Payxara scales with your business.",
};

const segments = [
  {
    label: "E-commerce & Retail",
    headline: "Pay suppliers globally. Get paid locally.",
    body: "E-commerce businesses use Payxara to pay overseas manufacturers, receive revenue in local currencies, and reconcile it all in one dashboard — without a treasury team.",
    points: ["Multi-currency checkout", "Supplier batch payments", "Automatic reconciliation", "FX rate protection"],
  },
  {
    label: "SaaS & Technology",
    headline: "Global revenue, without global complexity.",
    body: "Software companies use Payxara to accept subscriptions in 60+ currencies, pay contractors across time zones, and keep their finance stack simple as they scale.",
    points: ["Subscription billing support", "Contractor payouts", "Revenue recognition exports", "API-native operations"],
  },
  {
    label: "Financial Services",
    headline: "Move client funds with confidence.",
    body: "Wealth managers, lending platforms, and trading desks use Payxara for its compliance infrastructure and settlement speed — because when it comes to client money, nothing less is acceptable.",
    points: ["SOC 2 Type II compliant", "Immutable audit trails", "Sanctions screening", "Segregated accounts"],
  },
  {
    label: "Professional Services",
    headline: "Invoice globally. Chase nothing.",
    body: "Agencies, consultancies, and law firms use Payxara to invoice international clients in their local currency and settle without the friction of correspondent banking.",
    points: ["Multi-currency invoicing", "Automated payment reminders", "Live FX on receipts", "Client portal access"],
  },
];

const testimonials = [
  {
    quote: "Our settlement time dropped from 4 days to under a minute. The impact on cash flow was immediate.",
    name: "James W.",
    role: "Head of Finance, Volta Logistics",
    initials: "JW",
  },
  {
    quote: "We pay 140 contractors across 28 countries every month. Payxara makes it feel like we're paying one person in one country.",
    name: "Ananya S.",
    role: "COO, Meridian Software",
    initials: "AS",
  },
  {
    quote: "The compliance tooling alone would have taken us six months to build internally. We had it running on day one.",
    name: "David L.",
    role: "CTO, Apex Wealth",
    initials: "DL",
  },
];

export default function ClientsPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-4">Clients</p>
            <h1 className="text-[clamp(36px,6vw,68px)] font-extrabold text-ink leading-[1.05] tracking-tight mb-6 max-w-3xl">
              Built for businesses that operate without borders.
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-muted leading-relaxed max-w-xl">
              From Series A startups to global enterprises — Payxara scales with
              your transaction volume, team size, and ambition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments */}
      <section className="py-20 lg:py-28 px-5 bg-bg-alt border-t border-border">
        <div className="max-w-6xl mx-auto space-y-6">
          {segments.map((s, i) => (
            <ScrollReveal key={s.label} delay={i * 0.08}>
              <div className={`rounded-3xl p-8 lg:p-10 border border-border ${i % 2 === 0 ? "bg-card" : "bg-bg"}`}>
                <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
                  <div>
                    <p className="text-[12px] font-semibold text-accent uppercase tracking-widest mb-4">{s.label}</p>
                    <h2 className="text-[clamp(20px,3vw,32px)] font-bold text-ink leading-tight mb-4">{s.headline}</h2>
                    <p className="text-[14px] text-muted leading-relaxed">{s.body}</p>
                  </div>
                  <ul className="space-y-3 self-center">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-[14px] text-ink">
                        <span className="w-5 h-5 rounded-full bg-accent-light text-accent flex items-center justify-center shrink-0 text-[11px] font-bold">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28 px-5 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-ink leading-tight tracking-tight">
              From the people using it every day.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full flex flex-col justify-between">
                  <p className="text-[15px] text-ink leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-accent-light text-accent font-semibold text-[13px] flex items-center justify-center shrink-0">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-ink">{t.name}</p>
                      <p className="text-[12px] text-muted">{t.role}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-5 bg-bg-dark">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-white leading-tight mb-6">
              See if Payxara is right for your business.
            </h2>
            <p className="text-[16px] text-white/50 mb-10 max-w-md mx-auto">
              Start free, no credit card. Or talk to the team about your specific needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/pricing" className="bg-white text-ink text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors">
                View pricing
              </Link>
              <Link href="#" className="border border-white/20 text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                Talk to sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
