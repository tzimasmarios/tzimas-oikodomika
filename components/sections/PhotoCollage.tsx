// components/sections/PhotoCollage.tsx
export default function PhotoCollage() {
  return (
    // ΟΛΟ μαύρο φόντο
    <section className="relative overflow-hidden bg-black py-12 md:py-16">
      <div className="container relative z-10">
        {/* φαρδύς καμβάς — να φαίνεται ΜΟΝΟ σε md+ */}
        <div className="relative mx-auto max-w-[90rem] h-[480px] md:h-[560px] lg:h-[600px] hidden md:block">
          {/* Αριστερή κάθετη */}
          <img
            src="/images/collage/c2.jpg"
            alt=""
            loading="lazy"
            className="absolute left-0 md:left-2 top-1/2 -translate-y-1/2 w-[26%] md:w-[24%] rounded-2xl shadow-xl ring-1 ring-white/10 object-cover aspect-[4/5]"
          />

          {/* Πάνω-κέντρο */}
          <img
            src="/images/collage/c1.jpg"
            alt=""
            loading="lazy"
            className="absolute top-8 left-1/2 -translate-x-1/2 w-[40%] md:w-[42%] rounded-2xl shadow-xl ring-1 ring-white/10 object-cover aspect-[16/10]"
          />

          {/* Κάτω κέντρο/δεξιά */}
          <img
            src="/images/collage/c3.jpg"
            alt=""
            loading="lazy"
            className="absolute bottom-6 left-[62%] -translate-x-1/2 w-[38%] md:w-[40%] rounded-2xl shadow-xl ring-1 ring-white/10 object-cover aspect-[16/10]"
          />

          {/* Πάνω δεξιά — ΜΕΓΑΛΥΤΕΡΗ */}
          <img
            src="/images/collage/c4.jpg"
            alt=""
            loading="lazy"
            className="absolute right-0 md:right-4 top-10 w-[22%] md:w-[20%] rounded-2xl shadow-xl ring-1 ring-white/10 object-cover aspect-[4/3]"
          />
        </div>

        {/* Mobile: grid 2×2 πάνω σε μαύρο (ΜΟΝΟ σε <md) */}
        <div className="grid grid-cols-2 gap-3 md:hidden mt-4">
          {[
            "/images/collage/c1.jpg",
            "/images/collage/c2.jpg",
            "/images/collage/c3.jpg",
            "/images/collage/c4.jpg",
          ].map((src) => (
            <img
              key={src}
              src={src}
              alt=""
              loading="lazy"
              className="w-full aspect-[4/3] object-cover rounded-xl ring-1 ring-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
