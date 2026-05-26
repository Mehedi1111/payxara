import Link from "next/link";

const cols = [
  {
    heading: "Product",
    links: [
      { label: "Platform", href: "/platform" },
      { label: "Pricing", href: "/pricing" },
      { label: "Security", href: "#" },
      { label: "API Docs", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Vision", href: "/vision" },
      { label: "Clients", href: "/clients" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bg-dark text-white">
      <div className="max-w-6xl mx-auto px-5 pt-16 pb-10">
        {/* Top */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 pb-12 border-b border-white/10">
          <div className="max-w-xs">
            <p className="text-[18px] font-bold text-white mb-3">Payxara</p>
            <p className="text-[14px] text-white/50 leading-relaxed">
              Global payments infrastructure for businesses that demand speed,
              security, and zero compromise.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-10">
            {cols.map((col) => (
              <div key={col.heading}>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-white/40 mb-4">
                  {col.heading}
                </p>
                <ul className="space-y-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="text-[13px] text-white/55 hover:text-white transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Domain acquisition notice */}
        <div className="my-8 px-5 py-4 rounded-2xl border border-white/10 bg-white/[0.03]">
          <p className="text-[12px] text-white/40 leading-relaxed">
            <span className="text-white/60 font-medium">Domain available for acquisition.</span>{" "}
            The Payxara brand and payxara.com domain are available to one qualified buyer via{" "}
            <a
              href="https://madebyevoke.com/domains/payxara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/60 underline underline-offset-2 hover:text-white transition-colors"
            >
              madebyevoke.com
            </a>
            . Enquiries:{" "}
            <a
              href="mailto:hello@madebyevoke.com"
              className="text-white/60 underline underline-offset-2 hover:text-white transition-colors"
            >
              hello@madebyevoke.com
            </a>
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-3">
          <p className="text-[12px] text-white/30">© 2025 Payxara. All rights reserved.</p>
          <p className="text-[12px] text-white/30">Built for the future of finance.</p>
        </div>
      </div>
    </footer>
  );
}
