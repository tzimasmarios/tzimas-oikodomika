// app/proionta/page.tsx
import ProductsHome from "@/components/sections/ProductsHome";

export const metadata = {
  title: "Προϊόντα | ΤΖΙΜΑΣ",
};

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Προϊόντα</h1>
      <ProductsHome />
    </div>
  );
}
