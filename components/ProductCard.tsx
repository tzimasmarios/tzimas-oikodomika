"use client";

import Link from "next/link";

type CardProduct = {
  image: string;    // π.χ. "/images/products/ydravlika/tampoureto-episkepsis.jpg"
  title: string;
  price?: number;
  category?: string;
};

type Props =
  | { product: CardProduct; href?: string }
  | (CardProduct & { product?: never; href?: string });

export default function ProductCard(props: Props) {
  const p: CardProduct =
    "product" in props && props.product
      ? props.product
      : {
          image: props.image || "",
          title: props.title || "",
          price: props.price,
          category: props.category,
        };

  const imgSrc = p.image
    ? p.image.startsWith("/") ? p.image : `/images/products/${p.image}`
    : "/images/products/warehouse.jpg";

  const content = (
    <article className="rounded-xl border bg-white overflow-hidden transition hover:shadow-lg">
      {/* -------- ΕΙΚΟΝΑ ΧΩΡΙΣ ΚΟΨΙΜΟ -------- */}
      <div className="h-44 sm:h-48 w-full bg-white flex items-center justify-center">
        <img src={imgSrc} alt={p.title} className="max-h-full max-w-full" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-medium leading-tight">{p.title}</h3>
        {p.category ? (
          <p className="mt-1 text-sm text-slate-500">{p.category}</p>
        ) : null}
        {typeof p.price === "number" ? (
          <p className="mt-3 text-lg font-semibold">{p.price.toFixed(2)} €</p>
        ) : null}
      </div>
    </article>
  );

  return props.href ? (
    <Link href={props.href} className="block">
      {content}
    </Link>
  ) : (
    content
  );
}
