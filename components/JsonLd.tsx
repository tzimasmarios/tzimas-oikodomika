// components/JsonLd.tsx
import shop from "@/config/shop.json";

function toSchemaDay(d: string) {
  // δέχεται π.χ. "Δε", "Τρ", "Τε", "Πε", "Πα", "Σα", "Κυ" ή αγγλικά και τα γυρνά σε Mo/Tu/...
  const map: Record<string, string> = {
    "Δε": "Mo", "Τρ": "Tu", "Τε": "We", "Πε": "Th", "Πα": "Fr", "Σα": "Sa", "Κυ": "Su",
    "Mon": "Mo", "Tue": "Tu", "Wed": "We", "Thu": "Th", "Fri": "Fr", "Sat": "Sa", "Sun": "Su",
  };
  return map[d] || d;
}

export function JsonLd() {
  const openingHours: string[] = (shop.hours || []).map((h: any) => {
    // υποθέτουμε μορφή π.χ. { d: "Δε-Πα", h: "08:00-17:00" } ή { d: "Σα", h: "09:00-14:00" }
    // Σπάμε range ημερών σε μεμονωμένες
    const [start, end] = String(h.d).split("-").map((x: string) => x.trim());
    const startCode = toSchemaDay(start);
    const endCode = end ? toSchemaDay(end) : startCode;
    const days =
      startCode === endCode
        ? [startCode]
        : [startCode, endCode]; // απλό range· αν θέλεις πλήρη επέκταση μπορώ να στο γράψω
    return days.map((d) => `${d} ${h.h}`);
  }).flat();

  const ld = {
    "@context": "https://schema.org",
    "@type": "BuildingMaterialsStore",
    "@id": "https://www.tzimas-oikodomika.gr/#store",
    name: shop.name || "Τζίμας Οικοδομικά Υλικά",
    url: "https://www.tzimas-oikodomika.gr",
    image: ["https://www.tzimas-oikodomika.gr/images/store.jpg"],
    telephone: shop.phone, // προτίμησε μορφή +30XXXXXXXXXX
    email: shop.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.address,
      addressLocality: shop.city || "Φιλιππιάδα",
      postalCode: shop.postalCode || "48200",
      addressCountry: "GR",
    },
    openingHours,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
