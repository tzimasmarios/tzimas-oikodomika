import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = process.env.SITE_URL || "https://www.tzimas-oikodomika.gr";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Οικοδομικά Υλικά – Κατάλογος",
  description:
    "Κατάστημα οικοδομικών υλικών: Τσιμέντα, Σίδερα, Μονώσεις, Χρώματα, Εργαλεία.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <JsonLd />
        <Navbar />
        <main className="pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
