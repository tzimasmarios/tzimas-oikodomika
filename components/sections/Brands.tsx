// components/sections/Brands.tsx
type Brand = { src: string; alt: string };

// Βάλε εδώ τα δικά σου αρχεία (ταιριάξ’ τα με τα filenames σου στο /public/images/brands/)
const brands: Brand[] = [
  { src: "/images/brands/knauf-logo.png",   alt: "Knauf" },
 { src: "/images/brands/fibran-logo.png",   alt: "Fibran" },
   { src: "/images/brands/durostick.png", alt: "Durostick" },
  { src : "/images/brands/aliaxis.png",   alt: "Aliaxis" },
  { src: "/images/brands/elastron.jpg",   alt: "Elastron" },
  { src: "/images/brands/isomat-logo.png",  alt: "Isomat" },
  { src: "/images/brands/monoseto-logo.png", alt: "Monoseto" },
  // { src: "/images/brands/titan.png",   alt: "Titan" },
];

export default function Brands() {
  return (
    <section className="py-10 bg-gradient-to-b from-white to-slate-50/50">
      <div className="container">
        <h2 className="sr-only">Συνεργαζόμενα brands</h2>

        {/* Κεντραρισμένα, στατικά logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {brands.map((b) => (
            <img
              key={b.alt}
              src={b.src}
              alt={b.alt}
              className="h-10 md:h-12 lg:h-14 w-auto object-contain opacity-80 grayscale hover:grayscale-0 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
