import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "Features", target: "features" },
    { label: "Hoe werkt het", target: "how-it-works" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E8E6E1]/50 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          <a href="/" className="group">
            <Logo size="sm" variant="default" className="sm:hidden" />
            <Logo size="md" variant="default" className="hidden sm:flex" />
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="text-sm text-[#787571] hover:text-[#1A1918] transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <button
              onClick={() => scrollTo("lead-form")}
              className="hidden sm:block px-4 py-2 bg-[#4F7DF3] text-white text-sm font-semibold rounded-lg transition-all duration-200 hover:bg-[#3B63D9] active:scale-[0.98] shadow-sm"
            >
              Gratis Analyse
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-[#5C5955] hover:text-[#1A1918] transition-colors"
              aria-label="Menu"
            >
              {menuOpen ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-[#E8E6E1] animate-fade-in">
          <div className="container mx-auto px-5 py-4 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className="block w-full text-left px-3 py-3 text-sm text-[#5C5955] hover:text-[#1A1918] hover:bg-[#FAF9F7] rounded-lg transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("lead-form")}
              className="w-full mt-2 px-4 py-3 bg-[#4F7DF3] text-white text-sm font-semibold rounded-lg transition-all hover:bg-[#3B63D9]"
            >
              Gratis Analyse
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
