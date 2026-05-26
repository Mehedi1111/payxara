import type { Metadata } from "next";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getAllSlugs, getAllPosts } from "@/lib/blog";
import ScrollReveal from "@/components/ScrollReveal";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

const categoryColors: Record<string, string> = {
  "Payments Technology": "bg-green/10 text-green",
  "Banking & Finance": "bg-blue-50 text-blue-600",
  "International Payments": "bg-orange-50 text-orange-600",
  "Digital Payments": "bg-purple-50 text-purple-600",
  "Business Finance": "bg-canvas-2 text-ink-muted",
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="bg-white pt-36 pb-12 px-6 border-b border-line">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Link
              href="/blog"
              className="text-[13px] text-ink-muted hover:text-ink transition-colors font-medium"
            >
              ← Blog
            </Link>
            <span className="text-ink-faint">/</span>
            <span
              className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                categoryColors[post.category] || "bg-canvas-2 text-ink-muted"
              }`}
            >
              {post.category}
            </span>
          </div>

          <h1
            className="font-black text-ink tracking-[-0.03em] leading-[1.05]"
            style={{ fontSize: "clamp(32px,4vw,54px)" }}
          >
            {post.title}
          </h1>

          <p className="text-[17px] text-ink-muted mt-5 leading-relaxed">{post.description}</p>

          <div className="flex items-center gap-4 mt-6 pt-6 border-t border-line">
            <div className="w-9 h-9 rounded-full bg-green/10 flex items-center justify-center flex-shrink-0">
              <span className="text-[13px] font-bold text-green">P</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold text-ink">Payxara Editorial</p>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="text-[12px] text-ink-faint">
                  {new Date(post.date).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span className="text-ink-faint">·</span>
                <span className="text-[12px] text-ink-faint">{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <article className="prose-payxara">
            <MDXRemote source={post.content} />
          </article>

          {/* Keywords */}
          <div className="mt-12 pt-8 border-t border-line">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-faint mb-3">
              Topics
            </p>
            <div className="flex flex-wrap gap-2">
              {post.keywords.map((kw) => (
                <span
                  key={kw}
                  className="bg-canvas text-[12px] text-ink-muted px-3 py-1.5 rounded-full border border-line"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {allPosts.length > 0 && (
        <section className="bg-canvas py-16 px-6 border-t border-line">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <h2 className="text-[22px] font-extrabold text-ink mb-8 tracking-tight">
                More from the blog
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-5">
              {allPosts.map((p, i) => (
                <ScrollReveal key={p.slug} delay={i * 0.07}>
                  <Link
                    href={`/blog/${p.slug}`}
                    className="group bg-white border border-line rounded-2xl p-6 flex flex-col hover:border-ink/20 hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 h-full"
                  >
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full w-fit mb-4 ${
                        categoryColors[p.category] || "bg-canvas-2 text-ink-muted"
                      }`}
                    >
                      {p.category}
                    </span>
                    <h3 className="text-[16px] font-bold text-ink leading-snug group-hover:text-green transition-colors flex-1">
                      {p.title}
                    </h3>
                    <span className="text-[13px] font-semibold text-ink mt-4 group-hover:text-green transition-colors">
                      Read →
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-dark py-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-[26px] font-extrabold text-white tracking-tight">
              Explore the Payxara platform.
            </h2>
            <p className="text-[15px] text-white/60 mt-3 max-w-md mx-auto">
              The same intelligence behind these guides is built into every product we make.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-7">
              <Link href="/platform" className="green-btn px-6 py-3.5 rounded-xl text-[15px]">
                See the Platform
              </Link>
              <Link href="/blog" className="ghost-btn px-6 py-3.5 rounded-xl text-[15px]">
                Back to Blog
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
