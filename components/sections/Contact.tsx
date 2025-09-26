import shop from "@/config/shop.json";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container grid md:grid-cols-2 gap-6">
        <div className="bg-white border rounded-2xl p-6">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Στοιχεία Επικοινωνίας</h2>
          <p>{shop.address}</p>
          <p className="mt-1"><a className="underline" href={`tel:${shop.phone.replace(/\s/g,'')}`}>{shop.phone}</a></p>
          <p className="mt-1"><a className="underline" href={`mailto:${shop.email}`}>{shop.email}</a></p>
          <div className="mt-4">
            <h3 className="font-semibold">Ωράριο</h3>
            <ul className="text-sm">
              {shop.hours.map((h)=> <li key={h.d}>{h.d}: {h.h}</li>)}
            </ul>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border min-h-[300px]">
          <iframe title="Χάρτης Καταστήματος" src={shop.mapEmbedSrc} width="100%" height="100%" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
