const PILLARS = [
  {
    icon: "✦",
    title: "Persoonlijk geselecteerd",
    desc: "Elke vakman op ons platform wordt door ons team persoonlijk gecontroleerd. Geen willekeurige aanmeldingen — alleen betrouwbare professionals.",
  },
  {
    icon: "◈",
    title: "Klein & betrokken",
    desc: "Wij zijn een klein team met echte aandacht voor elke klus. Geen callcenter, geen wachtrij — gewoon directe, persoonlijke service.",
  },
  {
    icon: "◇",
    title: "Gratis & vrijblijvend",
    desc: "Klus plaatsen is altijd gratis. Geen verborgen kosten, geen abonnement, geen verplichtingen. Je betaalt alleen de vakman — en alleen als je tevreden bent.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white border-t border-gray-100 py-16 sm:py-20">
      <div className="max-w-lg mx-auto px-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
          Onze aanpak
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-8">
          Waarom Smakly?
        </h2>

        <div className="space-y-4">
          {PILLARS.map((p) => (
            <div
              key={p.title}
              className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 shrink-0 rounded-xl bg-[#FF6A00]/[0.08] flex items-center justify-center text-[#FF6A00] text-lg font-bold">
                {p.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
