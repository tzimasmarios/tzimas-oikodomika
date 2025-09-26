export default function Gallery() {
  const imgs = [
    "yard1.jpg",
    "yard2.jpg",
    "warehouse.jpg",
    "mixers.jpg",
    "paints.jpg",
    "insulation.jpg",
  ];
  return (
    <section id="gallery" className="container py-12">
      <h2 className="text-xl md:text-2xl font-semibold mb-4">Φωτογραφίες</h2>

      {/* Masonry με CSS columns */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
        {imgs.map((name) => (
          <img
            key={name}
            src={`/images/${name}`}
            alt=""
            className="mb-4 w-full rounded-xl border shadow-sm"
            style={{ breakInside: "avoid" }}
          />
        ))}
      </div>
    </section>
  );
}
