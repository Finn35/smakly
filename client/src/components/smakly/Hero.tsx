export default function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById("chat-demo");
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen bg-[#FAF9F7] overflow-hidden">
      {/* Subtle dot pattern - very light */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D4D2CD 0.5px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />
      
      {/* Soft gradient orbs - more subtle, hidden on mobile for performance */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none hidden sm:block">
        <div className="absolute top-0 left-1/4 w-80 h-80 bg-blue-300/10 rounded-full blur-[120px] animate-pulse-soft" />
        <div className="absolute top-24 right-1/4 w-96 h-96 bg-violet-300/8 rounded-full blur-[140px] animate-pulse-soft delay-700" />
      </div>

      <div className="container mx-auto relative z-10 px-5 sm:px-6">
        <div className="min-h-screen flex flex-col justify-center pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
          
          {/* Pill badge - softer */}
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/80 border border-[#E8E6E1] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-[13px] text-[#5C5955] font-medium">Nu beschikbaar voor pilot</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-6xl font-semibold text-[#1A1918] leading-[1.1] tracking-tight animate-fade-in-up delay-100">
              Nooit meer een
              <br />
              <span className="bg-gradient-to-r from-[#4F7DF3] to-[#8B5CF6] bg-clip-text text-transparent">
                klant missen.
              </span>
            </h1>

            <p className="mt-5 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-[#787571] max-w-md sm:max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200 px-2">
              De AI Assistent die 24/7 je telefoontjes, WhatsApp en berichten beantwoordt. Gebouwd voor drukke ZZP'ers.
            </p>

            {/* CTA buttons - cleaner */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 animate-fade-in-up delay-300">
              <button 
                onClick={scrollToForm} 
                className="group w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 bg-[#1A1918] text-white font-medium rounded-xl transition-all duration-200 hover:bg-[#2D2C2A] active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  Gratis demo aanvragen
                  <svg 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <button
                onClick={scrollToDemo}
                className="group w-full sm:w-auto px-6 py-3 sm:py-3.5 text-[#5C5955] font-medium rounded-xl transition-all duration-200 hover:text-[#1A1918] hover:bg-white/50"
              >
                <span className="flex items-center justify-center gap-1.5">
                  Bekijk hoe het werkt
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="transition-transform group-hover:translate-y-0.5"
                  >
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Flow cards - refined Norwegian style */}
          <div className="mt-12 sm:mt-16 md:mt-24 relative max-w-3xl mx-auto animate-fade-in-up delay-500">
            <div className="flex flex-col md:flex-row items-center justify-center gap-2.5 sm:gap-3 md:gap-4">
              
              {/* Card 1 - Missed call */}
              <div className="w-full md:w-auto bg-white rounded-xl border border-[#E8E6E1] p-3.5 sm:p-4 transform md:-rotate-1 hover:rotate-0 transition-all duration-300 hover:border-[#D4D2CD]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-red-400 sm:w-4 sm:h-4">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 5l6 6M21 5l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-sm font-medium text-[#1A1918]">Gemiste oproep</p>
                    <p className="text-[11px] sm:text-xs text-[#A8A5A0]">+31 6 1234 5678</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#D4D2CD]">
                  <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex md:hidden items-center justify-center h-3">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#D4D2CD] rotate-90">
                  <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Card 2 - Smakly */}
              <div className="w-full md:w-auto bg-gradient-to-br from-[#4F7DF3] to-[#6366F1] rounded-xl p-3.5 sm:p-4 transform hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                    <svg width="12" height="16" viewBox="0 0 20 28" fill="none" className="text-white sm:w-[14px] sm:h-[18px]">
                      <rect x="2" y="2" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <circle cx="10" cy="9" r="1.5" fill="currentColor"/>
                      <rect x="6" y="17" width="8" height="1.5" rx="0.75" fill="currentColor"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-sm font-medium text-white">Smakly neemt op</p>
                    <p className="text-[11px] sm:text-xs text-white/70">"Hoe kan ik helpen?"</p>
                  </div>
                </div>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex items-center justify-center w-6">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#D4D2CD]">
                  <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex md:hidden items-center justify-center h-3">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-[#D4D2CD] rotate-90">
                  <path d="M5 12H19M19 12L14 7M19 12L14 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Card 3 - Success */}
              <div className="w-full md:w-auto bg-white rounded-xl border border-[#E8E6E1] p-3.5 sm:p-4 transform md:rotate-1 hover:rotate-0 transition-all duration-300 hover:border-[#D4D2CD]">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="text-emerald-500 sm:w-4 sm:h-4">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[13px] sm:text-sm font-medium text-[#1A1918]">Afspraak gepland</p>
                    <p className="text-[11px] sm:text-xs text-[#A8A5A0]">Morgen 14:00</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Trust indicators - more minimal */}
          <div className="mt-10 sm:mt-14 md:mt-16 flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-[12px] sm:text-[13px] text-[#A8A5A0] animate-fade-in-up delay-600">
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              24/7 beschikbaar
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Binnen 5 sec
            </span>
            <span className="flex items-center gap-1.5 sm:gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="text-[#A8A5A0] sm:w-[14px] sm:h-[14px]">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" stroke="currentColor" strokeWidth="1.5"/>
              </svg>
              NL & EN
            </span>
          </div>

        </div>
      </div>

      {/* Scroll indicator - only on larger screens */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#D4D2CD]">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
}
