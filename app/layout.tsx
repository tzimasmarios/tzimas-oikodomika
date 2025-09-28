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
  title: "Οικοδομικά Υλικά ΤΖΙΜΑΣ",
  description:
    "Κατάστημα οικοδομικών υλικών: Σίδερα, Μονώσεις, Υδραυλικά, Γυψοσανίδες.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=4", rel: "shortcut icon" },             // ICO με 48px μέσα
      { url: "/favicon-16x16.png?v=4", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=4", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png?v=4", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=4", sizes: "180x180" }],
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
