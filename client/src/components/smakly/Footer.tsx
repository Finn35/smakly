import { useState } from "react";
import Logo from "./Logo";
import { submitContactMessage } from "@/lib/supabase";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    bericht: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      await submitContactMessage({
        naam: formData.naam,
        email: formData.email,
        bericht: formData.bericht,
      });
      setIsSubmitted(true);
      setFormData({ naam: "", email: "", bericht: "" });
      // Close modal after 2 seconds on success
      setTimeout(() => {
        setIsModalOpen(false);
        setIsSubmitted(false);
      }, 2000);
    } catch (err) {
      console.error("Contact form error:", err);
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError(null);
  };

  return (
    <>
      <footer className="py-8 sm:py-10 bg-[#FAF9F7] border-t border-[#E8E6E1]">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6">
            {/* Logo */}
            <Logo size="sm" variant="default" />

            {/* Links */}
            <div className="flex items-center gap-5 sm:gap-6 text-[11px] sm:text-xs">
              <a href="/privacy" className="text-[#A8A5A0] hover:text-[#5C5955] transition-colors">
                Privacy
              </a>
              <a href="/cookies" className="text-[#A8A5A0] hover:text-[#5C5955] transition-colors">
                Cookies
              </a>
              <button 
                onClick={() => setIsModalOpen(true)}
                className="text-[#A8A5A0] hover:text-[#5C5955] transition-colors"
              >
                Contact
              </button>
            </div>

            {/* Copyright */}
            <p className="text-[11px] sm:text-xs text-[#A8A5A0]">
              © 2025 Smakly
            </p>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          
          {/* Modal */}
          <div 
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-sm sm:max-w-md p-5 sm:p-6 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3.5 sm:top-4 right-3.5 sm:right-4 text-[#A8A5A0] hover:text-[#5C5955] transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="sm:w-5 sm:h-5">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Header */}
            <div className="mb-5 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-[#1A1918]">
                Neem contact op
              </h2>
              <p className="text-[13px] sm:text-sm text-[#787571] mt-1">
                We reageren binnen 24 uur
              </p>
            </div>

            {isSubmitted ? (
              <div className="py-6 sm:py-8 text-center">
                <div className="w-11 h-11 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-emerald-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-600 sm:w-5 sm:h-5">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-[#1A1918] font-medium">Bedankt!</p>
                <p className="text-[13px] sm:text-sm text-[#787571] mt-1">We nemen snel contact op.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5 sm:space-y-4">
                {error && (
                  <div className="p-2.5 sm:p-3 bg-red-50 border border-red-100 rounded-lg text-red-600 text-[13px] sm:text-sm">
                    {error}
                  </div>
                )}
                
                <div>
                  <label htmlFor="contact-naam" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                    Naam
                  </label>
                  <input
                    type="text"
                    id="contact-naam"
                    name="naam"
                    value={formData.naam}
                    onChange={handleChange}
                    required
                    placeholder="Je naam"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors focus:border-[#A8A5A0] focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="je@email.nl"
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors focus:border-[#A8A5A0] focus:outline-none"
                  />
                </div>
                
                <div>
                  <label htmlFor="contact-bericht" className="block text-[13px] sm:text-sm font-medium text-[#434240] mb-1.5">
                    Bericht
                  </label>
                  <textarea
                    id="contact-bericht"
                    name="bericht"
                    value={formData.bericht}
                    onChange={handleChange}
                    required
                    placeholder="Waar kunnen we je mee helpen?"
                    rows={3}
                    className="w-full px-3 py-2.5 rounded-lg border border-[#E8E6E1] bg-white text-[#1A1918] text-sm placeholder:text-[#A8A5A0] transition-colors focus:border-[#A8A5A0] focus:outline-none resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-[#1A1918] text-white text-sm font-medium rounded-lg transition-all hover:bg-[#2D2C2A] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      Versturen...
                    </>
                  ) : (
                    "Verstuur bericht"
                  )}
                </button>
              </form>
            )}

            {/* Email alternative */}
            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#E8E6E1] text-center">
              <p className="text-[11px] sm:text-xs text-[#A8A5A0]">
                Of mail direct naar{" "}
                <a href="mailto:hallo@smakly.nl" className="text-[#787571] hover:text-[#1A1918] transition-colors">
                  hallo@smakly.nl
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
