export default function ProblemSection() {
  const problems = [
    {
      title: "Geen gehoor",
      description: "Klanten bellen, maar krijgen geen antwoord",
    },
    {
      title: "Onbeantwoord",
      description: "WhatsApp berichten blijven liggen",
    },
    {
      title: "Te laat",
      description: "Offertes worden niet op tijd opgepakt",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A1918] tracking-tight">
              ZZP'ers missen elke week opdrachten
            </h2>
          </div>

          {/* Problem grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-6 mb-10 sm:mb-12">
            {problems.map((problem, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-2.5 sm:mb-3 text-[#A8A5A0]">
                  {index === 0 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )}
                  {index === 1 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                  {index === 2 && (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <h3 className="text-sm font-medium text-[#1A1918] mb-1">{problem.title}</h3>
                <p className="text-[13px] sm:text-sm text-[#787571] leading-relaxed">{problem.description}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <p className="text-center text-[13px] sm:text-sm text-[#A8A5A0]">
            Elke gemiste oproep = een gemiste klant
          </p>
        </div>
      </div>
    </section>
  );
}
