import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Platform — How Payxara works",
  description: "One platform for every payment need. Transfers, FX, analytics, and APIs — built for teams that move fast.",
};

const capabilities = [
  {
    category: "Transfers",
    items: [
      { title: "Domestic transfers", body: "Same-day ACH and wire transfers across all major banking networks." },
      { title: "International wires", body: "SWIFT and local rails to 180+ countries. Settled in local currency." },
      { title: "Batch payments", body: "Send to hundreds of recipients in a single API call or file upload." },
    ],
  },
  {
    category: "FX & Treasury",
    items: [
      { title: "Live exchange rates", body: "Mid-market rates in 60+ currencies, updated every 30 seconds." },
      { title: "FX hedging tools", body: "Lock in rates forward to protect against currency fluctuations." },
      { title: "Multi-currency accounts", body: "Hold, convert, and pay in any supported currency without conversion loss." },
    ],
  },
  {
    category: "Compliance & Security",
    items: [
      { title: "Automated KYB/KYC", body: "Onboard counterparties and verify business identities in minutes." },
      { title: "Transaction monitoring", body: "AI-powered screening against global sanctions and watchlists, real time." },
      { title: "Audit trails", body: "Immutable, timestamped records of every transaction for regulators and auditors." },
    ],
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 bg-bg">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-4">Platform</p>
            <h1 className="text-[clamp(36px,6vw,68px)] font-extrabold text-ink leading-[1.05] tracking-tight mb-6 max-w-3xl">
              One platform. Every payment need covered.
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-muted leading-relaxed max-w-xl">
              Transfers, FX, analytics, developer APIs — built for teams that move
              fast and can&apos;t afford to be slowed down by financial plumbing.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 px-5 bg-bg-alt border-t border-border">
        <div className="max-w-6xl mx-auto space-y-16">
          {capabilities.map((cap, ci) => (
            <div key={cap.category}>
              <ScrollReveal>
                <p className="text-[13px] font-semibold text-accent mb-6">{cap.category}</p>
              </ScrollReveal>
              <div className="grid md:grid-cols-3 gap-5">
                {cap.items.map((item, i) => (
                  <ScrollReveal key={item.title} delay={i * 0.08}>
                    <div className="bg-card border border-border rounded-2xl p-6 h-full">
                      <h3 className="text-[16px] font-semibold text-ink mb-2">{item.title}</h3>
                      <p className="text-[14px] text-muted leading-relaxed">{item.body}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* API section */}
      <section className="py-20 lg:py-28 px-5 bg-bg border-t border-border">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-4">For developers</p>
            <h2 className="text-[clamp(26px,4vw,44px)] font-bold text-ink leading-tight mb-5">
              Integrate payments in an afternoon.
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-8">
              Clean REST APIs, comprehensive webhooks, and SDKs for Node, Python,
              Ruby, Go, Java, PHP, .NET, and Elixir. Sandbox environment included
              — no approval required to start testing.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="bg-ink text-white text-[14px] font-semibold px-5 py-2.5 rounded-full hover:bg-ink/80 transition-colors">
                Read the docs
              </Link>
              <Link href="#" className="border border-border text-ink text-[14px] font-medium px-5 py-2.5 rounded-full hover:bg-bg-alt transition-colors">
                View on GitHub →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              {[
                { method: "POST", path: "/v1/transfers", ms: "48ms", color: "text-blue-400" },
                { method: "GET", path: "/v1/transfers/:id", ms: "12ms", color: "text-green-400" },
                { method: "GET", path: "/v1/fx/rates?from=USD&to=GBP", ms: "9ms", color: "text-green-400" },
                { method: "POST", path: "/v1/accounts/verify", ms: "220ms", color: "text-blue-400" },
                { method: "DELETE", path: "/v1/webhooks/:id", ms: "15ms", color: "text-red-400" },
              ].map((r) => (
                <div key={r.path} className="flex items-center justify-between bg-bg-dark rounded-xl px-4 py-3">
                  <div className="flex items-center gap-3 font-mono text-[12px]">
                    <span className={`${r.color} font-bold w-12 shrink-0`}>{r.method}</span>
                    <span className="text-white/60 truncate">{r.path}</span>
                  </div>
                  <span className="text-white/30 text-[11px] font-mono shrink-0 ml-2">{r.ms}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-5 bg-bg-dark">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-8">
          <ScrollReveal>
            <h2 className="text-[clamp(24px,4vw,44px)] font-bold text-white leading-tight max-w-lg">
              Start building today. No credit card needed.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1} className="shrink-0">
            <div className="flex flex-wrap gap-3">
              <Link href="#" className="bg-white text-ink text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors">
                Get started free
              </Link>
              <Link href="/pricing" className="border border-white/20 text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                View pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
