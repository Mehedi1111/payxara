"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

const includes = [
  "Full domain transfer",
  "Clean trademark status",
  "No broker fees",
  "Direct acquisition",
  "Immediate transfer",
];

const whyCards = [
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
      </svg>
    ),
    title: "Market timing",
    body: "Luxury fintech is the fastest-growing segment in wealth management software. The brand name that owns this category hasn't been built yet.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
    title: "Naming power",
    body: "Pay + Xara — globally pronounceable, legally clean, typographically distinctive. Built to own search, brand recall, and word-of-mouth.",
  },
  {
    icon: (
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "One buyer",
    body: "This will not be listed at auction. One direct, confidential acquisition to the right buyer. First serious inquiry moves to exclusivity.",
  },
];

export default function AcquirePage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", interest: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* ── HERO ─────────────────────────────── */}
      <section className="bg-white pt-36 pb-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="bg-green inline-block px-4 py-2 rounded-full text-[12px] font-bold text-ink tracking-wide uppercase mb-6">
              DOMAIN ACQUISITION
            </span>
            <h1
              className="font-black text-ink tracking-[-0.03em]"
              style={{ fontSize: "clamp(44px,6vw,74px)" }}
            >
              Payxara.com is available.
            </h1>
            <p className="text-[19px] text-ink-muted mt-6 max-w-xl mx-auto leading-[1.7]">
              A precision-built fintech brand name — available for acquisition to one qualified buyer.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── OPTION CARDS ─────────────────────── */}
      <section className="pb-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {/* Card 1: Complete Package */}
          <ScrollReveal>
            <div className="border-2 border-ink rounded-2xl p-10 relative">
              <div className="absolute top-[-16px] left-1/2 -translate-x-1/2">
                <span className="bg-green text-ink text-[11px] font-bold px-4 py-1.5 rounded-full whitespace-nowrap">
                  RECOMMENDED
                </span>
              </div>
              <p className="text-[22px] font-extrabold text-ink mt-2">Complete Package</p>

              <div className="mt-6 flex flex-col gap-3">
                {["Payxara.com", "Payxara.io"].map((d, i) => (
                  <div
                    key={d}
                    className="bg-canvas rounded-xl px-5 py-4 flex items-center justify-between"
                  >
                    <span className="text-[16px] font-bold text-ink">{d}</span>
                    {i === 1 && (
                      <span className="bg-green text-ink text-[10px] font-bold px-2 py-0.5 rounded-full">
                        Bonus
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div className="border-t border-line my-6" />

              <ul className="flex flex-col gap-3">
                {includes.map((inc) => (
                  <li key={inc} className="flex items-center gap-3 text-[14px] text-ink-muted">
                    <span className="w-4 h-4 rounded-full bg-green/15 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#33E529" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@madebyevoke.com?subject=Payxara Complete Package Inquiry"
                className="green-btn block text-center w-full py-4 rounded-xl text-[16px] mt-8"
              >
                Inquire About Package →
              </a>
            </div>
          </ScrollReveal>

          {/* Card 2: Single Domain */}
          <ScrollReveal delay={0.08}>
            <div className="border border-line rounded-2xl p-10 flex flex-col">
              <p className="text-[22px] font-extrabold text-ink">Single Domain</p>

              <div className="mt-6 mb-6">
                <div className="bg-canvas rounded-xl px-5 py-4">
                  <span className="text-[16px] font-bold text-ink">Payxara.com</span>
                </div>
              </div>

              <div className="border-t border-line mb-6" />

              <ul className="flex flex-col gap-3 flex-1">
                {includes.slice(0, 4).map((inc) => (
                  <li key={inc} className="flex items-center gap-3 text-[14px] text-ink-muted">
                    <span className="w-4 h-4 rounded-full bg-canvas-2 flex items-center justify-center flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4L3 5.5L6.5 2" stroke="#909090" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {inc}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:hello@madebyevoke.com?subject=Payxara.com Domain Inquiry"
                className="dark-btn block text-center w-full py-4 rounded-xl text-[16px] mt-8"
              >
                Inquire About Domain →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── WHY PAYXARA ──────────────────────── */}
      <section className="bg-canvas py-20 px-6 border-t border-line">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <h2
              className="font-extrabold text-ink tracking-[-0.025em] text-center"
              style={{ fontSize: "clamp(26px,4vw,40px)" }}
            >
              Why Payxara?
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {whyCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="bg-white border border-line rounded-2xl p-8 hover:shadow-card transition-all duration-300 hover:-translate-y-0.5 h-full">
                  <div className="w-12 h-12 bg-green/15 rounded-xl flex items-center justify-center">
                    {c.icon}
                  </div>
                  <h3 className="text-[17px] font-bold text-ink mt-4">{c.title}</h3>
                  <p className="text-[14px] text-ink-muted mt-3 leading-[1.7]">{c.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INQUIRY FORM ─────────────────────── */}
      <section className="bg-white py-20 px-6 border-t border-line">
        <div className="max-w-lg mx-auto">
          <ScrollReveal>
            <h2 className="text-[32px] font-extrabold text-ink text-center tracking-[-0.025em]">
              Start the conversation.
            </h2>
            <p className="text-[15px] text-ink-muted mt-3 text-center">
              Direct. No brokers.{" "}
              <a
                href="mailto:hello@madebyevoke.com"
                className="text-ink font-semibold hover:text-green transition-colors"
              >
                hello@madebyevoke.com
              </a>
            </p>
          </ScrollReveal>

          {submitted ? (
            <div className="mt-12 text-center">
              <div className="w-16 h-16 bg-green/15 rounded-full flex items-center justify-center mx-auto">
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="#33E529" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[24px] font-extrabold text-ink mt-6">Message received.</h3>
              <p className="text-[15px] text-ink-muted mt-3">
                We&apos;ll be in touch within 24 hours.{" "}
                <a href="mailto:hello@madebyevoke.com" className="text-green font-medium">
                  hello@madebyevoke.com
                </a>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
              {[
                { id: "name", label: "Name", type: "text", placeholder: "Your full name" },
                { id: "company", label: "Company", type: "text", placeholder: "Your company" },
                { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-[12px] font-semibold uppercase tracking-wide text-ink-faint mb-2"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full border border-line rounded-xl px-5 py-3.5 text-[15px] text-ink bg-white focus:border-ink focus:outline-none transition placeholder:text-ink-faint/60"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="interest"
                  className="block text-[12px] font-semibold uppercase tracking-wide text-ink-faint mb-2"
                >
                  I&apos;m interested in
                </label>
                <select
                  id="interest"
                  value={form.interest}
                  onChange={(e) => setForm({ ...form, interest: e.target.value })}
                  className="w-full border border-line rounded-xl px-5 py-3.5 text-[15px] text-ink bg-white focus:border-ink focus:outline-none transition"
                >
                  <option value="">Select an option</option>
                  <option value="full">Full Package</option>
                  <option value="single">Payxara.com only</option>
                  <option value="info">Just learning more</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[12px] font-semibold uppercase tracking-wide text-ink-faint mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Tell us about your interest..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-line rounded-xl px-5 py-3.5 text-[15px] text-ink bg-white focus:border-ink focus:outline-none transition resize-none placeholder:text-ink-faint/60"
                />
              </div>

              <div className="flex gap-4 mt-2">
                <button type="submit" className="green-btn flex-1 py-4 rounded-xl text-[16px]">
                  Send Inquiry
                </button>
                <a
                  href="mailto:hello@madebyevoke.com"
                  className="ghost-btn-dark flex-1 py-4 rounded-xl text-[16px] text-center"
                >
                  Email Directly →
                </a>
              </div>
            </form>
          )}

          <div className="mt-8 text-center">
            <a
              href="https://madebyevoke.com/domains/payxara"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-semibold text-ink hover:text-green transition-colors"
            >
              View on madebyevoke.com →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
