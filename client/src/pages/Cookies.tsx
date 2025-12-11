import { useLanguage } from '@/contexts/LanguageContext';
import { Cookie, Settings, BarChart3 } from 'lucide-react';

export default function Cookies() {
  const { t } = useLanguage();

  return (
    <div className="flex-1 py-16 bg-gradient-to-b from-[#FDF8F6] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E86A33]/10 mb-6">
              <Cookie className="w-8 h-8 text-[#E86A33]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3D2620] mb-4">
              {t('cookieTitle')}
            </h1>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#E6C4B3]/30 p-8 md:p-10 space-y-8">
            {/* Main content */}
            <p className="text-[#5F3A2D] text-lg leading-relaxed">
              {t('cookieContent')}
            </p>

            {/* Info cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-[#FDF8F6] rounded-2xl p-6 border border-[#E6C4B3]/30">
                <div className="w-12 h-12 rounded-xl bg-[#2A9D8F]/10 flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6 text-[#2A9D8F]" />
                </div>
                <h3 className="text-lg font-semibold text-[#3D2620] mb-2 font-sans">
                  {t('cookies') === 'Çerezler' ? 'İşlevsel Çerezler' : t('cookies') === 'Cookies' ? 'Functional Cookies' : 'Functionele Cookies'}
                </h3>
                <p className="text-[#5F3A2D] text-sm leading-relaxed">
                  {t('cookies') === 'Çerezler' 
                    ? 'Web sitemizin düzgün çalışmasını sağlar.'
                    : t('cookies') === 'Cookies' 
                    ? 'Ensure our website works correctly.'
                    : 'Zorgen ervoor dat onze website correct werkt.'}
                </p>
              </div>

              <div className="bg-[#FDF8F6] rounded-2xl p-6 border border-[#E6C4B3]/30">
                <div className="w-12 h-12 rounded-xl bg-[#E86A33]/10 flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#E86A33]" />
                </div>
                <h3 className="text-lg font-semibold text-[#3D2620] mb-2 font-sans">
                  {t('cookies') === 'Çerezler' ? 'Analitik Çerezler' : t('cookies') === 'Cookies' ? 'Analytics Cookies' : 'Analytische Cookies'}
                </h3>
                <p className="text-[#5F3A2D] text-sm leading-relaxed">
                  {t('cookies') === 'Çerezler' 
                    ? 'Anonim ziyaret istatistikleri toplar.'
                    : t('cookies') === 'Cookies' 
                    ? 'Collect anonymous visit statistics.'
                    : 'Verzamelen anonieme bezoekstatistieken.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
