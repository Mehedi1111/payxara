import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import DashboardScreen from "@/components/mockups/DashboardScreen";
import PortfolioCard from "@/components/mockups/PortfolioCard";
import ActivityFeed from "@/components/mockups/ActivityFeed";
import ReportCard from "@/components/mockups/ReportCard";

export const metadata: Metadata = {
  title: "Platform — Wealth Intelligence, Engineered for You",
  description:
    "Every tool your advisory practice needs. Portfolio intelligence, automated reporting, client portals, and compliance — under one roof.",
};

const rows = [
  {
    tag: "PORTFOLIO INTELLIGENCE",
    title: "Every position. Every client. In real time.",
    body: "Payxara aggregates positions from any custodian — Pershing, DTC, Euroclear — and presents a live, consolidated view. Drill into any holding, any date, any currency.",
    bullets: [
      "Multi-custodian aggregation",
      "Real-time FX conversion",
      "Historical performance tracking",
      "Benchmark comparison",
    ],
    mockup: "portfolio",
    imgLeft: true,
  },
  {
    tag: "COMPLIANCE & REPORTING",
    title: "MiFID II. FCA. CASS. Handled.",
    body: "Regulatory reports generated automatically, reviewed in one click, and submitted without the spreadsheet chaos. Your compliance team focuses on strategy, not formatting.",
    bullets: [
      "Auto-generation on schedule",
      "One-click regulator submission",
      "Immutable audit trail",
      "Custom report templates",
    ],
    mockup: "report",
    imgLeft: false,
  },
  {
    tag: "CLIENT PORTAL",
    title: "A portal your clients will actually use.",
    body: "White-labelled, branded as yours. Clients see live data, access documents securely, and message their advisor — all in one clean interface.",
    bullets: [
      "White-label branding",
      "Real-time portfolio view",
      "Secure document vault",
      "In-app messaging",
    ],
    mockup: "activity",
    imgLeft: true,
  },
  {
    tag: "INTEGRATIONS & API",
    title: "Connects to everything your team already uses.",
    body: "REST APIs with full documentation. SDKs for Node, Python, and more. Connect your custodian, CRM, accounting platform, and reporting tools in hours, not months.",
    bullets: [
      "200+ out-of-the-box integrations",
      "REST API + webhooks",
      "Custodian direct feeds",
      "No-code connector builder",
    ],
    mockup: "dashboard",
    imgLeft: false,
  },
];

export default function PlatformPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="bg-dark pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green" />
              <span className="text-[12px] font-medium text-white/70">THE PLATFORM</span>
            </div>
            <h1
              className="font-black text-white leading-[1.02] tracking-[-0.03em]"
              style={{ fontSize: "clamp(44px,6vw,78px)" }}
            >
              Wealth intelligence.
              <br />
              Engineered for you.
            </h1>
            <p className="text-[18px] text-white/60 mt-6 max-w-md leading-[1.7]">
              Every tool your advisory practice needs. Portfolio intelligence, automated reporting,
              client portals, and compliance — under one roof.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/acquire" className="green-btn px-7 py-4 rounded-xl text-[15px]">
                Get Started
              </Link>
              <Link href="mailto:hello@madebyevoke.com" className="ghost-btn px-7 py-4 rounded-xl text-[15px]">
                Book Demo
              </Link>
            </div>
          </div>

          {/* Right: dashboard */}
          <ScrollReveal x={50}>
            <DashboardScreen />
          </ScrollReveal>
        </div>
      </section>

      {/* ── FEATURE ROWS ─────────────────────── */}
      {rows.map((row, i) => (
        <section
          key={row.tag}
          className={`py-20 px-6 border-b border-line ${i % 2 === 0 ? "bg-white" : "bg-canvas"}`}
        >
          <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center ${!row.imgLeft ? "md:flex-row-reverse" : ""}`}>
            {/* Mockup side */}
            <ScrollReveal className={row.imgLeft ? "" : "md:order-2"}>
              <div className="bg-canvas-2 rounded-2xl p-8 flex items-center justify-center min-h-[280px]">
                {row.mockup === "portfolio" && (
                  <div className="flex flex-col gap-4 items-center">
                    <PortfolioCard />
                  </div>
                )}
                {row.mockup === "activity" && <ActivityFeed />}
                {row.mockup === "report" && <ReportCard />}
                {row.mockup === "dashboard" && (
                  <div className="w-full max-w-sm">
                    <DashboardScreen />
                  </div>
                )}
              </div>
            </ScrollReveal>

            {/* Text side */}
            <ScrollReveal delay={0.1} className={row.imgLeft ? "" : "md:order-1"}>
              <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-green mb-2">
                {row.tag}
              </p>
              <h2
                className="font-extrabold text-ink tracking-[-0.02em] mt-2"
                style={{ fontSize: "clamp(22px,2.5vw,32px)" }}
              >
                {row.title}
              </h2>
              <p className="text-[15px] text-ink-muted mt-4 leading-[1.7]">{row.body}</p>
              <ul className="mt-6 space-y-3">
                {row.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-[14px] text-ink-muted">
                    <span className="w-4 h-4 rounded-full bg-green/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#33E529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* ── API DEVELOPER SECTION ─────────────── */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal>
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-green/70 mb-4">
              FOR DEVELOPERS
            </p>
            <h2
              className="font-extrabold text-white tracking-[-0.025em]"
              style={{ fontSize: "clamp(26px,3.5vw,44px)" }}
            >
              Integrate payments in an afternoon.
            </h2>
            <p className="text-[15px] text-white/60 mt-5 leading-[1.7] max-w-md">
              Clean REST APIs, comprehensive webhooks, and SDKs for Node, Python, Ruby, Go,
              Java, PHP, .NET, and Elixir. Sandbox environment included — no approval required.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link href="#" className="dark-btn px-5 py-2.5 rounded-full text-[14px]">
                Read the docs
              </Link>
              <Link href="#" className="ghost-btn px-5 py-2.5 rounded-full text-[14px]">
                View on GitHub →
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-3">
              {[
                { method: "POST", path: "/v1/portfolios/sync", ms: "48ms", color: "text-blue-400" },
                { method: "GET", path: "/v1/clients/:id/positions", ms: "12ms", color: "text-green" },
                { method: "GET", path: "/v1/fx/rates?from=GBP&to=USD", ms: "9ms", color: "text-green" },
                { method: "POST", path: "/v1/reports/generate", ms: "220ms", color: "text-blue-400" },
                { method: "DELETE", path: "/v1/webhooks/:id", ms: "15ms", color: "text-red-400" },
              ].map((r) => (
                <div
                  key={r.path}
                  className="flex items-center justify-between bg-dark-2 rounded-xl px-4 py-3"
                >
                  <div className="flex items-center gap-3 font-mono text-[12px]">
                    <span className={`${r.color} font-bold w-14 flex-shrink-0`}>{r.method}</span>
                    <span className="text-white/60 truncate">{r.path}</span>
                  </div>
                  <span className="text-white/30 text-[11px] font-mono flex-shrink-0 ml-2">{r.ms}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
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
              Start building today. No credit card needed.
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/acquire" className="green-btn px-8 py-4 rounded-xl text-[16px]">
                Get Started Free
              </Link>
              <Link href="/acquire" className="ghost-btn-dark px-8 py-4 rounded-xl text-[16px]">
                View Pricing
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
