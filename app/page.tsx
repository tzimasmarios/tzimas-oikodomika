// app/page.tsx
import Hero from "@/components/sections/Hero";
import Brands from "@/components/sections/Brands";
import About from "@/components/sections/About";
import PhotoCollage from "@/components/sections/PhotoCollage";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Brands />
      <About />
      <PhotoCollage />
    </main>
  );
}
