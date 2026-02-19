const testimonials = [
  {
    quote: "Binnen 3 weken van 12 naar 41 reviews. Klanten bellen nu vanzelf.",
    author: "Marco V.",
    company: "Klusbedrijf Den Haag",
    stars: 5,
    avatar: "MV",
    color: "bg-[#4F7DF3]",
  },
  {
    quote: "Onze zichtbaarheid is enorm gestegen. Zonder dat we iets hoeven te doen.",
    author: "Sandra K.",
    company: "Schilderbedrijf Utrecht",
    stars: 5,
    avatar: "SK",
    color: "bg-emerald-500",
  },
  {
    quote: "Smakly regelt alles automatisch. Ideaal voor drukke vakmensen.",
    author: "Pieter de J.",
    company: "Loodgieter Amsterdam",
    stars: 5,
    avatar: "PJ",
    color: "bg-violet-500",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F7]">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Wat vakmensen zeggen
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            Sluit je aan bij honderden tevreden vakmensen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#E8E6E1]/60 hover:border-[#D4D2CD] transition-all duration-300 hover:shadow-sm"
            >
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm sm:text-[15px] text-[#434240] leading-relaxed mb-5">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.color} flex items-center justify-center`}>
                  <span className="text-white text-xs font-semibold">{t.avatar}</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1918]">{t.author}</p>
                  <p className="text-xs text-[#A8A5A0]">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
