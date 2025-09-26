import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Οικοδομικά Υλικά – Κατάλογος",
  description:
    "Κατάστημα οικοδομικών υλικών: Τσιμέντα, Σίδερα, Μονώσεις, Χρώματα, Εργαλεία.",
  metadataBase: new URL(process.env.SITE_URL || "https://example.gr"),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="el">
      <body className={inter.className}>
        <JsonLd />
        <Navbar />
        {/* offset για το fixed navbar (64–80px) */}
        <main className="pt-16 md:pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
