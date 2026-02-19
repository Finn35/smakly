import { useState } from "react";
import { submitLead } from "@/lib/supabase";

interface FormData {
  business_name: string;
  maps_url: string;
  email: string;
  phone: string;
}

export default function LeadForm() {
  const [formData, setFormData] = useState<FormData>({
    business_name: "",
    maps_url: "",
    email: "",
    phone: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitLead({
        business_name: formData.business_name,
        maps_url: formData.maps_url,
        email: formData.email,
        phone: formData.phone || undefined,
      });
      setIsSubmitted(true);
    } catch {
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="lead-form" className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-14 h-14 mx-auto mb-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-emerald-600">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#1A1918] tracking-tight">
              Bedankt!
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#787571] leading-relaxed">
              Je aanvraag is ontvangen. We sturen je analyse binnen 24 uur per e-mail.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
              Ontvang een gratis Google Analyse
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571]">
              We sturen binnen 24 uur een duidelijke analyse van je Google Maps profiel.
            </p>
          </div>

          <div className="bg-[#FAF9F7] rounded-2xl p-6 sm:p-8 border border-[#E8E6E1]/60">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {error && (
                <div className="p-3 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="business_name" className="block text-sm font-medium text-[#434240] mb-1.5">
                  Bedrijfsnaam
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  value={formData.business_name}
                  onChange={handleChange}
                  required
                  placeholder="Bijv. Schildersbedrijf Jansen"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#4F7DF3] focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="maps_url" className="block text-sm font-medium text-[#434240] mb-1.5">
                  Google Maps link
                </label>
                <input
                  type="url"
                  id="maps_url"
                  name="maps_url"
                  value={formData.maps_url}
                  onChange={handleChange}
                  required
                  placeholder="https://maps.google.com/..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#4F7DF3] focus:outline-none shadow-sm"
                />
                <p className="mt-1 text-[11px] text-[#A8A5A0]">
                  Zoek je bedrijf op Google Maps en kopieer de link uit je browser.
                </p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#434240] mb-1.5">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="je@email.nl"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#4F7DF3] focus:outline-none shadow-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#434240] mb-1.5">
                  Telefoonnummer <span className="text-[#A8A5A0] font-normal">(optioneel)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="06 12345678"
                  className="w-full px-4 py-3 rounded-xl border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#4F7DF3] focus:outline-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-[#4F7DF3] text-white text-sm font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B63D9] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Versturen...
                  </>
                ) : (
                  "Analyse aanvragen"
                )}
              </button>

              <p className="text-[11px] sm:text-xs text-[#A8A5A0] text-center pt-1">
                Gratis en vrijblijvend. Door in te vullen ga je akkoord met ons{" "}
                <a href="/privacy" className="text-[#787571] hover:text-[#434240] underline underline-offset-2">
                  privacybeleid
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
