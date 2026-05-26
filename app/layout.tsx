import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Payxara — Luxury Fintech Brand & Domain",
    template: "%s | Payxara",
  },
  description:
    "Payxara is a precision-built luxury fintech brand — available for acquisition. Engineered for private wealth intelligence, institutional capital, and clients who expect both.",
  keywords: ["luxury fintech", "brand acquisition", "domain acquisition", "private wealth", "fintech brand"],
  openGraph: {
    title: "Payxara — Luxury Fintech Brand & Domain",
    description:
      "A precision-built luxury fintech brand available for acquisition via Made by Evoke.",
    type: "website",
    siteName: "Payxara",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
