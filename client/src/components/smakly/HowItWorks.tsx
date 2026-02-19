const steps = [
  {
    number: "01",
    title: "Google profiel scan",
    description: "We bekijken je reviews, zichtbaarheid en concurrenten.",
    tag: "Gratis",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-[#4F7DF3]">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 8v6M8 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Automatisering activeren",
    description: "We zetten alles voor je klaar, jij hoeft niets te doen.",
    tag: "Hands-off",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Meer reviews & zichtbaarheid",
    description: "Je profiel wordt actiever en je scoort hoger op Maps.",
    tag: "Resultaat",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-violet-500">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Hoe werkt het?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            In drie stappen naar meer reviews en betere zichtbaarheid.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 sm:space-y-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="flex items-start gap-4 sm:gap-6 bg-[#FAF9F7] rounded-2xl p-5 sm:p-7 border border-[#E8E6E1]/60 hover:border-[#D4D2CD] transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white border border-[#E8E6E1] flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-[#4F7DF3] tracking-wider">{step.number}</span>
                  <span className="px-2 py-0.5 bg-white text-[10px] font-medium text-[#787571] rounded-full border border-[#E8E6E1]">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-[#1A1918] mb-1.5">
                  {step.title}
                </h3>
                <p className="text-sm text-[#787571] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <button
            onClick={scrollToForm}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#4F7DF3] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B63D9] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Start met gratis scan
          </button>
        </div>
      </div>
    </section>
  );
}
