import KlussenNavbar from "@/components/klussen/KlussenNavbar";
import JobForm from "@/components/klussen/JobForm";
import HowItWorks from "@/components/klussen/HowItWorks";
import Categories from "@/components/klussen/Categories";
import LiveJobs from "@/components/klussen/LiveJobs";
import KlussenFooter from "@/components/klussen/KlussenFooter";

export default function SmaklyLanding() {
  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="min-h-screen bg-white">
      <KlussenNavbar />
      <main>
        {/* Hero */}
        <section className="max-w-[560px] mx-auto pt-20 sm:pt-24 pb-0 px-5 text-center">
          <div className="inline-flex items-center gap-1.5 bg-[#E84500]/[0.08] text-[#E84500] px-3 py-1.5 rounded-full text-xs font-semibold mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E84500] animate-pulse" />
            Klein klusje? Wij regelen het
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-[2.8rem] font-extrabold text-[#0C0C0C] leading-tight tracking-tight mb-4">
            Klusser nodig?
            <br />
            <span className="text-[#E84500]">Vandaag</span> geregeld.
          </h1>
          <p className="text-base text-[#6B6B6B] leading-relaxed max-w-[400px] mx-auto mb-9">
            Beschrijf je klus in 30 seconden. Wij zoeken een betrouwbare vakman bij jou in de buurt.
          </p>
          <JobForm />
        </section>

        <HowItWorks />
        <Categories />
        <LiveJobs />

        {/* Final CTA */}
        <section className="py-16 sm:py-20 px-5 text-center">
          <div className="max-w-[480px] mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0C0C0C] tracking-tight mb-2 leading-tight">
              Klus te klaren?
              <br />
              Wij regelen het.
            </h2>
            <p className="text-[#6B6B6B] text-sm sm:text-base mb-6">
              Gratis · Geen verplichtingen · Reactie binnen 2 uur
            </p>
            <button
              onClick={scrollToForm}
              className="px-9 py-4 bg-[#E84500] text-white font-bold rounded-full text-base hover:opacity-90 transition-opacity shadow-[0_4px_16px_rgba(232,69,0,0.3)]"
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
