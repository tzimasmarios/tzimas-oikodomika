import shop from "@/config/shop.json";
import data from "@/data/products.json";

export function JsonLd() {
  const offers = (data || []).slice(0, 6).map((p: any) => ({
    "@type": "Offer",
    price: p.price,
    priceCurrency: "EUR",
    itemOffered: { "@type": "Product", name: p.name, sku: p.sku },
  }));
  const ld = {
    "@context": "https://schema.org",
    "@type": "HardwareStore",
    name: shop.name,
    image: ["/images/store.jpg"],
    address: { "@type": "PostalAddress", streetAddress: shop.address, addressLocality: shop.city || "Πόλη", addressCountry: "GR" },
    telephone: shop.phone,
    email: shop.email,
    openingHours: shop.hours.map((h:any)=> `${h.d} ${h.h}`),
    makesOffer: offers,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(ld)}} />;
}
