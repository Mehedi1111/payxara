import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Pricing — Simple, transparent pricing",
  description: "No hidden fees, no long-term contracts. Start free and scale as you grow.",
};

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "For founders and early-stage teams testing international payments.",
    limit: "Up to $10,000/month volume",
    features: [
      "2 team members",
      "5 supported currencies",
      "Standard transfer speed",
      "Basic analytics dashboard",
      "Email support",
      "API access (100 req/min)",
    ],
    cta: "Get started free",
    ctaHref: "#",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$29",
    period: "/month",
    description: "For growing businesses that need more volume, currencies, and speed.",
    limit: "Up to $500,000/month volume",
    features: [
      "15 team members",
      "60+ currencies",
      "Priority settlement",
      "Advanced analytics & exports",
      "24/7 live chat support",
      "API access (2,000 req/min)",
      "Webhooks & event streams",
      "Multi-currency accounts",
    ],
    cta: "Start Growth plan",
    ctaHref: "#",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For high-volume teams that need custom infrastructure and SLAs.",
    limit: "Unlimited volume",
    features: [
      "Unlimited team members",
      "Custom FX rates",
      "Dedicated account manager",
      "99.99% uptime SLA",
      "Custom compliance reporting",
      "SSO / SAML integration",
      "On-premise deployment option",
      "White-label API available",
    ],
    cta: "Talk to sales",
    ctaHref: "#",
    highlight: false,
  },
];

const faqs = [
  {
    q: "Is there a free trial?",
    a: "Yes — all paid plans include a 14-day free trial. No credit card required to start. You can also stay on the Starter plan indefinitely at no cost.",
  },
  {
    q: "Are there fees per transaction?",
    a: "Payxara charges a flat percentage per transfer (0.3% on Growth, negotiated on Enterprise). No additional wire fees, no receiving fees, no maintenance charges.",
  },
  {
    q: "What exchange rates do you use?",
    a: "We use live mid-market rates sourced directly from Reuters and the ECB. There is no markup on FX — the rate you see is the rate you get.",
  },
  {
    q: "Can I change plans at any time?",
    a: "Yes. Upgrade or downgrade at any time. When you upgrade, the new rate applies immediately. When you downgrade, it applies at the next billing cycle.",
  },
  {
    q: "What counts toward monthly volume?",
    a: "Volume is calculated as the total USD-equivalent value of all outbound transfers in a calendar month. Inbound receipts do not count toward your limit.",
  },
  {
    q: "Do you offer refunds?",
    a: "If you cancel within 7 days of your first paid charge, we'll refund the full amount. After that, cancellations take effect at the end of the billing period.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 bg-bg text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-4">Pricing</p>
            <h1 className="text-[clamp(36px,6vw,64px)] font-extrabold text-ink leading-[1.05] tracking-tight mb-5">
              Simple pricing, no surprises.
            </h1>
            <p className="text-[clamp(16px,2vw,19px)] text-muted leading-relaxed">
              Start free. Scale as you grow. Cancel any time, no questions asked.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Plans */}
      <section className="pb-20 lg:pb-28 px-5 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto pt-12">
          <div className="grid md:grid-cols-3 gap-5">
            {plans.map((plan, i) => (
              <ScrollReveal key={plan.name} delay={i * 0.1}>
                <div className={`relative rounded-3xl p-7 flex flex-col h-full border transition-all duration-200 ${
                  plan.highlight
                    ? "bg-bg-dark border-bg-dark shadow-2xl"
                    : "bg-card border-border hover:border-accent/30 hover:shadow-sm"
                }`}>
                  {plan.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-white text-[11px] font-bold tracking-wider uppercase px-4 py-1 rounded-full">
                      Most popular
                    </div>
                  )}

                  <div className="mb-6">
                    <p className={`text-[12px] font-semibold tracking-widest uppercase mb-3 ${plan.highlight ? "text-white/50" : "text-muted"}`}>
                      {plan.name}
                    </p>
                    <div className="flex items-end gap-1 mb-2">
                      <span className={`text-[44px] font-bold leading-none ${plan.highlight ? "text-white" : "text-ink"}`}>
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className={`text-[14px] mb-1.5 ${plan.highlight ? "text-white/50" : "text-muted"}`}>
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <p className={`text-[13px] leading-relaxed mb-2 ${plan.highlight ? "text-white/60" : "text-muted"}`}>
                      {plan.description}
                    </p>
                    <p className={`text-[12px] font-semibold ${plan.highlight ? "text-white/40" : "text-muted"}`}>
                      {plan.limit}
                    </p>
                  </div>

                  <div className={`border-t mb-6 ${plan.highlight ? "border-white/10" : "border-border"}`} />

                  <ul className="space-y-3 flex-1 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className={`flex items-start gap-3 text-[13px] ${plan.highlight ? "text-white/70" : "text-ink"}`}>
                        <span className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px] font-bold ${
                          plan.highlight ? "bg-white/10 text-white" : "bg-accent-light text-accent"
                        }`}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={plan.ctaHref}
                    className={`block text-center py-3 rounded-full text-[14px] font-semibold transition-all duration-200 ${
                      plan.highlight
                        ? "bg-white text-ink hover:bg-white/90"
                        : "bg-ink text-white hover:bg-ink/80"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <p className="text-center text-[13px] text-muted mt-8">
            All plans include a 14-day free trial. No credit card required to start.
          </p>
        </div>
      </section>

      {/* Compare callout */}
      <section className="py-20 lg:py-28 px-5 bg-bg-alt border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { title: "Transaction fee", starter: "0.5%", growth: "0.3%", enterprise: "Custom" },
              { title: "FX markup", starter: "None", growth: "None", enterprise: "None" },
              { title: "API rate limit", starter: "100/min", growth: "2,000/min", enterprise: "Unlimited" },
              { title: "Support", starter: "Email", growth: "24/7 chat", enterprise: "Dedicated" },
              { title: "Multi-currency accounts", starter: "—", growth: "✓", enterprise: "✓" },
              { title: "Custom SLA", starter: "—", growth: "—", enterprise: "✓" },
            ].map((row) => (
              <div key={row.title} />
            ))}
          </div>

          {/* Simple comparison table */}
          <ScrollReveal>
            <div className="bg-card border border-border rounded-3xl overflow-hidden">
              <div className="grid grid-cols-4 bg-bg-alt border-b border-border">
                <div className="px-5 py-4 text-[12px] font-semibold text-muted uppercase tracking-wide">Feature</div>
                {["Starter", "Growth", "Enterprise"].map((p) => (
                  <div key={p} className="px-5 py-4 text-[13px] font-bold text-ink text-center">{p}</div>
                ))}
              </div>
              {[
                { label: "Transaction fee", vals: ["0.5%", "0.3%", "Custom"] },
                { label: "FX markup", vals: ["None", "None", "None"] },
                { label: "API rate limit", vals: ["100/min", "2,000/min", "Unlimited"] },
                { label: "Support", vals: ["Email", "24/7 chat", "Dedicated"] },
                { label: "Multi-currency accounts", vals: ["—", "✓", "✓"] },
                { label: "Custom SLA", vals: ["—", "—", "✓"] },
              ].map((row) => (
                <div key={row.label} className="grid grid-cols-4 border-b border-border last:border-0">
                  <div className="px-5 py-4 text-[13px] text-muted">{row.label}</div>
                  {row.vals.map((v, i) => (
                    <div key={i} className={`px-5 py-4 text-[13px] text-center font-medium ${v === "—" ? "text-muted" : "text-ink"}`}>
                      {v}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 px-5 bg-bg border-t border-border">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal className="mb-12">
            <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-ink leading-tight tracking-tight">
              Frequently asked questions.
            </h2>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={faq.q} delay={i * 0.06}>
                <div className="border-b border-border py-6">
                  <p className="text-[16px] font-semibold text-ink mb-2">{faq.q}</p>
                  <p className="text-[14px] text-muted leading-relaxed">{faq.a}</p>
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
              Still have questions?
            </h2>
            <p className="text-[16px] text-white/50 mb-10 max-w-md mx-auto">
              Talk to the team — we&apos;re happy to walk you through the right plan for your business.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#" className="bg-white text-ink text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors">
                Start for free
              </Link>
              <Link href="#" className="border border-white/20 text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                Contact sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
