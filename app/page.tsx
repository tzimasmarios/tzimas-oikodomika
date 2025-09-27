import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import PhotoCollage from "@/components/sections/PhotoCollage";

export const metadata: Metadata = {
  title: "Τζίμας Οικοδομικά Υλικά",
  description:
    "Οικοδομικά υλικά: Ξηρά Δόμηση, Υδραυλικά, Μονωτικά. Διανομή & παραλαβή από κατάστημα.",
};

export default function HomePage() {
  return (
    <main>
      {/* Κρυφό H1 για SEO χωρίς οπτική αλλαγή.
         Αν το Hero έχει ήδη H1, μπορείς να το αφαιρέσεις. */}
      <h1 className="sr-only">Τζίμας Οικοδομικά Υλικά</h1>
      <Hero />
      <Brands />
      <About />
      <PhotoCollage />
    </main>
  );
}
