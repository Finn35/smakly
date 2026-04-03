import KlussenNavbar from "@/components/klussen/KlussenNavbar";
import JobForm from "@/components/klussen/JobForm";
import HowItWorks from "@/components/klussen/HowItWorks";
import Testimonials from "@/components/klussen/Testimonials";
import KlussenFooter from "@/components/klussen/KlussenFooter";

export default function SmaklyLanding() {
  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-white">
      <KlussenNavbar />

      <main>
        {/* ── Hero ── */}
        <section className="bg-white pt-18 sm:pt-24 pb-12 sm:pb-14 px-4 sm:px-5">
          <div className="max-w-lg mx-auto text-center">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FF6A00]/[0.07] border border-[#FF6A00]/20 text-[#FF6A00] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              Binnen 2 korte stappen
            </div>

            {/* Headline */}
            <h1 className="text-[2.35rem] sm:text-[3.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-3">
              Klus in huis?
              <br />
              <span className="text-[#FF6A00]">Ontvang direct een prijsindicatie</span>
            </h1>

            {/* Subtext */}
            <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed max-w-sm mx-auto mb-7 sm:mb-8">
              Beantwoord 2 korte vragen en ontvang snel een indicatie. Zonder gedoe, met snelle reactie.
            </p>

            {/* Primary CTA */}
            <div className="max-w-[500px] mx-auto mb-4">
              <button
                type="button"
                onClick={scrollToForm}
                className="w-full h-14 rounded-2xl bg-[#FF6A00] hover:bg-[#e85f00] text-white font-semibold text-base shadow-md transition-colors"
              >
                Ontvang prijsindicatie
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                Kost minder dan 1 minuut
              </p>
            </div>

            {/* Trust */}
            <div className="text-sm text-gray-500 mb-6">
              <p className="font-medium text-gray-700 mb-3">100+ klussen geholpen</p>
              <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6">
                {[
                  "Snelle reactie",
                  "Lokale vakmannen",
                  "Duidelijke prijsindicatie",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-2">
                    <span className="text-[#FF6A00] text-xs">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Multi-step form */}
            <JobForm />
          </div>
        </section>

        <HowItWorks />
        <Testimonials />

        {/* ── Final CTA ── */}
        <section className="py-16 sm:py-20 px-5 bg-white border-t border-gray-100 text-center">
          <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
              Snel weten waar je aan toe bent?
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Beantwoord 2 korte vragen en ontvang snel een indicatie
            </p>
            <button
              onClick={scrollToForm}
              className="bg-[#FF6A00] hover:bg-[#e85f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Ontvang prijsindicatie
            </button>
          </div>
        </section>
      </main>

      <KlussenFooter />
    </div>
  );
}
