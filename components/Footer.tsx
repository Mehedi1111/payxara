import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-obsidian text-ivory grain relative">
      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-12 mb-12">
          <p className="font-serif font-light italic text-[clamp(28px,5vw,42px)] text-ivory/90 leading-none">
            Payxara
          </p>
          <p className="font-sans font-light text-[15px] text-ivory/50 tracking-wide">
            Finance, refined.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 mb-16">
          <div>
            <p className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Acquire
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://madebyevoke.com/domains/payxara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[13px] text-ivory/60 lime-hover hover:text-ivory transition-colors"
                >
                  Domain Listing ↗
                </a>
              </li>
              <li>
                <Link
                  href="/acquire"
                  className="font-sans text-[13px] text-ivory/60 lime-hover hover:text-ivory transition-colors"
                >
                  Contact Evoke
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hello@madebyevoke.com"
                  className="font-sans text-[13px] text-ivory/60 lime-hover hover:text-ivory transition-colors"
                >
                  hello@madebyevoke.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Pages
            </p>
            <ul className="space-y-3">
              {[
                { label: "Platform", href: "/platform" },
                { label: "Vision", href: "/vision" },
                { label: "Brand", href: "/" },
                { label: "Clients", href: "/clients" },
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="font-sans text-[13px] text-ivory/60 lime-hover hover:text-ivory transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Domain
            </p>
            <p className="font-sans text-[13px] text-ivory/60 mb-3 leading-relaxed">
              Available via
            </p>
            <a
              href="https://madebyevoke.com/domains/payxara"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[13px] text-ivory/80 lime-hover hover:text-ivory transition-colors break-all"
            >
              madebyevoke.com/domains/payxara
            </a>
          </div>

          <div>
            <p className="font-sans font-semibold text-[11px] tracking-[0.2em] uppercase text-ivory/40 mb-5">
              Notice
            </p>
            <p className="font-sans font-light text-[13px] text-ivory/40 leading-relaxed">
              This brand identity and domain are available for acquisition to one qualified buyer.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-8 border-t border-white/[0.08]">
          <p className="font-sans text-[12px] text-ivory/40">
            © 2025 Payxara. Represented by Made by Evoke.
          </p>
          <a
            href="mailto:hello@madebyevoke.com"
            className="font-sans text-[12px] text-ivory/40 hover:text-ivory/60 transition-colors"
          >
            hello@madebyevoke.com
          </a>
        </div>
      </div>
    </footer>
  );
}
