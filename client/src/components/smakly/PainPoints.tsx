const painPoints = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-500">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="4" x2="20" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Te weinig reviews",
    description: "Je vraagt het niet → klanten laten niets achter.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-red-400">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
        <circle cx="18" cy="6" r="4" fill="#EF4444" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    title: "Google profiel niet actief",
    description: "Weinig posts = lage zichtbaarheid.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#4F7DF3]">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Concurrenten scoren hoger",
    description: "Zij hebben meer reviews → jij mist klanten.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Herken je deze problemen?
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            Als vakman ben je druk met je werk. Maar ondertussen loop je klanten mis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-[#FAF9F7] rounded-2xl p-6 sm:p-7 border border-[#E8E6E1]/60 hover:border-[#D4D2CD] transition-all duration-300 hover:shadow-sm"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[#E8E6E1] flex items-center justify-center mb-4 shadow-sm">
                {point.icon}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-[#1A1918] mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-[#787571] leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
