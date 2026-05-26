import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import MarqueeRow from "@/components/MarqueeRow";
import PortfolioCard from "@/components/mockups/PortfolioCard";
import ReportCard from "@/components/mockups/ReportCard";
import ActivityFeed from "@/components/mockups/ActivityFeed";
import DashboardScreen from "@/components/mockups/DashboardScreen";

export const metadata: Metadata = {
  title: "Payxara — Private Wealth Intelligence Platform",
  description:
    "Collect portfolio intelligence, automate compliance reporting, and deliver institutional-grade wealth management. Without the overhead.",
};

const trustLogos = [
  "JPMorgan", "UBS", "Schroders", "Bloomberg", "Refinitiv",
  "FCA", "Deloitte", "KPMG",
];

const features = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    tag: "MULTI-CURRENCY",
    title: "International wealth management simplified.",
    body: "34 currencies. FX at institutional rates. Consolidated reporting in base currency. One platform.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    tag: "AI INSIGHTS",
    title: "Flag portfolio risks before clients ask about them.",
    body: "Concentration risk, correlation spikes, benchmark drift — Payxara monitors continuously and alerts advisors before issues surface.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tag: "CLIENT PORTAL",
    title: "A client portal they'll actually log into.",
    body: "White-labelled portals with real-time data, secure document vaults, and in-app messaging. Branded as yours.",
  },
];

const steps = [
  {
    n: "01",
    title: "Sign up in minutes",
    body: "Create your account. No sales call required. Full platform access from day one.",
  },
  {
    n: "02",
    title: "Connect your custodians",
    body: "Link your custodian feeds automatically. Payxara ingests and reconciles your positions in real time.",
  },
  {
    n: "03",
    title: "Set up client reporting",
    body: "Configure your report templates. Payxara handles generation, formatting, and delivery.",
  },
  {
    n: "04",
    title: "We're here every step",
    body: "Dedicated onboarding specialist. UK-based support team. SLA-backed from day one.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────── */}
      <section className="bg-dark min-h-[88vh] overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-[52fr_48fr] gap-12 items-center">
          {/* Left */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse-green" />
              <span className="text-[12px] font-medium text-white/70">Payxara · Private Wealth Platform</span>
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(48px,6.5vw,84px)" }}
            >
              <span className="block">THE SMARTER</span>
              <span className="block">WAY TO</span>
              <span className="block">MANAGE WEALTH.</span>
            </h1>

            {/* Sub */}
            <p className="mt-8 text-[18px] text-white/60 max-w-[440px] leading-[1.7]">
              Collect portfolio intelligence, automate compliance reporting, and deliver
              institutional-grade wealth management. Without the overhead.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/platform" className="green-btn px-7 py-4 rounded-xl text-[15px]">
                Get Started
              </Link>
              <Link href="mailto:hello@madebyevoke.com" className="ghost-btn px-7 py-4 rounded-xl text-[15px]">
                Contact Sales
              </Link>
            </div>
          </div>

          {/* Right */}
          <div className="relative hidden md:block">
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=440&q=80"
                alt="Payxara dashboard"
                width={600}
                height={440}
                className="rounded-2xl shadow-mockup"
                priority
              />

              {/* Portfolio card floating */}
              <div className="absolute bottom-8 left-[-30px] animate-float">
                <PortfolioCard />
              </div>

              {/* Person photo */}
              <Image
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
                alt="Wealth advisor"
                width={72}
                height={72}
                className="absolute top-6 right-[-16px] rounded-full border-[3px] border-white shadow-card-lg object-cover"
              />

              {/* Stat bubble */}
              <div className="absolute bottom-[-14px] right-6 bg-white rounded-2xl shadow-card-lg px-4 py-3 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green animate-pulse-green flex-shrink-0" />
                <div>
                  <span className="text-[16px] font-extrabold text-ink block leading-tight">£4.2B</span>
                  <span className="text-[12px] text-ink-faint leading-tight">assets under management</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────── */}
      <section className="bg-white py-14 px-6 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p
              className="font-bold text-ink text-center"
              style={{ fontSize: "clamp(20px,2vw,28px)" }}
            >
              Used by 500+ wealth professionals.
            </p>
            <p className="text-[15px] text-ink-muted mt-2 text-center">
              Small advisory firms to institutional capital management. Globally.
            </p>
          </ScrollReveal>
          <div className="mt-10">
            <MarqueeRow items={trustLogos} />
          </div>
        </div>
      </section>

      {/* ── FEATURE INTRO ──────────────────────── */}
      <section className="bg-canvas py-24 px-6 border-t border-line">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <ScrollReveal>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em]"
              style={{ fontSize: "clamp(32px,4vw,52px)" }}
            >
              Wealth management.
              <br />
              But without the hassle.
            </h2>
          </ScrollReveal>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left: stacked mockups */}
          <ScrollReveal>
            <div className="relative h-80">
              <div className="absolute top-0 left-4" style={{ transform: "rotate(-2deg)" }}>
                <ActivityFeed />
              </div>
              <div className="absolute top-12 left-32" style={{ transform: "rotate(1.5deg)" }}>
                <ReportCard />
              </div>
            </div>
          </ScrollReveal>

          {/* Right: 2×2 benefit grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-8">
            {[
              {
                title: "End late reporting",
                body: "Clients submit data on time. Automated reminders handle the follow-up so you never have to chase.",
              },
              {
                title: "No more manual reconciliation",
                body: "Payxara connects to custodian feeds and reconciles positions automatically. Daily. Zero human error.",
              },
              {
                title: "Compliance on autopilot",
                body: "MiFID II, CASS, and FCA reports generated and filed automatically. Three clicks from draft to submission.",
              },
              {
                title: "Zero hidden fees",
                body: "Flat-rate pricing. No AUM percentage. No custody charges. No invoice surprises at quarter end.",
              },
            ].map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1}>
                <div className="border-b border-line pb-6">
                  <p className="text-[16px] font-bold text-ink">{b.title}</p>
                  <p className="text-[14px] text-ink-muted mt-2 leading-[1.7]">{b.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN FEATURES ──────────────────────── */}
      <section className="bg-white py-24 px-6 border-t border-line">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-ink-faint">
              EVERYTHING YOUR CLIENTS NEED
            </p>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em] mt-2"
              style={{ fontSize: "clamp(32px,4vw,52px)" }}
            >
              Built for wealth management. Front to back.
            </h2>
          </ScrollReveal>

          {/* Two large cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {/* Card 1 */}
            <ScrollReveal>
              <div className="bg-canvas rounded-2xl overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=580&h=340&q=80"
                    alt="Portfolio intelligence"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F5] via-transparent" />
                  <div className="absolute bottom-[-16px] left-6 scale-90 origin-bottom-left">
                    <PortfolioCard />
                  </div>
                </div>
                <div className="p-8 pt-12">
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-green mb-3">
                    PORTFOLIO INTELLIGENCE
                  </p>
                  <h3 className="text-[22px] font-extrabold text-ink tracking-[-0.02em]">
                    Real-time portfolio intelligence for every client.
                  </h3>
                  <p className="text-[15px] text-ink-muted mt-3 leading-[1.7]">
                    Live view of every position, allocation, and performance metric — aggregated
                    from any custodian, updated in real time.
                  </p>
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-5 hover:text-green transition-colors"
                  >
                    See how portfolio intelligence works →
                  </Link>
                </div>
              </div>
            </ScrollReveal>

            {/* Card 2 */}
            <ScrollReveal delay={0.08}>
              <div className="bg-canvas rounded-2xl overflow-hidden">
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=580&h=340&q=80"
                    alt="Automated reporting"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#F7F7F5] via-transparent" />
                  <div className="absolute bottom-[-16px] left-6 scale-90 origin-bottom-left">
                    <ReportCard />
                  </div>
                </div>
                <div className="p-8 pt-12">
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-green mb-3">
                    AUTOMATED REPORTING
                  </p>
                  <h3 className="text-[22px] font-extrabold text-ink tracking-[-0.02em]">
                    Automated compliance reports. Zero last-minute panic.
                  </h3>
                  <p className="text-[15px] text-ink-muted mt-3 leading-[1.7]">
                    FCA, MiFID II, and CASS reports generated automatically. Review, approve, send.
                    Your compliance team reclaims their week.
                  </p>
                  <Link
                    href="/platform"
                    className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-5 hover:text-green transition-colors"
                  >
                    See how reporting works →
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Three smaller cards */}
          <div className="grid md:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <ScrollReveal key={f.tag} delay={i * 0.08}>
                <div className="bg-white border border-line rounded-2xl p-8 hover:border-ink/20 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 h-full">
                  <div className="w-11 h-11 bg-green/15 rounded-xl flex items-center justify-center">
                    {f.icon}
                  </div>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint mt-4 mb-2">
                    {f.tag}
                  </p>
                  <h3 className="text-[16px] font-bold text-ink">{f.title}</h3>
                  <p className="text-[14px] text-ink-muted mt-2 leading-[1.65]">{f.body}</p>
                  <button className="text-[13px] font-semibold text-ink mt-5 hover:text-green transition-colors block">
                    Learn more →
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── DEMO CTA BANNER ────────────────────── */}
      <div className="mx-4 lg:mx-12 my-6">
        <div className="bg-dark rounded-3xl overflow-hidden relative min-h-[280px] flex">
          {/* Left */}
          <div className="px-12 py-14 max-w-[460px] relative z-10">
            <span className="bg-green inline-block px-3 py-1 rounded-full text-[11px] font-bold text-ink tracking-wide uppercase mb-4">
              LIVE DEMO
            </span>
            <h2
              className="font-extrabold text-white tracking-[-0.025em]"
              style={{ fontSize: "clamp(24px,3vw,38px)" }}
            >
              Try the Payxara Dashboard.
            </h2>
            <p className="text-[15px] text-white/60 mt-4 leading-[1.7] max-w-sm">
              See real-time portfolio views, compliance automation, and client reporting —
              live, no setup required.
            </p>
            <Link href="/platform" className="green-btn px-7 py-3.5 rounded-xl text-[15px] mt-8 inline-block">
              Explore Demo →
            </Link>
          </div>

          {/* Right: dashboard mockup */}
          <div className="absolute right-0 top-0 bottom-0 w-[46%] overflow-hidden hidden md:flex items-center justify-end pr-6">
            <div style={{ transform: "rotate(-2deg)" }}>
              <DashboardScreen />
            </div>
          </div>
        </div>
      </div>

      {/* ── INTEGRATIONS ───────────────────────── */}
      <section className="bg-white py-24 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[45fr_55fr] gap-16 items-center">
          {/* Left: orbit diagram */}
          <ScrollReveal>
            <div className="relative w-[280px] h-[280px] mx-auto">
              {/* Outer dashed ring */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 280 280" fill="none">
                <circle cx="140" cy="140" r="120" stroke="#E2E2DD" strokeWidth="1" strokeDasharray="4 6" />
                <line x1="140" y1="140" x2="140" y2="28" stroke="#E2E2DD" strokeWidth="1" />
                <line x1="140" y1="140" x2="37" y2="196" stroke="#E2E2DD" strokeWidth="1" />
                <line x1="140" y1="140" x2="243" y2="196" stroke="#E2E2DD" strokeWidth="1" />
              </svg>

              {/* Center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-canvas border-2 border-line rounded-full flex flex-col items-center justify-center shadow-card z-10">
                <span className="w-2.5 h-2.5 rounded-full bg-green" />
                <span className="text-[12px] font-extrabold text-ink mt-1">Payxara</span>
              </div>

              {/* Partner circles */}
              {[
                { label: "Bloomberg", style: { top: "10%", left: "50%", transform: "translate(-50%, 0)" } },
                { label: "Xero", style: { bottom: "10%", left: "15%" } },
                { label: "Salesforce", style: { bottom: "10%", right: "15%" } },
              ].map((p) => (
                <div
                  key={p.label}
                  className="absolute w-16 h-16 bg-white border border-line rounded-full shadow-card flex items-center justify-center z-10"
                  style={p.style}
                >
                  <span className="text-[10px] font-bold text-ink-faint text-center leading-tight px-1">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right */}
          <ScrollReveal delay={0.1}>
            <h2
              className="font-extrabold text-ink tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px,3vw,40px)" }}
            >
              Great on its own.
              <br />
              Or connect to your entire stack.
            </h2>
            <p className="text-[15px] text-ink-muted mt-5 leading-[1.7] max-w-md">
              Payxara connects to your custodian, CRM, accounting platform, and reporting tools.
              200+ integrations available out of the box.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-6 hover:text-green transition-colors"
            >
              See all 200+ integrations →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── CUSTOMER STORY ─────────────────────── */}
      <section className="border-t border-line">
        <div className="grid md:grid-cols-2 min-h-[480px]">
          {/* Left: image */}
          <ScrollReveal x={-40}>
            <div className="relative overflow-hidden h-full min-h-[320px]">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=700&h=580&q=80"
                alt="Hartley Capital"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-ink/40" />
              <div className="absolute bottom-10 left-10 z-10">
                <p
                  className="font-black text-white leading-[0.95] tracking-[-0.02em]"
                  style={{ fontSize: "52px" }}
                >
                  HARTLEY
                  <br />
                  CAPITAL
                </p>
                <p className="text-[14px] font-medium text-white/70 mt-3">
                  Private Wealth Manager · London
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: quote */}
          <ScrollReveal x={40}>
            <div className="bg-canvas px-10 lg:px-16 py-16 flex flex-col justify-center h-full">
              <p className="text-[11px] font-semibold text-green tracking-[0.15em] uppercase mb-6">
                CUSTOMER STORY
              </p>
              <blockquote
                className="font-bold text-ink tracking-[-0.02em] leading-[1.3] max-w-lg"
                style={{ fontSize: "clamp(22px,2.5vw,32px)" }}
              >
                &ldquo;We&apos;ve reduced compliance admin by 70%. Payxara is genuinely a game-changer for our practice.&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mt-8">
                <Image
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&h=400&q=80"
                  alt="Sarah Hartley"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-[14px] font-semibold text-ink">Sarah Hartley</p>
                  <p className="text-[13px] text-ink-muted">Founder, Hartley Capital</p>
                </div>
              </div>

              <Link
                href="/clients"
                className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-8 hover:text-green transition-colors"
              >
                See how Hartley Capital uses Payxara →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── GETTING STARTED ────────────────────── */}
      <section className="bg-white py-24 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto grid md:grid-cols-[45fr_55fr] gap-16 items-center">
          {/* Left: steps */}
          <div>
            <ScrollReveal>
              <h2
                className="font-extrabold text-ink tracking-[-0.02em] mb-10"
                style={{ fontSize: "clamp(28px,3vw,40px)" }}
              >
                Start managing wealth smarter.
              </h2>
            </ScrollReveal>
            <div className="flex flex-col">
              {steps.map((s, i) => (
                <ScrollReveal key={s.n} delay={i * 0.15}>
                  <div className={`flex items-start gap-5 py-6 ${i < steps.length - 1 ? "border-b border-line" : ""}`}>
                    <span className="text-[28px] font-extrabold text-ink/15 w-10 flex-shrink-0 leading-none mt-0.5">
                      {s.n}
                    </span>
                    <div>
                      <p className="text-[16px] font-bold text-ink">{s.title}</p>
                      <p className="text-[14px] text-ink-muted mt-1 leading-[1.6]">{s.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: mockup image */}
          <ScrollReveal x={40}>
            <Image
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=620&h=460&q=80"
              alt="Payxara platform"
              width={620}
              height={460}
              className="rounded-2xl shadow-card-lg w-full"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* ── BOTTOM CTA ─────────────────────────── */}
      <section className="bg-canvas py-20 px-6 border-t border-line text-center">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em]"
              style={{ fontSize: "clamp(32px,4vw,54px)" }}
            >
              Ready for wealth management that actually works?
            </h2>
            <p className="text-[17px] text-ink-muted mt-5 max-w-xl mx-auto">
              Join 500+ wealth professionals who&apos;ve moved from spreadsheets and legacy platforms to Payxara.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/platform" className="green-btn px-8 py-4 rounded-xl text-[16px]">
                Get Started
              </Link>
              <Link href="mailto:hello@madebyevoke.com" className="ghost-btn-dark px-8 py-4 rounded-xl text-[16px]">
                Contact Sales
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
