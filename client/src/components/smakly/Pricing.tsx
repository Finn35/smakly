const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Ideaal om te starten met Google zichtbaarheid",
    features: ["1 Google Post per week", "Maandelijkse rapportage", "Profiel check"],
    highlight: false,
  },
  {
    name: "Grow",
    price: "49",
    description: "De meest gekozen optie voor groeiende bedrijven",
    features: [
      "Review automatisatie",
      "1–2 Google Posts per week",
      "Profiel optimalisatie",
      "WhatsApp / SMS uitnodigingen",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "79",
    description: "Alles wat je nodig hebt voor maximale zichtbaarheid",
    features: [
      "Alles inbegrepen",
      "AI content creatie",
      "Wekelijkse rapportage",
      "Prioriteit support",
      "Onbeperkt posts",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Prijzen
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            Geen verborgen kosten. Start vandaag en upgrade wanneer je wilt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 hover:shadow-md ${
                plan.highlight
                  ? "bg-[#1A1918] text-white border-[#1A1918] shadow-lg scale-[1.02]"
                  : "bg-white border-[#E8E6E1]/60 hover:border-[#D4D2CD]"
              }`}
            >
              {plan.highlight && (
                <span className="inline-block px-2.5 py-0.5 bg-[#4F7DF3] text-[11px] font-medium text-white rounded-full mb-4">
                  Meest gekozen
                </span>
              )}
              <h3 className={`text-lg sm:text-xl font-bold ${plan.highlight ? "text-white" : "text-[#1A1918]"}`}>
                {plan.name}
              </h3>
              <div className="mt-3 mb-2 flex items-baseline gap-1">
                <span className={`text-3xl sm:text-4xl font-bold ${plan.highlight ? "text-white" : "text-[#1A1918]"}`}>
                  €{plan.price}
                </span>
                <span className={`text-sm ${plan.highlight ? "text-white/60" : "text-[#A8A5A0]"}`}>/ maand</span>
              </div>
              <p className={`text-sm mb-5 ${plan.highlight ? "text-white/70" : "text-[#787571]"}`}>
                {plan.description}
              </p>
              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? "text-emerald-400" : "text-emerald-500"}`}
                    >
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-[#5C5955]"}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToForm}
                className={`w-full py-2.5 sm:py-3 font-semibold rounded-xl text-sm transition-all duration-200 active:scale-[0.98] ${
                  plan.highlight
                    ? "bg-white text-[#1A1918] hover:bg-[#F5F3F0]"
                    : "bg-[#FAF9F7] text-[#1A1918] border border-[#E8E6E1] hover:bg-[#F5F3F0]"
                }`}
              >
                Gratis proberen
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
