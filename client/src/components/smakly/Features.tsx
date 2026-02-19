const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4F7DF3]">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Automatische review-uitnodigingen",
    description: "Klant klaar? Wij sturen automatisch een reviewverzoek via WhatsApp of SMS.",
    badge: "WhatsApp / SMS",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 17l2-5 3 2 3-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "AI Google Posts",
    description: "Upload een foto → wij maken en plaatsen automatisch een Google Post.",
    badge: "AI-gestuurd",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-violet-500">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Profiel optimalisatie",
    description: "Wij verbeteren je profiel zodat je beter gevonden wordt op Google Maps.",
    badge: "SEO-optimaal",
  },
];

export default function Features() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F7]">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Wat automatiseert Smakly?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            Drie krachtige tools die samenwerken om je Google-zichtbaarheid te vergroten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E6E1]/60 hover:border-[#D4D2CD] transition-all duration-300 hover:shadow-md group"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FAF9F7] border border-[#E8E6E1] flex items-center justify-center mb-4 group-hover:shadow-sm transition-shadow">
                {feature.icon}
              </div>
              <span className="inline-block px-2.5 py-0.5 bg-[#FAF9F7] text-[11px] font-medium text-[#787571] rounded-full border border-[#E8E6E1] mb-3">
                {feature.badge}
              </span>
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1918] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#787571] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={scrollToForm}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#4F7DF3] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B63D9] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Gratis Google Analyse
          </button>
        </div>
      </div>
    </section>
  );
}
