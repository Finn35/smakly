import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Mail, Lock, Users } from 'lucide-react';

export default function Privacy() {
  const { t } = useLanguage();

  return (
    <div className="flex-1 py-16 bg-gradient-to-b from-[#FDF8F6] to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#E86A33]/10 mb-6">
              <Shield className="w-8 h-8 text-[#E86A33]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-[#3D2620] mb-4">
              {t('privacyTitle')}
            </h1>
          </div>

          {/* Content Card */}
          <div className="bg-white rounded-3xl shadow-lg border border-[#E6C4B3]/30 p-8 md:p-10 space-y-8">
            {/* Intro */}
            <p className="text-[#5F3A2D] text-lg leading-relaxed">
              {t('privacyIntro')}
            </p>

            {/* Collection */}
            <div className="bg-[#FDF8F6] rounded-2xl p-6 border border-[#E6C4B3]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <p className="text-[#5F3A2D] leading-relaxed">
                  {t('privacyCollect')}
                </p>
              </div>
            </div>

            {/* Usage */}
            <div>
              <h2 className="text-xl font-semibold text-[#3D2620] mb-4 font-sans">
                {t('privacyUseTitle')}
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E86A33]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#E86A33]" />
                  </div>
                  <span className="text-[#5F3A2D]">{t('privacyUse1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#E86A33]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-[#E86A33]" />
                  </div>
                  <span className="text-[#5F3A2D]">{t('privacyUse2')}</span>
                </li>
              </ul>
            </div>

            {/* Security */}
            <div className="bg-[#FDF8F6] rounded-2xl p-6 border border-[#E6C4B3]/30">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E86A33]/10 flex items-center justify-center flex-shrink-0">
                  <Lock className="w-5 h-5 text-[#E86A33]" />
                </div>
                <div className="space-y-3">
                  <p className="text-[#5F3A2D] leading-relaxed">
                    {t('privacyNoSell')}
                  </p>
                  <p className="text-[#5F3A2D] leading-relaxed">
                    {t('privacySecure')}
                  </p>
                </div>
              </div>
            </div>

            {/* Deletion */}
            <div className="bg-[#2A9D8F]/5 rounded-2xl p-6 border border-[#2A9D8F]/20">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#2A9D8F]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#2A9D8F]" />
                </div>
                <div>
                  <p className="text-[#5F3A2D] leading-relaxed mb-2">
                    {t('privacyDelete')}
                  </p>
                  <a 
                    href="mailto:info@smakly.nl" 
                    className="text-[#E86A33] font-semibold hover:underline"
                  >
                    info@smakly.nl
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
