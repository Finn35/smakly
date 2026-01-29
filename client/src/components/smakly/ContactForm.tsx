import { useState } from "react";
import { submitSmaklyForm } from "@/lib/supabase";

interface FormData {
  naam: string;
  email: string;
  bedrijfstype: string;
  telefoonnummer: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    naam: "",
    email: "",
    bedrijfstype: "",
    telefoonnummer: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitSmaklyForm({
        naam: formData.naam,
        email: formData.email,
        bedrijfstype: formData.bedrijfstype,
        telefoonnummer: formData.telefoonnummer || undefined,
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const bedrijfstypes = [
    "Aannemer / Bouw",
    "Elektricien",
    "Loodgieter",
    "Schilder",
    "Hovenier / Tuinman",
    "Schoonmaak",
    "Klusjesman",
    "Fotograaf",
    "Coach / Trainer",
    "Consultant",
    "Anders",
  ];

  if (isSubmitted) {
    return (
      <section id="contact-form" className="py-16 sm:py-20 md:py-28 bg-white">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-xs mx-auto text-center">
            <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-4 sm:mb-5 rounded-full bg-emerald-50 flex items-center justify-center">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-600 sm:w-5 sm:h-5">
                <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1A1918] tracking-tight">
              Bedankt!
            </h2>
            <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm text-[#787571] leading-relaxed">
              Je aanvraag is ontvangen. We nemen zo snel mogelijk contact met je op.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="max-w-xs mx-auto">
          {/* Header */}
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#1A1918] tracking-tight">
              Vraag je demo aan
            </h2>
            <p className="mt-2 text-[13px] sm:text-sm text-[#787571]">
              We nemen binnen 24 uur contact op
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
            {/* Error message */}
            {error && (
              <div className="p-2.5 sm:p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-[13px] sm:text-sm">
                {error}
              </div>
            )}

            {/* Naam */}
            <div>
              <label htmlFor="naam" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                Naam
              </label>
              <input
                type="text"
                id="naam"
                name="naam"
                value={formData.naam}
                onChange={handleChange}
                required
                placeholder="Je volledige naam"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#A8A5A0] focus:outline-none"
              />
            </div>

            {/* E-mail */}
            <div>
              <label htmlFor="email" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
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
                className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#A8A5A0] focus:outline-none"
              />
            </div>

            {/* Bedrijfstype */}
            <div>
              <label htmlFor="bedrijfstype" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                Bedrijfstype
              </label>
              <select
                id="bedrijfstype"
                name="bedrijfstype"
                value={formData.bedrijfstype}
                onChange={handleChange}
                required
                className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm transition-colors duration-200 focus:border-[#A8A5A0] focus:outline-none appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%23A8A5A0' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "right 12px center",
                }}
              >
                <option value="" disabled className="text-[#A8A5A0]">
                  Selecteer je branche
                </option>
                {bedrijfstypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Telefoonnummer */}
            <div>
              <label htmlFor="telefoonnummer" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                Telefoonnummer <span className="text-[#A8A5A0] font-normal">(optioneel)</span>
              </label>
              <input
                type="tel"
                id="telefoonnummer"
                name="telefoonnummer"
                value={formData.telefoonnummer}
                onChange={handleChange}
                placeholder="06 12345678"
                className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors duration-200 focus:border-[#A8A5A0] focus:outline-none"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-2.5 bg-[#1A1918] text-white text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#2D2C2A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Versturen...
                </>
              ) : (
                "Demo aanvragen"
              )}
            </button>

            {/* Privacy note */}
            <p className="text-[11px] sm:text-xs text-[#A8A5A0] text-center pt-1">
              Door in te vullen ga je akkoord met ons{" "}
              <a href="/privacy" className="text-[#787571] hover:text-[#434240] underline underline-offset-2">
                privacybeleid
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
