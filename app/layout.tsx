import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Payxara — Private Wealth Intelligence Platform",
    template: "%s | Payxara",
  },
  description:
    "Collect portfolio intelligence, automate compliance reporting, and deliver institutional-grade wealth management. Without the overhead.",
  keywords: ["wealth management", "fintech", "portfolio intelligence", "compliance", "financial platform"],
  icons: {
    icon: "/payxara-favicon.jpg",
    shortcut: "/payxara-favicon.jpg",
    apple: "/payxara-favicon.jpg",
  },
  openGraph: {
    title: "Payxara — Private Wealth Intelligence Platform",
    description: "Institutional-grade wealth management tools for advisory practices.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
