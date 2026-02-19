export default function Hero() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToHowItWorks = () => {
    document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4D2CD 0.5px, transparent 0)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-emerald-300/8 rounded-full blur-[140px] animate-pulse-soft delay-700" />
      </div>

      <div className="container mx-auto relative z-10 px-5 sm:px-6">
        <div className="min-h-screen flex flex-col justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 border border-[#E8E6E1] backdrop-blur-sm shadow-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-[13px] text-[#5C5955] font-medium">
                Google Maps automatisering voor vakmensen
              </span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-6xl font-bold text-[#1A1918] leading-[1.1] tracking-tight animate-fade-in-up delay-100">
              Meer Google reviews.
              <br />
              Meer klanten.{" "}
              <span className="bg-gradient-to-r from-[#4F7DF3] to-[#34D399] bg-clip-text text-transparent">
                Automatisch.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#787571] max-w-md sm:max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200 px-2">
              Smakly helpt vakmensen aan meer reviews en betere zichtbaarheid op Google. Zonder moeite.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-300">
              <button
                onClick={scrollToForm}
                className="group w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 bg-[#4F7DF3] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B63D9] active:scale-[0.98] shadow-md hover:shadow-lg"
              >
                <span className="flex items-center justify-center gap-2">
                  Gratis Google Analyse
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              <button
                onClick={scrollToHowItWorks}
                className="group w-full sm:w-auto px-6 py-3.5 text-[#5C5955] font-medium rounded-xl transition-all duration-200 hover:text-[#1A1918] hover:bg-white/60 border border-transparent hover:border-[#E8E6E1]"
              >
                <span className="flex items-center justify-center gap-1.5">
                  Hoe werkt het?
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-y-0.5">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Hero visual: Google Maps illustration */}
          <div className="mt-12 sm:mt-16 md:mt-20 relative max-w-2xl mx-auto animate-fade-in-up delay-500">
            <div className="bg-white rounded-2xl border border-[#E8E6E1] shadow-lg p-5 sm:p-6 md:p-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                {/* Maps pin */}
                <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#4F7DF3]/10 to-[#34D399]/10 flex items-center justify-center">
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#4F7DF3] sm:w-10 sm:h-10">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="currentColor" opacity="0.15" />
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="9" r="2.5" fill="currentColor" />
                  </svg>
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#1A1918]">Jouw Bedrijf</span>
                    <span className="px-2 py-0.5 bg-emerald-50 text-emerald-600 text-[11px] font-medium rounded-full">Geverifieerd</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24" className="sm:w-4 sm:h-4">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-xs text-[#787571] ml-1">4.8 (127 reviews)</span>
                  </div>
                  <p className="text-xs text-[#A8A5A0]">Actief profiel · 3 posts deze week · 12 nieuwe reviews</p>
                </div>

                {/* Score badge */}
                <div className="flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex flex-col items-center justify-center text-white shadow-md">
                  <span className="text-lg sm:text-xl font-bold leading-none">92</span>
                  <span className="text-[9px] sm:text-[10px] opacity-80">score</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 sm:mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[12px] sm:text-[13px] text-[#A8A5A0] animate-fade-in-up delay-600">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Meer reviews
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="12" cy="9" r="2" stroke="currentColor" strokeWidth="1.5" fill="none" />
              </svg>
              Hoger op Maps
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Automatisch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
