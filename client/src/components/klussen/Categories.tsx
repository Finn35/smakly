const CATS = [
  { emoji: "🔧", label: "Loodgieter", sub: "Kranen, lekkages" },
  { emoji: "⚡", label: "Elektricien", sub: "Stopcontacten" },
  { emoji: "🎨", label: "Schilder", sub: "Binnen & buiten" },
  { emoji: "🪚", label: "Timmerman", sub: "Deuren, vloeren" },
  { emoji: "🛋️", label: "IKEA montage", sub: "Meubels monteren" },
  { emoji: "🧹", label: "Schoonmaak", sub: "Eenmalig of periodiek" },
];

export default function Categories() {
  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6 max-w-[560px]">
        <div className="text-center sm:text-left text-xs font-bold uppercase tracking-widest text-[#E84500] mb-2">
          Wat moet er gedaan worden?
        </div>
        <h2 className="text-center sm:text-left text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] tracking-tight mb-8">
          Kies een categorie
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {CATS.map((c) => (
            <button
              key={c.label}
              type="button"
              onClick={scrollToForm}
              className="p-4 sm:p-5 bg-white border border-[#EBEBEB] rounded-xl text-center transition-all hover:border-[#E84500] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(232,69,0,0.12)]"
            >
              <div className="text-2xl mb-1.5">{c.emoji}</div>
              <strong className="text-sm font-bold block">{c.label}</strong>
              <span className="text-xs text-[#6B6B6B]">{c.sub}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
