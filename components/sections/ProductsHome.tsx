"use client";

import { useMemo, useState } from "react";
import ProductCard from "../ProductCard";
import {
  PRODUCTS,
  CATEGORIES,
  type Product,
  type CategorySlug,
} from "../../lib/products"; // ✅ αν το αρχείο σου λέγεται products.ts, βάλε "../../lib/products"

type UiCategory = CategorySlug | "all";

export default function ProductsHome() {
  const [activeCat, setActiveCat] = useState<UiCategory>("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const catOk = activeCat === "all" ? true : p.category === activeCat;
      if (!catOk) return false;
      if (!q) return true;

      const hay = [
        p.name.toLowerCase(),
        ...(p.keywords?.map((k) => k.toLowerCase()) ?? []),
      ].join(" ");
      return hay.includes(q);
    });
  }, [activeCat, query]);

  return (
    <div className="space-y-6">
      {/* Φίλτρα κατηγορίας */}
      <div className="flex flex-wrap items-center gap-2">
        <CategoryChip
          label="Όλα"
          active={activeCat === "all"}
          onClick={() => setActiveCat("all")}
        />
        {(Object.keys(CATEGORIES) as CategorySlug[]).map((slug) => (
          <CategoryChip
            key={slug}
            label={CATEGORIES[slug]}
            active={activeCat === slug}
            onClick={() => setActiveCat(slug)}
          />
        ))}
      </div>

      {/* Μπάρα αναζήτησης */}
      <div className="relative max-w-xl">
        <input
          type="text"
          aria-label="Αναζήτηση προϊόντων"
          placeholder="Αναζήτηση προϊόντων…"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 pr-10 shadow-sm outline-none focus:ring-2 focus:ring-[#2D6BFF]/40"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
          🔎
        </span>
      </div>

      {/* Αριθμός αποτελεσμάτων */}
      <div className="text-sm text-slate-500">
        Βρέθηκαν{" "}
        <span className="font-medium text-slate-700">{filtered.length}</span>{" "}
        προϊόντα
        {activeCat !== "all" ? (
          <>
            {" "}
            στην κατηγορία{" "}
            <span className="font-medium">
              {CATEGORIES[activeCat as CategorySlug]}
            </span>
          </>
        ) : null}
        {query ? <> για «{query}»</> : null}
      </div>

      {/* Grid προϊόντων — 2 στήλες σε κινητό */}
      {filtered.length === 0 ? (
        <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-slate-600">
          Δεν βρέθηκαν προϊόντα. Δοκιμάστε άλλη αναζήτηση ή αλλάξτε κατηγορία.
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
          {filtered.map((p: Product) => (
            <ProductCard
              key={p.id}
              image={p.image}
              title={p.name}
              price={p.price}
              category={CATEGORIES[p.category]}
              href={`/proionta/${p.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CategoryChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "rounded-full px-4 py-2 text-sm transition",
        active
          ? "bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] text-white shadow"
          : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 shadow-sm",
      ].join(" ")}
    >
      {label}
    </button>
  );
}
