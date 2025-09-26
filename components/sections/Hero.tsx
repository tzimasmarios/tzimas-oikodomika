import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden -mt-16 md:-mt-20">
      {/* ΦΟΝΤΟ ΜΟΝΟ */}
      <div className="absolute inset-0 -z-10">
        <img src="/images/hero.jpg" alt="" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/45 md:bg-black/40" />
      </div>

      <div className="container">
        <div className="min-h-[85vh] md:min-h-[92vh] flex items-center justify-center">
          <div className="mx-auto max-w-4xl flex flex-col items-center text-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img src="/images/logo-compact.svg" alt="ΤΖΙΜΑΣ"
                   className="h-16 md:h-20 w-auto filter brightness-0 invert drop-shadow" />
              <span className="text-white text-2xl md:text-4xl font-extrabold tracking-[0.2em] uppercase">
                ΟΙΚΟΔΟΜΙΚΑ ΥΛΙΚΑ
              </span>
            </div>

            
          </div>
        </div>
      </div>
    </section>
  );
}
