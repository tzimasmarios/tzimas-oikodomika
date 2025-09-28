import shop from "@/config/shop.json";

export function JsonLd() {
  const base = "https://www.tzimas-oikodomika.gr";

  const store = {
    "@type": "BuildingMaterialsStore",
    "@id": `${base}/#store`,
    name: shop.name || "Τζίμας Οικοδομικά",
    url: base,
    telephone: shop.phone,
    email: shop.email,
    image: [`${base}/images/logo-bricks-512.png`], // βάλε πραγματική φωτο (ή βγάλ’ το)
    logo: `${base}/images/logo-bricks-512.png`,          // τετράγωνο logo
    address: {
      "@type": "PostalAddress",
      streetAddress: shop.address,
      addressLocality: shop.city,
      postalCode: shop.postalCode,
      addressCountry: "GR",
    },
    openingHours: (shop.hours || []).map((h: any) => `${h.d} ${h.h}`),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: "Οικοδομικά Υλικά ΤΖΙΜΑΣ",
    inLanguage: "el",
    publisher: { "@id": `${base}/#store` }, // δένει το site με το κατάστημα
  };

  const ld = { "@context": "https://schema.org", "@graph": [store, website] };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
    />
  );
}
