// components/Footer.tsx
import Link from "next/link";
import shop from "@/config/shop.json";

function addressLine() {
  const parts = [shop.address, shop.city, shop.postalCode].filter(Boolean);
  return parts.join(", ");
}

export default function Footer() {
  const year = new Date().getFullYear();
  const telHref = (shop.phone || "").replace(/\s+/g, "");

  return (
    <footer className="border-t mt-12">
      <div className="container mx-auto px-4 py-8 grid gap-6 md:grid-cols-2 text-sm">
        {/* NAP (Name-Address-Phone) */}
        <div className="space-y-1">
          <p className="font-medium">{shop.name}</p>
          {addressLine() && <p>{addressLine()}</p>}
          {shop.phone && (
            <p>
              Τηλ.:{" "}
              <a href={`tel:${telHref}`} className="underline hover:no-underline">
                {shop.phone}
              </a>
            </p>
          )}
          {shop.email && (
            <p>
              Email:{" "}
              <a
                href={`mailto:${shop.email}`}
                className="underline hover:no-underline"
              >
                {shop.email}
              </a>
            </p>
          )}
          <p className="mt-2">
            <a
              href={`https://www.google.com/maps?q=${encodeURIComponent(
                `${shop.name} ${addressLine()}`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="underline hover:no-underline"
            >
              Οδηγίες στο Google Maps
            </a>
          </p>
        </div>

        {/* Quick links + copyright */}
        <div className="md:text-right">
          <nav className="space-x-4">
            <Link href="/">Αρχική</Link>
            <Link href="/proionta">Προϊόντα</Link>
            <Link href="/epikoinonia">Επικοινωνία</Link>
          </nav>
          <p className="opacity-70 mt-4">© {year} {shop.name}</p>
        </div>
      </div>
    </footer>
  );
}
