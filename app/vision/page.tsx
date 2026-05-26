import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Vision — Wealth Management Software Shouldn't Feel Like 2005",
  description:
    "The wealth management industry is worth trillions. Its software stack looks like it was built when BlackBerry was still relevant. Payxara exists to fix that.",
};

export default function VisionPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="bg-white pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-green mb-4">
              OUR VISION
            </p>
            <h1
              className="font-black text-ink tracking-[-0.03em] leading-[1.02]"
              style={{ fontSize: "clamp(44px,6vw,78px)" }}
            >
              Wealth management software shouldn&apos;t feel like 2005.
            </h1>
            <p className="text-[19px] text-ink-muted mt-8 max-w-2xl leading-[1.7]">
              The wealth management industry is worth trillions. Its software stack looks like
              it was built when BlackBerry was still relevant. Payxara exists to fix that.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 1 ────────────────────────── */}
      <section className="py-24 px-6 border-t border-line">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <ScrollReveal>
            <h2
              className="font-extrabold text-ink leading-tight tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px,3.5vw,40px)" }}
            >
              Legacy platforms charge AUM fees for software built in the 1990s.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="space-y-4 text-[16px] text-ink-muted leading-[1.8]">
              <p>
                For decades, wealth management firms have paid 10–25bps per year in AUM fees for
                platforms that haven&apos;t meaningfully evolved since the early 2000s. Clunky
                interfaces. Manual reconciliation. Reports that take days to produce.
              </p>
              <p>
                The clients of these firms are institutions, family offices, and high-net-worth
                individuals who expect the same digital quality they see in consumer fintech.
                Instead they get portals built on Internet Explorer-era technology.
              </p>
              <p>
                There&apos;s no technical reason for any of this. The infrastructure to fix it
                exists. What hasn&apos;t existed — until now — is a product built by people who
                actually understand what a modern advisory practice looks like.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 2 ────────────────────────── */}
      <section className="py-24 px-6 border-t border-line bg-canvas">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <ScrollReveal>
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&h=500&q=80"
              alt="Modern financial infrastructure"
              width={580}
              height={380}
              className="rounded-2xl w-full object-cover"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2
              className="font-extrabold text-ink leading-tight tracking-[-0.02em]"
              style={{ fontSize: "clamp(26px,3.5vw,40px)" }}
            >
              The advisory firm of 2025 deserves tools built for 2025.
            </h2>
            <p className="text-[16px] text-ink-muted mt-6 leading-[1.8]">
              Payxara is designed from the ground up for firms that move quickly, serve demanding
              clients, and need their technology to be an accelerator — not an anchor. We&apos;ve
              built the platform we wished existed when we were advising clients ourselves.
            </p>
            <Link
              href="/platform"
              className="inline-flex items-center gap-1 text-[15px] font-semibold text-ink mt-6 hover:text-green transition-colors"
            >
              See the platform →
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── VALUES ───────────────────────────── */}
      <section className="py-24 px-6 border-t border-line bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal className="mb-14">
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-ink-faint mb-3">
              WHAT WE BELIEVE
            </p>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em]"
              style={{ fontSize: "clamp(26px,4vw,44px)" }}
            >
              The principles behind everything we build.
            </h2>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                n: "01",
                title: "Transparency first",
                body: "Hidden fees are a feature of the old system, not ours. Every rate, every charge, every line item — shown upfront, always.",
              },
              {
                n: "02",
                title: "Speed as a right",
                body: "Waiting three days to move money in 2025 is not a technical limitation. It&apos;s a choice. We chose differently.",
              },
              {
                n: "03",
                title: "Built for builders",
                body: "The firms using Payxara are moving fast. Our infrastructure was built to keep up — not hold them back.",
              },
              {
                n: "04",
                title: "Security without friction",
                body: "Compliance and speed are not opposites. We built both, together, without making you choose.",
              },
            ].map((v, i) => (
              <ScrollReveal key={v.n} delay={i * 0.08}>
                <div className="bg-canvas border border-line rounded-2xl p-8">
                  <span className="text-[12px] font-semibold text-ink-faint">{v.n}</span>
                  <h3 className="text-[20px] font-bold text-ink mt-3 mb-2">{v.title}</h3>
                  <p className="text-[14px] text-ink-muted leading-[1.7]" dangerouslySetInnerHTML={{ __html: v.body }} />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING QUOTE ────────────────────── */}
      <section className="bg-dark py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal>
            <blockquote
              className="font-extrabold text-white leading-tight tracking-[-0.025em]"
              style={{ fontSize: "clamp(28px,4vw,52px)" }}
            >
              &ldquo;Payxara is the brand name for a generation of wealth technology that finally gets it right.&rdquo;
            </blockquote>
            <div className="w-16 h-1 bg-green mx-auto my-8" />
            <p className="text-[18px] text-white/60 max-w-xl mx-auto leading-[1.7]">
              We&apos;re not fixing wealth management software at the margins. We&apos;re replacing it — with
              something built for the decade we&apos;re actually in.
            </p>
            <Link
              href="/platform"
              className="green-btn px-7 py-3.5 rounded-full text-[15px] mt-10 inline-block"
            >
              Start building with Payxara
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
