import shop from "@/config/shop.json";

export default function Footer() {
  return (
    <footer className="border-t mt-12">
      <div className="container py-8 text-sm flex flex-wrap items-center gap-3 justify-between">
        <p>© {new Date().getFullYear()} {shop.name}</p>
        <div className="opacity-70"></div>
      </div>
    </footer>
  );
}
