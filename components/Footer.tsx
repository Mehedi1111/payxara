import Link from "next/link";
import Image from "next/image";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Features", href: "/platform" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/vision" },
      { label: "Clients", href: "/clients" },
      { label: "Vision", href: "/vision" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Documentation", href: "#" },
      { label: "API", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
  {
    heading: "Acquire",
    links: [
      { label: "Domain Listing ↗", href: "https://madebyevoke.com/domains/payxara", external: true },
      { label: "Contact Evoke", href: "mailto:hello@madebyevoke.com", external: true },
      { label: "Request Info", href: "/acquire" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-white/10">
          {/* Brand col */}
          <div>
            <Image
              src="/payxara%20logo.png"
              alt="Payxara"
              width={120}
              height={32}
              className="object-contain h-8 w-auto brightness-0 invert"
            />
            <p className="text-[14px] text-white/50 mt-3 max-w-xs leading-relaxed">
              Private wealth intelligence platform. Built for advisors who expect more.
            </p>
            <a
              href="mailto:hello@madebyevoke.com"
              className="text-[14px] font-medium text-green hover:text-green-dark transition-colors mt-6 block"
            >
              hello@madebyevoke.com
            </a>
          </div>

          {/* Link cols */}
          {cols.map((col) => (
            <div key={col.heading}>
              <p className="text-[12px] font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
                {col.heading}
              </p>
              <ul>
                {col.links.map((l) => (
                  <li key={l.label} className="mb-2.5">
                    {"external" in l && l.external ? (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[14px] text-white/60 hover:text-white transition-colors block"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        href={l.href}
                        className="text-[14px] text-white/60 hover:text-white transition-colors block"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-8">
          <p className="text-[13px] text-white/30">
            © 2025 Payxara. Represented by Made by Evoke.
          </p>
          <a
            href="https://madebyevoke.com/domains/payxara"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold text-green hover:text-green-dark transition-colors"
          >
            Domain available for acquisition
          </a>
        </div>
      </div>
    </footer>
  );
}
