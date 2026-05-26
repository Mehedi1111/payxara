import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Payxara — Global Payments Platform",
    template: "%s | Payxara",
  },
  description:
    "Move money globally, instantly. Zero hidden fees, real exchange rates, and bank-grade security for businesses that can't afford to wait.",
  keywords: ["payments", "global transfers", "fintech", "payment platform", "international payments"],
  openGraph: {
    title: "Payxara — Global Payments Platform",
    description: "Move money globally, instantly. Zero hidden fees, real exchange rates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={interTight.variable}>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
