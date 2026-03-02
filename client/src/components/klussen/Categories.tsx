const CATS = [
  { emoji: "🔧", label: "Loodgieter",   sub: "Kranen, lekkages" },
  { emoji: "⚡", label: "Elektricien",  sub: "Stopcontacten" },
  { emoji: "🎨", label: "Schilder",     sub: "Binnen & buiten" },
  { emoji: "🪚", label: "Timmerman",    sub: "Deuren, vloeren" },
  { emoji: "🛋️", label: "IKEA montage", sub: "Meubels monteren" },
  { emoji: "🧹", label: "Schoonmaak",   sub: "Eenmalig of periodiek" },
];

export default function Categories() {
  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-lg mx-auto px-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
          Wat moet er gedaan worden?
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-8">
          Kies een categorie
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
          {CATS.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={scrollToForm}
              className="flex flex-col items-center justify-center gap-2 min-h-[95px] p-5 bg-white border border-gray-100 rounded-xl shadow-sm text-center transition-all hover:shadow-md hover:scale-[1.03] hover:border-[#FF6A00]"
            >
              <span className="text-2xl leading-none">{c.emoji}</span>
              <strong className="text-sm font-semibold text-gray-900 block">{c.label}</strong>
              <span className="text-xs text-gray-400">{c.sub}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
