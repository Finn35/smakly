import { useState } from "react";
import Logo from "./Logo";
import { submitContactMessage } from "@/lib/supabase";

export default function Footer() {
  const [contactOpen, setContactOpen] = useState(false);
  const [formData, setFormData] = useState({ naam: "", email: "", bericht: "" });
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
      await submitContactMessage({ naam: formData.naam, email: formData.email, bericht: formData.bericht });
      setIsSubmitted(true);
      setFormData({ naam: "", email: "", bericht: "" });
      setTimeout(() => { setIsSubmitted(false); setContactOpen(false); }, 3000);
    } catch {
      setError("Er ging iets mis. Probeer het opnieuw.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-14 bg-[#1A1918] text-white">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-10">
          {/* Brand */}
          <div>
            <Logo size="sm" variant="white" />
            <p className="mt-3 text-sm text-white/50 leading-relaxed max-w-xs">
              Google Maps & Reviews automatisering voor vakmensen in Nederland.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Product</h4>
            <ul className="space-y-2">
              <li><button onClick={() => scrollTo("how-it-works")} className="text-sm text-white/60 hover:text-white transition-colors">Hoe werkt het</button></li>
              <li><button onClick={() => scrollTo("features")} className="text-sm text-white/60 hover:text-white transition-colors">Features</button></li>
            </ul>
          </div>

          {/* Bedrijf */}
          <div>
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-wider mb-3">Bedrijf</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setContactOpen(!contactOpen)}
                  className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  Contact
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`transition-transform duration-200 ${contactOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </li>
              <li><a href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy</a></li>
              <li><a href="/cookies" className="text-sm text-white/60 hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        {/* Expandable contact form */}
        {contactOpen && (
          <div className="mb-8 max-w-md mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-5 sm:p-6">
              <h3 className="text-base font-semibold text-white mb-1">Neem contact op</h3>
              <p className="text-xs text-white/40 mb-4">We reageren binnen 24 uur</p>

              {isSubmitted ? (
                <div className="py-6 text-center">
                  <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-400">
                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm text-white font-medium">Bedankt!</p>
                  <p className="text-xs text-white/50 mt-1">Je bericht is ontvangen.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  {error && (
                    <div className="p-2.5 bg-red-500/10 border border-red-500/20 rounded-xl text-red-300 text-sm">
                      {error}
                    </div>
                  )}
                  <div>
                    <label htmlFor="footer-naam" className="block text-xs font-medium text-white/60 mb-1">Naam</label>
                    <input
                      type="text"
                      id="footer-naam"
                      name="naam"
                      value={formData.naam}
                      onChange={handleChange}
                      required
                      placeholder="Je naam"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/25 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-email" className="block text-xs font-medium text-white/60 mb-1">E-mail</label>
                    <input
                      type="email"
                      id="footer-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="je@email.nl"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/25 focus:border-white/30 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="footer-bericht" className="block text-xs font-medium text-white/60 mb-1">Bericht</label>
                    <textarea
                      id="footer-bericht"
                      name="bericht"
                      value={formData.bericht}
                      onChange={handleChange}
                      required
                      placeholder="Waar kunnen we je mee helpen?"
                      rows={3}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-white/10 bg-white/5 text-white text-sm placeholder:text-white/25 focus:border-white/30 focus:outline-none resize-none transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 bg-[#4F7DF3] text-white text-sm font-semibold rounded-xl transition-all hover:bg-[#3B63D9] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Versturen...
                      </>
                    ) : "Verstuur bericht"}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/30">&copy; 2025 Smakly. Alle rechten voorbehouden.</p>
          <p className="text-xs text-white/30">Gebouwd in Nederland</p>
        </div>
      </div>
    </footer>
  );
}
