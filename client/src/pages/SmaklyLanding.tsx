import KlussenNavbar from "@/components/klussen/KlussenNavbar";
import JobForm from "@/components/klussen/JobForm";
import HowItWorks from "@/components/klussen/HowItWorks";
import Testimonials from "@/components/klussen/Testimonials";
import KlussenFooter from "@/components/klussen/KlussenFooter";
import { trackWhatsappClick } from "@/lib/supabase";
import { MessageCircle } from "lucide-react";
import { toast } from "sonner";

declare const gtag: (...args: unknown[]) => void;

export default function SmaklyLanding() {
  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const handleHeroWaClick = () => {
    toast("WhatsApp wordt binnenkort geactiveerd! Vul ondertussen het formulier in.");
    trackWhatsappClick('hero').catch((error) => {
      console.error("Error tracking WhatsApp click:", error);
    });
    scrollToForm();
    if (typeof gtag !== "undefined") {
      gtag("event", "whatsapp_interest", { event_category: "engagement", event_label: "hero" });
    }
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
              Voor de kleine klussen die blijven liggen
            </div>

            {/* Headline */}
            <h1 className="text-[2.35rem] sm:text-[3.5rem] font-bold text-gray-900 leading-[1.05] tracking-tight mb-3">
              Klein klusje?
              <br />
              <span className="text-[#FF6A00]">Morgen</span> geregeld.
            </h1>

            {/* Subtext */}
            <p className="text-[15px] sm:text-base text-gray-500 leading-relaxed max-w-sm mx-auto mb-7 sm:mb-8">
              Lekkende kraan, kapot slot, IKEA kast — kleine klussen die blijven liggen. Beschrijf je klus, wij regelen een vakman bij jou in de buurt.
            </p>

            {/* WhatsApp CTA */}
            <div className="max-w-[500px] mx-auto mb-4">
              <button
                type="button"
                onClick={handleHeroWaClick}
                className="w-full h-14 rounded-2xl bg-[#25D366] hover:bg-[#20be5c] text-white font-semibold text-base shadow-md transition-colors"
              >
                <span className="flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Liever via WhatsApp?
                </span>
              </button>
              <p className="text-center text-xs text-gray-400 mt-2">
                Binnenkort actief. Gebruik voorlopig het formulier hieronder.
              </p>
            </div>

            {/* Multi-step form */}
            <JobForm />

            {/* Boutique trust badges */}
            <div className="grid grid-cols-1 sm:flex sm:flex-wrap justify-center gap-3 sm:gap-6 pt-7 sm:pt-8 border-t border-gray-100 mt-2">
              {[
                { icon: "✦", text: "Persoonlijk geselecteerde vakmensen" },
                { icon: "✦", text: "Gratis & vrijblijvend" },
                { icon: "✦", text: "Reactie binnen 2 uur" },
              ].map((b) => (
                <div key={b.text} className="flex items-center justify-center gap-2 text-sm text-gray-500">
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
              Nog een klusje<br />dat blijft liggen?
            </h2>
            <p className="text-gray-500 text-sm mb-7">
              Gratis plaatsen · Geen verplichtingen · Reactie binnen 2 uur
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
