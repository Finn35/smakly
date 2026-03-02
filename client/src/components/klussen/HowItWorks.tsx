const STEPS = [
  {
    num: 1,
    title: "Beschrijf je klus",
    desc: "30 seconden. Geen account nodig. Vertel wat er moet gebeuren en je postcode.",
  },
  {
    num: 2,
    title: "Wij zoeken een vakman",
    desc: "We sturen je klus door naar geselecteerde, betrouwbare vakmensen bij jou in de buurt.",
  },
  {
    num: 3,
    title: "Klus geregeld",
    desc: "Je ontvangt een reactie via WhatsApp of telefoon. Afspraak maken en klaar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gray-50 border-y border-gray-100 py-16 sm:py-20">
      <div className="max-w-lg mx-auto px-5">
        <p className="text-center text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
          Hoe het werkt
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-10">
          In 3 stappen klus geregeld
        </h2>
        <div className="space-y-3">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="flex gap-4 p-5 bg-white border border-gray-100 rounded-xl shadow-sm"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#FF6A00] text-white font-bold text-sm flex items-center justify-center">
                {s.num}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
