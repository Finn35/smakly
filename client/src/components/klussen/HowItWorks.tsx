const STEPS = [
  {
    num: 1,
    title: "Beschrijf je klus",
    desc: "30 seconden. Geen account nodig. Vertel wat er moet gebeuren en je postcode.",
  },
  {
    num: 2,
    title: "Wij zoeken een vakman",
    desc: "We sturen je klus door naar betrouwbare vakmensen bij jou in de buurt. Zij reageren snel.",
  },
  {
    num: 3,
    title: "Klus geregeld",
    desc: "Je ontvangt een reactie via WhatsApp of telefoon. Afspraak maken en klaar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#FAFAFA] border-y border-[#EBEBEB] py-16 sm:py-20">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center text-xs font-bold uppercase tracking-widest text-[#E84500] mb-2">
          Hoe het werkt
        </div>
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] tracking-tight mb-10">
          In 3 stappen klus geregeld
        </h2>
        <div className="max-w-[540px] mx-auto space-y-3">
          {STEPS.map((s) => (
            <div
              key={s.num}
              className="flex gap-4 p-5 bg-white border border-[#EBEBEB] rounded-xl shadow-sm"
            >
              <div className="w-8 h-8 shrink-0 rounded-lg bg-[#E84500] text-white font-bold text-sm flex items-center justify-center">
                {s.num}
              </div>
              <div>
                <h3 className="text-sm font-bold text-[#0C0C0C] mb-0.5">{s.title}</h3>
                <p className="text-[13px] text-[#6B6B6B] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
