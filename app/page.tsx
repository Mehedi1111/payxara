import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MarqueeRow from "@/components/MarqueeRow";

export const metadata: Metadata = {
  title: "Payxara — Global Payments Platform",
};

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Transfers",
    body: "Move funds between 180+ countries in seconds. No batch windows, no delays — real-time settlement as standard.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253" />
      </svg>
    ),
    title: "60+ Currencies",
    body: "Accept and send in any major currency. Exchange rates updated in real time — always mid-market, never inflated.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Bank-Grade Security",
    body: "256-bit AES encryption, SOC 2 Type II certified, PCI DSS Level 1. AI fraud detection running on every transaction.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "Smart Analytics",
    body: "A real-time view of cash flow, transaction health, and FX exposure — designed for finance teams who need clarity fast.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Developer API",
    body: "REST and webhook APIs with SDKs in 8 languages. Go from sandbox to live in one afternoon — documentation that actually helps.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "No Hidden Fees",
    body: "One transparent rate. No setup fees, no minimums, no surprises on your statement. The price you see is the price you pay.",
  },
];

const steps = [
  {
    n: "01",
    title: "Create your account",
    body: "Sign up in under two minutes. Verify your identity with our streamlined KYC process — no paperwork, no branch visits.",
  },
  {
    n: "02",
    title: "Connect your bank",
    body: "Link your business account securely via Open Banking. Supports 10,000+ banks across 60+ countries worldwide.",
  },
  {
    n: "03",
    title: "Start sending",
    body: "Transfer funds globally in one click. Set up recurring payments, batch transfers, or automate via API.",
  },
];

const marqueeItems = [
  "Instant transfers", "180+ countries", "60+ currencies",
  "Zero hidden fees", "Bank-grade security", "50ms avg. latency", "Payxara",
];

const testimonials = [
  {
    quote: "We cut our international settlement time from 3 days to under 30 seconds. Payxara completely changed how we operate.",
    name: "Sarah K.",
    role: "CFO, Meridian Group",
    initials: "SK",
  },
  {
    quote: "Finally a payment platform that doesn't treat FX like a profit centre. Mid-market rates, every single time.",
    name: "Marcus T.",
    role: "Head of Finance, Norvik Capital",
    initials: "MT",
  },
  {
    quote: "The API is exceptional. We had our integration running in production the same day we started. Genuinely rare.",
    name: "Priya R.",
    role: "CTO, Slate Commerce",
    initials: "PR",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────── */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28 px-5 bg-bg">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-accent-light text-accent text-[12px] font-semibold tracking-wide uppercase px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Now live in 180+ countries
            </div>
            <h1 className="text-[clamp(40px,6vw,72px)] font-extrabold text-ink leading-[1.05] tracking-tight mb-6">
              Move money globally,<br className="hidden sm:block" /> without the friction.
            </h1>
            <p className="text-[clamp(16px,2vw,20px)] text-muted leading-relaxed mb-10 max-w-xl">
              Payxara is built for businesses that can&apos;t afford to wait. Instant
              transfers, real exchange rates, and zero hidden fees — in 180+
              countries.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="#"
                className="bg-ink text-white text-[15px] font-semibold px-6 py-3.5 rounded-full hover:bg-ink/80 transition-colors"
              >
                Start for free
              </Link>
              <Link
                href="/platform"
                className="border border-border text-ink text-[15px] font-medium px-6 py-3.5 rounded-full hover:bg-bg-alt transition-colors"
              >
                See how it works →
              </Link>
            </div>
          </div>

          {/* Hero stat cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-16 border-t border-border">
            {[
              { value: "$2.4B", label: "Processed monthly" },
              { value: "180+", label: "Countries" },
              { value: "99.99%", label: "Uptime" },
              { value: "50ms", label: "Avg. transaction" },
            ].map((s) => (
              <div key={s.label} className="bg-card rounded-2xl px-5 py-5 border border-border">
                <p className="text-[28px] font-bold text-ink leading-none mb-1">{s.value}</p>
                <p className="text-[13px] text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee ─────────────────────────────────── */}
      <div className="py-4 border-y border-border overflow-hidden">
        <MarqueeRow items={marqueeItems} />
      </div>

      {/* ── Features ────────────────────────────────── */}
      <section id="features" className="py-20 lg:py-28 px-5">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-3">Features</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-ink leading-tight tracking-tight max-w-md">
              Everything your business needs to move money.
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <ScrollReveal key={f.title} delay={i * 0.07}>
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:border-accent/30 hover:shadow-sm transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-[15px] font-semibold text-ink mb-2">{f.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{f.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ────────────────────────────── */}
      <section id="how-it-works" className="py-20 lg:py-28 px-5 bg-bg-alt">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-3">How it works</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-ink leading-tight tracking-tight">
              Up and running in minutes.
            </h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-7">
                  <span className="text-[13px] font-semibold text-muted mb-5 block">{s.n}</span>
                  <h3 className="text-[20px] font-bold text-ink mb-3 leading-tight">{s.title}</h3>
                  <p className="text-[14px] text-muted leading-relaxed">{s.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats dark ──────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 bg-bg-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { n: 2400000000, prefix: "$", suffix: "+", display: "$2.4B+", label: "Processed to date" },
              { n: 180, suffix: "+", display: "180+", label: "Countries supported" },
              { n: 12000, suffix: "+", display: "12K+", label: "Businesses trust us" },
              { n: 50, suffix: "ms", display: "50ms", label: "Average transfer speed" },
            ].map((s) => (
              <ScrollReveal key={s.label}>
                <p className="text-[clamp(32px,4vw,52px)] font-bold text-white leading-none mb-2">{s.display}</p>
                <p className="text-[13px] text-white/50">{s.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature rows ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 bg-bg">
        <div className="max-w-6xl mx-auto space-y-6">
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            <ScrollReveal className="bg-card border border-border rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-6">Real-time FX</p>
                <h3 className="text-[clamp(22px,3vw,32px)] font-bold text-ink leading-tight mb-4">
                  Mid-market rates.<br />Always.
                </h3>
                <p className="text-[14px] text-muted leading-relaxed max-w-sm">
                  No markup. No spread. Payxara uses live mid-market exchange rates on
                  every transaction in every currency — so you keep more of what you earn.
                </p>
              </div>
              <div className="mt-8 space-y-2">
                {[
                  { pair: "USD → GBP", rate: "0.7912", change: "+0.12%" },
                  { pair: "EUR → JPY", rate: "162.44", change: "+0.08%" },
                  { pair: "GBP → AED", rate: "4.6831", change: "-0.03%" },
                ].map((r) => (
                  <div key={r.pair} className="flex justify-between items-center bg-bg-alt rounded-xl px-4 py-3">
                    <span className="text-[13px] font-medium text-ink">{r.pair}</span>
                    <div className="flex items-center gap-3">
                      <span className="text-[13px] font-semibold text-ink">{r.rate}</span>
                      <span className={`text-[11px] font-medium ${r.change.startsWith("+") ? "text-green-600" : "text-red-500"}`}>{r.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="bg-bg-dark rounded-3xl p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-white/40 mb-6">Security</p>
                <h3 className="text-[clamp(22px,3vw,32px)] font-bold text-white leading-tight mb-4">
                  Built like a bank.<br />Moves like software.
                </h3>
                <p className="text-[14px] text-white/55 leading-relaxed max-w-sm">
                  SOC 2 Type II, PCI DSS Level 1, and 256-bit encryption on every
                  transaction. AI fraud detection that learns in real time.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["SOC 2 Type II", "PCI DSS L1", "256-bit AES", "GDPR Ready"].map((badge) => (
                  <div key={badge} className="bg-white/[0.07] border border-white/10 rounded-xl px-4 py-3 text-[12px] font-semibold text-white/70">
                    ✓ {badge}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Row 2 */}
          <div className="bg-accent-light border border-accent/20 rounded-3xl p-8 lg:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <ScrollReveal>
                <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-accent mb-6">Developer-first</p>
                <h3 className="text-[clamp(22px,3vw,36px)] font-bold text-ink leading-tight mb-4">
                  API that actually makes sense.
                </h3>
                <p className="text-[14px] text-muted leading-relaxed mb-6">
                  Clean REST endpoints, real-time webhooks, and SDKs for every major
                  language. Go from sandbox to production in a single afternoon.
                </p>
                <Link href="#" className="inline-flex items-center gap-2 text-[14px] font-semibold text-accent hover:underline underline-offset-4">
                  View API docs →
                </Link>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <div className="bg-bg-dark rounded-2xl p-5 font-mono text-[13px] leading-relaxed overflow-x-auto">
                  <p className="text-white/30 mb-1"># Create a transfer</p>
                  <p><span className="text-[#7dd3fc]">POST</span> <span className="text-white/70">/v1/transfers</span></p>
                  <p className="mt-3 text-white/50">{"{"}</p>
                  <p className="pl-4"><span className="text-[#86efac]">&quot;amount&quot;</span><span className="text-white/50">: </span><span className="text-[#fca5a5]">12400</span><span className="text-white/50">,</span></p>
                  <p className="pl-4"><span className="text-[#86efac]">&quot;currency&quot;</span><span className="text-white/50">: </span><span className="text-[#fde68a]">&quot;USD&quot;</span><span className="text-white/50">,</span></p>
                  <p className="pl-4"><span className="text-[#86efac]">&quot;destination&quot;</span><span className="text-white/50">: </span><span className="text-[#fde68a]">&quot;GB29NWBK...&quot;</span></p>
                  <p className="text-white/50">{"}"}</p>
                  <p className="mt-3 text-green-400">✓ 200 — Transfer initiated (48ms)</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 bg-bg-alt">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-12">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-muted mb-3">Testimonials</p>
            <h2 className="text-[clamp(28px,4vw,44px)] font-bold text-ink leading-tight tracking-tight">
              What our customers say.
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

      {/* ── CTA ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 px-5 bg-bg-dark">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[clamp(32px,5vw,60px)] font-bold text-white leading-tight tracking-tight mb-6">
              Ready to move money<br className="hidden sm:block" /> the right way?
            </h2>
            <p className="text-[16px] text-white/50 mb-10 max-w-md mx-auto leading-relaxed">
              Join 12,000+ businesses already using Payxara. Start free — no credit card required.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="#" className="bg-white text-ink text-[15px] font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 transition-colors">
                Start for free
              </Link>
              <Link href="/platform" className="border border-white/20 text-white text-[15px] font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors">
                Explore platform
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
