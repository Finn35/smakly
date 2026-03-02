import { useState, useEffect } from "react";
import Logo from "@/components/smakly/Logo";

export default function KlussenNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${
        scrolled ? "bg-white/90 backdrop-blur-xl border-b border-[#EBEBEB]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 sm:px-6 h-14 sm:h-[60px] flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Logo size="md" variant="default" showWordmark={true} withHat={true} />
        </a>
        <button
          onClick={scrollToForm}
          className="h-9 px-4 sm:px-5 bg-[#E84500] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
        >
          Klus plaatsen →
        </button>
      </div>
    </nav>
  );
}
