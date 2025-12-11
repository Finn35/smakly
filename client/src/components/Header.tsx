import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Language } from '@/lib/translations';

export default function Header() {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string }[] = [
    { code: 'nl', label: 'NL' },
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E6C4B3]/30 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link href="/">
          <span className="text-2xl font-bold cursor-pointer text-[#E86A33]">
            Smakly
          </span>
        </Link>

        {/* Language Switcher */}
        <div className="flex gap-1">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              size="sm"
              onClick={() => setLanguage(lang.code)}
              className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                language === lang.code 
                  ? 'bg-[#E86A33] text-white hover:bg-[#D55A25]' 
                  : 'text-[#5F3A2D] hover:bg-[#F9EDE7] hover:text-[#E86A33]'
              }`}
            >
              {lang.label}
            </Button>
          ))}
        </div>
      </div>
    </header>
  );
}
