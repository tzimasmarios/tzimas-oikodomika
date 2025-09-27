"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import shop from "@/config/shop.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const forceColor =
    pathname?.startsWith("/proionta") ||
    pathname?.startsWith("/epikoinonia");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const colored = scrolled || forceColor;

  return (
    <header
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-all",
        colored
          ? "bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] text-white shadow-sm"
          : "bg-transparent text-white"
      ].join(" ")}
    >
      <div className="container py-3 flex items-center gap-4">
        {/* Brand link: δίνουμε καθαρό brand text σε robots/assistive tech */}
        <Link
          href="/"
          className="flex items-center"
          aria-label="Οικοδομικά Υλικά ΤΖΙΜΑΣ"
        >
          <img
            src="/images/logo-compact.svg"
            alt="ΤΖΙΜΑΣ — Οικοδομικά Υλικά"
            className={[
              "h-10 w-auto transition drop-shadow",
              colored ? "filter brightness-0 invert" : ""
            ].join(" ")}
          />
          <span className="sr-only">Οικοδομικά Υλικά ΤΖΙΜΑΣ</span>
        </Link>

        {/* Desktop menu */}
        <nav className="ml-auto hidden md:flex gap-6 text-sm">
          <NavLink href="/#about" label="Σχετικά" pathname={pathname} />
          <NavLink href="/proionta" label="Προϊόντα" pathname={pathname} />
          <NavLink href="/epikoinonia" label="Επικοινωνία" pathname={pathname} />
        </nav>

        {/* Desktop phone */}
        <a
          href={`tel:${shop.phone.replace(/\s/g, "")}`}
          className="hidden md:inline text-sm underline hover:opacity-90"
        >
          {shop.phone}
        </a>

        {/* Mobile burger */}
        <button
          aria-label={open ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={open}
          className="ml-auto md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/60"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-white/15 bg-white text-slate-800 shadow-lg">
          <div className="container py-3 space-y-1">
            <Link href="/" className="block px-2 py-2 rounded-md hover:bg-slate-50" onClick={() => setOpen(false)}>
              Αρχική
            </Link>
            <Link href="/proionta" className="block px-2 py-2 rounded-md hover:bg-slate-50" onClick={() => setOpen(false)}>
              Προϊόντα
            </Link>
            <Link href="/epikoinonia" className="block px-2 py-2 rounded-md hover:bg-slate-50" onClick={() => setOpen(false)}>
              Επικοινωνία
            </Link>
            <a
              href={`tel:${shop.phone.replace(/\s/g, "")}`}
              className="mt-2 inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] px-3 py-2 text-white font-medium"
              onClick={() => setOpen(false)}
            >
              ☎ {shop.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({
  href, label, pathname,
}: { href: string; label: string; pathname?: string | null }) {
  const active =
    (href === "/proionta" && pathname?.startsWith("/proionta")) ||
    (href === "/epikoinonia" && pathname?.startsWith("/epikoinonia"));
  return (
    <Link
      href={href}
      className={[
        "hover:opacity-90",
        active ? "border-b-2 border-white pb-0.5" : ""
      ].join(" ")}
    >
      {label}
    </Link>
  );
}
