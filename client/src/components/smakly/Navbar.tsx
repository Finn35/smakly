import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById("contact-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-[#E8E6E1]/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18">
          {/* Logo */}
          <a href="/" className="group">
            <Logo size="sm" variant="default" className="sm:hidden" />
            <Logo size="md" variant="default" className="hidden sm:flex" />
          </a>

          {/* CTA Button */}
          <button
            onClick={scrollToForm}
            className="px-3.5 sm:px-4 py-2 bg-[#1A1918] text-white text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 hover:bg-[#2D2C2A] active:scale-[0.98]"
          >
            Demo aanvragen
          </button>
        </div>
      </div>
    </nav>
  );
}
