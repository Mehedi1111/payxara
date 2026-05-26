"use client";

import { useState } from "react";
import Link from "next/link";
import LimeAccent from "@/components/LimeAccent";
import ScrollReveal from "@/components/ScrollReveal";

interface FormData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

const domainFacts = [
  { label: "Status", value: "Available for immediate transfer" },
  { label: "Represented by", value: "Made by Evoke" },
  { label: "Format", value: "Exclusive, non-auction placement" },
  { label: "TLD", value: ".com — clean and unencumbered" },
];

const includes = [
  "Payxara.com — .com domain, full transfer",
  "Global trademark clearance confirmation",
  "Complete brand rationale document",
  "Introduction to Evoke's brand design team for immediate buildout",
];

const investmentParas = [
  "The luxury fintech segment is experiencing its fastest growth since 2015. Family offices are digitizing. Private banks are launching apps. Digital wealth platforms are raising Series B rounds with brand equity as a core asset. The window for a name this clean is closing.",
  "Payxara has no digital footprint to overcome. No associations to unlearn. It arrives as a blank canvas with native brand gravity — the rarest combination in naming.",
  "Brands like this are not purchased. They are recognized. If you've read this far, you already know what it's worth.",
];

export default function AcquirePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Payxara Domain Inquiry — ${formData.name}, ${formData.organization}`;
    const body = `Name: ${formData.name}\nOrganization: ${formData.organization}\nEmail: ${formData.email}\n\n${formData.message}`;
    window.open(
      `mailto:hello@madebyevoke.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    );
    setSubmitted(true);
  };

  return (
    <div className="pt-[72px] min-h-screen">
      <div className="flex flex-col lg:flex-row">
        {/* ── Left: sticky info panel ── */}
        <aside className="lg:sticky lg:top-[72px] lg:h-[calc(100vh-72px)] w-full lg:w-1/2 grain relative bg-ivory-dark border-b lg:border-b-0 lg:border-r border-line flex flex-col justify-between px-8 lg:px-12 py-14 lg:py-16 overflow-y-auto">
          <div>
            <LimeAccent />
            <p className="font-sans font-semibold text-[11px] tracking-[0.2em] text-ink-faint uppercase mt-2">
              Domain Acquisition
            </p>

            {/* Domain name display */}
            <div className="mt-10 flex items-baseline gap-3 flex-wrap">
              <span className="font-sans font-black text-[clamp(40px,6vw,64px)] tracking-[0.04em] text-ink leading-none">
                PAYXARA
              </span>
              <span className="font-serif font-light italic text-[clamp(32px,5vw,54px)] text-ink/30 leading-none">
                .com
              </span>
            </div>

            <div className="border-t border-line my-8" />

            {/* Domain facts */}
            <ul className="space-y-0">
              {domainFacts.map((f) => (
                <li
                  key={f.label}
                  className="flex justify-between gap-6 border-b border-line py-4 last:border-0"
                >
                  <span className="font-sans font-medium text-[12px] text-ink-faint shrink-0">
                    {f.label}
                  </span>
                  <span className="font-sans text-[14px] text-ink text-right">
                    {f.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom actions */}
          <div className="mt-10 space-y-4">
            <a
              href="https://madebyevoke.com/domains/payxara"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full border border-line text-ink font-sans font-semibold text-[13px] tracking-[0.05em] uppercase px-6 py-3 rounded-[4px] hover:border-lime hover:bg-lime hover:text-ink transition-all duration-250"
            >
              View on madebyevoke.com
              <span>↗</span>
            </a>
            <a
              href="mailto:hello@madebyevoke.com"
              className="block font-sans font-light text-[13px] text-ink-faint lime-hover text-center"
            >
              hello@madebyevoke.com
            </a>
          </div>
        </aside>

        {/* ── Right: scrollable content ── */}
        <div className="w-full lg:w-1/2 px-8 lg:px-12 py-14 lg:py-16 overflow-y-auto">
          {/* What you acquire */}
          <ScrollReveal>
            <h2 className="font-serif font-light italic text-[clamp(26px,3.5vw,38px)] text-ink">
              What you acquire when you acquire Payxara.
            </h2>
            <p className="font-sans font-light text-[16px] text-ink-muted mt-6 leading-[1.8] max-w-md">
              Payxara.com is more than a domain. It is a naming decision that will
              compound for decades — on pitch decks, Bloomberg terminals, regulatory
              filings, and in the minds of every client your firm will ever serve.
            </p>
          </ScrollReveal>

          {/* Includes */}
          <ul className="mt-10 space-y-0">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-center justify-between gap-6 border-b border-line py-5 first:border-t"
              >
                <span className="font-sans font-semibold text-[13px] text-ink">
                  {item}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full bg-lime flex items-center justify-center text-ink text-[11px] font-bold">
                  ✓
                </span>
              </li>
            ))}
          </ul>

          {/* Investment case */}
          <ScrollReveal className="mt-16 mb-16">
            <h2 className="font-serif font-light italic text-[clamp(22px,3vw,32px)] text-ink mb-8">
              Why the right buyer moves now.
            </h2>
            {investmentParas.map((para, i) => (
              <p
                key={i}
                className="font-sans font-light text-[15px] text-ink-muted leading-[1.8] mb-5 last:mb-0"
              >
                {para}
              </p>
            ))}
          </ScrollReveal>

          {/* Inquiry form */}
          <div className="bg-parchment border border-line p-8 lg:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <LimeAccent width={36} />
                <h3 className="font-serif italic text-[clamp(32px,4vw,48px)] text-ink mt-6">
                  Thank you.
                </h3>
                <p className="font-sans font-light text-[15px] text-ink-muted mt-4 leading-relaxed">
                  We&apos;ll be in touch within 24 hours.
                  <br />
                  <a
                    href="mailto:hello@madebyevoke.com"
                    className="text-ink lime-hover"
                  >
                    hello@madebyevoke.com
                  </a>
                </p>
              </div>
            ) : (
              <>
                <h3 className="font-serif italic text-[clamp(24px,3vw,32px)] text-ink">
                  Begin the conversation.
                </h3>
                <p className="font-sans font-light text-[14px] text-ink-faint mt-2 mb-8">
                  Direct. Confidential. Without intermediaries.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {[
                    { name: "name", label: "Name", type: "text" },
                    { name: "organization", label: "Organisation", type: "text" },
                    { name: "email", label: "Email", type: "email" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-ink-faint mb-2">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        required
                        value={formData[field.name as keyof FormData]}
                        onChange={handleChange}
                        className="w-full bg-white border border-line px-4 py-3 font-sans text-[14px] text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block font-sans font-semibold text-[11px] tracking-[0.1em] uppercase text-ink-faint mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white border border-line px-4 py-3 font-sans text-[14px] text-ink placeholder:text-ink-faint focus:border-ink focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project and intended use."
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <button
                      type="submit"
                      className="bg-ink text-ivory font-sans font-semibold text-[13px] tracking-[0.05em] uppercase px-8 py-4 rounded-[4px] hover:bg-obsidian-surface transition-colors"
                    >
                      Submit Inquiry
                    </button>
                    <a
                      href="mailto:hello@madebyevoke.com"
                      className="inline-flex items-center justify-center border border-line text-ink font-sans font-semibold text-[13px] tracking-[0.05em] uppercase px-8 py-4 rounded-[4px] hover:border-lime hover:text-lime transition-all"
                    >
                      Email Directly →
                    </a>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
