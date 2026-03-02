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
        <section className="bg-white pt-20 sm:pt-24 pb-14 px-5">
          <div className="max-w-lg mx-auto text-center">

            {/* Pill */}
            <div className="inline-flex items-center gap-2 bg-[#FF6A00]/[0.07] border border-[#FF6A00]/20 text-[#FF6A00] px-4 py-1.5 rounded-full text-xs font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] animate-pulse" />
              Klein klusje? Wij regelen het
            </div>

            {/* Headline */}
            <h1 className="text-[2.5rem] sm:text-[3.5rem] font-bold text-gray-900 leading-[1.08] tracking-tight mb-4">
              Klusser nodig?
              <br />
              <span className="text-[#FF6A00]">Vandaag</span> geregeld.
            </h1>

            {/* Subtext */}
            <p className="text-base text-gray-500 leading-relaxed max-w-sm mx-auto mb-8">
              Binnen 2 uur reactie van lokale vakmensen. Gratis klus plaatsen — geen verplichtingen.
            </p>

            {/* Multi-step form */}
            <JobForm />

            {/* Boutique trust badges */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-8 border-t border-gray-100 mt-2">
              {[
                { icon: "✦", text: "Persoonlijk geselecteerde vakmensen" },
                { icon: "✦", text: "Gratis & vrijblijvend" },
                { icon: "✦", text: "Reactie binnen 2 uur" },
              ].map((b) => (
                <div key={b.text} className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="text-[#FF6A00] text-xs">{b.icon}</span>
                  {b.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <HowItWorks />
        <Testimonials />

        {/* ── Final CTA ── */}
        <section className="py-16 sm:py-20 px-5 bg-white border-t border-gray-100 text-center">
          <div className="max-w-sm mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
              Klus te klaren?
              <br />Wij regelen het.
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Gratis · Geen verplichtingen · Reactie binnen 2 uur
            </p>
            <button
              onClick={scrollToForm}
              className="bg-[#FF6A00] hover:bg-[#e85f00] text-white font-semibold px-8 py-3.5 rounded-xl transition-colors shadow-sm"
            >
              Klus plaatsen →
            </button>
          </div>
        </section>
      </main>

      <KlussenFooter />
    </div>
  );
}
