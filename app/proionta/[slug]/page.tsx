// app/proionta/[slug]/page.tsx
import { notFound } from "next/navigation";
import { findProductBySlug, CATEGORIES } from "../../../lib/products"; // ή ../../lib/product ανάλογα με το path σου

type PageProps = { params: { slug: string } };

export async function generateMetadata({ params }: PageProps) {
  const p = findProductBySlug(params.slug);
  return {
    title: p ? `${p.name} | Προϊόντα | ΤΖΙΜΑΣ` : "Προϊόν | ΤΖΙΜΑΣ",
    description: p?.description,
  };
}

export default function ProductPage({ params }: PageProps) {
  const product = findProductBySlug(params.slug);
  if (!product) notFound();

  const catLabel = CATEGORIES[product.category];

  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <div className="mb-6 text-sm text-slate-500">
        <a href="/proionta" className="hover:underline">
          ← Επιστροφή στα προϊόντα
        </a>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Εικόνα προϊόντος — χωρίς κόψιμο */}
        <div className="overflow-hidden rounded-xl border bg-white flex items-center justify-center h-80">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full"
          />
        </div>

        {/* Στοιχεία */}
        <div>
          <span className="inline-block rounded-full bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] px-3 py-1 text-white text-xs mb-3">
            {catLabel}
          </span>
          <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
            {product.name}
          </h1>

          {typeof product.price === "number" ? (
            <div className="mt-4 text-2xl font-bold">
              {product.price.toFixed(2)} €{" "}
              {product.unit ? (
                <span className="text-base font-medium text-slate-500">
                  / {product.unit}
                </span>
              ) : null}
            </div>
          ) : null}

          <div className="mt-6 prose prose-slate max-w-none">
            <p>{product.description ?? "Δεν υπάρχει περιγραφή για το προϊόν."}</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/epikoinonia"
              className="rounded-lg bg-gradient-to-r from-[#2D6BFF] to-[#00C2A8] px-5 py-3 text-white font-medium shadow hover:opacity-95"
            >
              Επικοινωνήστε μαζί μας
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
