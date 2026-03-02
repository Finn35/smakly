import { useState, useEffect } from "react";
import Logo from "@/components/smakly/Logo";

export default function KlussenNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollToForm = () => {
    document.getElementById("job-form")?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow ${
        scrolled ? "shadow-sm" : ""
      } border-b border-gray-100`}
    >
      <div className="max-w-2xl mx-auto px-5 h-14 sm:h-16 flex items-center justify-between">
        <a href="/" className="flex items-center">
          <Logo size="md" variant="default" showWordmark={true} withHat={true} />
        </a>
        <button
          onClick={scrollToForm}
          className="h-9 px-5 bg-[#FF6A00] hover:bg-[#e85f00] text-white text-sm font-semibold rounded-lg transition-colors"
        >
          Klus plaatsen →
        </button>
      </div>
    </nav>
  );
}
