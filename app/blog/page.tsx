import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Payxara Blog — Fintech Insights & Payment Guides",
  description:
    "Expert guides on payments, open banking, digital wallets, and wealth management. Practical answers to the questions everyone is asking.",
};

const categoryColors: Record<string, string> = {
  "Payments Technology": "bg-green/10 text-green",
  "Banking & Finance": "bg-blue-50 text-blue-600",
  "International Payments": "bg-orange-50 text-orange-600",
  "Digital Payments": "bg-purple-50 text-purple-600",
  "Business Finance": "bg-canvas-2 text-ink-muted",
};

export default function BlogPage() {
  const posts = getAllPosts();
  const [featured, ...rest] = posts;

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-16 px-6 border-b border-line">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-green mb-4">
              PAYXARA BLOG
            </p>
            <h1
              className="font-black text-ink tracking-[-0.03em] max-w-3xl"
              style={{ fontSize: "clamp(40px,5vw,68px)" }}
            >
              Insights on payments, fintech, and modern finance.
            </h1>
            <p className="text-[18px] text-ink-muted mt-5 max-w-xl leading-relaxed">
              Practical guides written for people who want straight answers — no jargon, no filler.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured post */}
      {featured && (
        <section className="bg-canvas py-14 px-6 border-b border-line">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid md:grid-cols-[1fr_auto] gap-8 bg-white rounded-3xl border border-line p-8 lg:p-10 hover:border-ink/20 hover:shadow-card-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      className={`text-[11px] font-semibold px-3 py-1 rounded-full ${
                        categoryColors[featured.category] || "bg-canvas-2 text-ink-muted"
                      }`}
                    >
                      {featured.category}
                    </span>
                    <span className="text-[12px] text-ink-faint">{featured.readTime}</span>
                    <span className="text-[12px] text-ink-faint">·</span>
                    <span className="text-[12px] text-ink-faint">
                      {new Date(featured.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h2
                    className="font-extrabold text-ink tracking-[-0.02em] group-hover:text-green transition-colors leading-tight"
                    style={{ fontSize: "clamp(22px,2.5vw,34px)" }}
                  >
                    {featured.title}
                  </h2>
                  <p className="text-[16px] text-ink-muted mt-4 leading-relaxed max-w-2xl">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-[14px] font-semibold text-ink mt-6 group-hover:text-green transition-colors">
                    Read article →
                  </span>
                </div>
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-48 h-48 bg-green/10 rounded-2xl flex items-center justify-center">
                    <svg width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Post grid */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.07}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col h-full bg-white border border-line rounded-2xl p-7 hover:border-ink/20 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-5">
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] || "bg-canvas-2 text-ink-muted"
                      }`}
                    >
                      {post.category}
                    </span>
                    <span className="text-[12px] text-ink-faint">{post.readTime}</span>
                  </div>

                  <h2 className="text-[18px] font-bold text-ink leading-snug tracking-tight group-hover:text-green transition-colors flex-1">
                    {post.title}
                  </h2>

                  <p className="text-[14px] text-ink-muted mt-3 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-line">
                    <span className="text-[12px] text-ink-faint">
                      {new Date(post.date).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[13px] font-semibold text-ink group-hover:text-green transition-colors">
                      Read →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-canvas py-16 px-6 border-t border-line text-center">
        <div className="max-w-xl mx-auto">
          <ScrollReveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-green mb-3">
              WANT MORE LIKE THIS?
            </p>
            <h2 className="text-[28px] font-extrabold text-ink tracking-tight">
              Explore the Payxara platform.
            </h2>
            <p className="text-[15px] text-ink-muted mt-3">
              The same intelligence that powers these guides is built into every feature.
            </p>
            <Link
              href="/platform"
              className="green-btn px-7 py-3.5 rounded-xl text-[15px] mt-6 inline-block"
            >
              See the Platform
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
