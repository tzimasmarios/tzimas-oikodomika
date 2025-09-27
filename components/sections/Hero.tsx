import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden -mt-16 md:-mt-20">
      {/* Φόντο */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/45 md:bg-black/40" />
      </div>

      <div className="container">
        <div className="min-h-[85vh] md:min-h-[92vh] flex items-center justify-center">
          <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">

            {/* ΚΡΥΦΟ H1 – δεν αλλάζει οπτικά */}
            <h1 className="sr-only">Οικοδομικά Υλικά ΤΖΙΜΑΣ</h1>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <img
                src="/images/logo-compact.svg"
                alt="ΤΖΙΜΑΣ — Οικοδομικά Υλικά"
                className="h-16 md:h-20 w-auto filter brightness-0 invert drop-shadow"
              />
              {/* ίδιο στυλ, απλώς H2 αντί για span */}
              <h2 className="text-white text-2xl md:text-4xl font-extrabold tracking-[0.2em] uppercase">
                ΟΙΚΟΔΟΜΙΚΑ ΥΛΙΚΑ
              </h2>
            </div>

            {/* (προαιρετικό) CTA όπως ήταν */}
            {/* <div className="flex gap-3 pt-2">
              <Link href="/proionta" className="inline-flex rounded-md bg-white/95 text-slate-900 px-4 py-2 font-medium hover:bg-white">
                Δες προϊόντα
              </Link>
              <Link href="/epikoinonia" className="inline-flex rounded-md border border-white/70 text-white px-4 py-2 font-medium hover:bg-white/10">
                Επικοινωνία
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
