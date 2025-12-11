import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cookie, X } from 'lucide-react';

const COOKIE_CONSENT_KEY = 'smakly-cookie-consent';

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay for better UX
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="container mx-auto">
        <div className="bg-[#3D2620] text-white rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border border-[#5F3A2D]">
          <div className="flex items-start gap-4 flex-1">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#E86A33]/20 items-center justify-center flex-shrink-0">
              <Cookie className="w-6 h-6 text-[#F4A261]" />
            </div>
            <p className="text-sm md:text-base text-[#E6C4B3] leading-relaxed">
              {t('cookieBannerText')}
            </p>
          </div>
          
          <div className="flex items-center gap-3 w-full md:w-auto">
            <Button
              onClick={handleAccept}
              className="flex-1 md:flex-none bg-[#E86A33] hover:bg-[#D55A25] text-white font-semibold px-8 py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {t('cookieAccept')}
            </Button>
            <button
              onClick={handleAccept}
              className="p-2 rounded-lg text-[#D4A088] hover:text-white hover:bg-[#5F3A2D] transition-colors md:hidden"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
