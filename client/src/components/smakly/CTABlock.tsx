export default function CTABlock() {
  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F7]">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A1918] tracking-tight">
            Doe mee met de pilot
          </h2>

          <p className="mt-3 sm:mt-4 text-[13px] sm:text-sm text-[#787571] leading-relaxed">
            Wees een van de eerste ZZP'ers die profiteert van Smakly.
            <br className="hidden sm:block" />
            Beperkt aantal plekken beschikbaar.
          </p>

          <div className="mt-6 sm:mt-8">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto px-6 py-2.5 sm:py-3 bg-[#1A1918] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#2D2C2A] active:scale-[0.98]"
            >
              Gratis demo aanvragen
            </button>
          </div>

          {/* Trust elements */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-5 gap-y-1 text-[11px] sm:text-xs text-[#A8A5A0]">
            <span>Geen creditcard</span>
            <span className="text-[#D4D2CD]">·</span>
            <span>Gratis proefperiode</span>
            <span className="text-[#D4D2CD]">·</span>
            <span>5 min setup</span>
          </div>
        </div>
      </div>
    </section>
  );
}
