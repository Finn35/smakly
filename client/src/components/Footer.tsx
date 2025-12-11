import { Link } from 'wouter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { submitContactForm } from '@/lib/supabase';
import { Send, Check } from 'lucide-react';

export default function Footer() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');

  const content = {
    contact: { nl: 'Contact', en: 'Contact', tr: 'İletişim' },
    contactUs: { nl: 'Neem contact op', en: 'Contact us', tr: 'Bize ulaşın' },
    name: { nl: 'Naam', en: 'Name', tr: 'İsim' },
    email: { nl: 'E-mail', en: 'Email', tr: 'E-posta' },
    message: { nl: 'Bericht', en: 'Message', tr: 'Mesaj' },
    send: { nl: 'Versturen', en: 'Send', tr: 'Gönder' },
    sending: { nl: 'Versturen...', en: 'Sending...', tr: 'Gönderiliyor...' },
    thankYou: { nl: 'Bedankt! We nemen snel contact op.', en: 'Thank you! We\'ll be in touch soon.', tr: 'Teşekkürler! Yakında iletişime geçeceğiz.' },
    required: { nl: 'Vul alle velden in', en: 'Please fill all fields', tr: 'Lütfen tüm alanları doldurun' },
    allRights: { nl: 'Alle rechten voorbehouden', en: 'All rights reserved', tr: 'Tüm hakları saklıdır' },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.message) {
      setError(content.required[language]);
      return;
    }

    setIsSubmitting(true);
    try {
      await submitContactForm(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#3D2620] text-white mt-auto">
      <div className="container mx-auto py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-3">
            <span className="text-lg font-bold text-[#F4A261]">Smakly</span>
            <span className="text-[#B8785C] text-xs">
              © {new Date().getFullYear()} {content.allRights[language]}
            </span>
          </div>
          
          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy">
              <span className="text-[#E6C4B3] hover:text-[#F4A261] cursor-pointer transition-colors">
                {t('privacy')}
              </span>
            </Link>
            <Link href="/cookies">
              <span className="text-[#E6C4B3] hover:text-[#F4A261] cursor-pointer transition-colors">
                {t('cookies')}
              </span>
            </Link>
            <button
              onClick={() => { setIsOpen(!isOpen); setIsSubmitted(false); }}
              className="text-[#E6C4B3] hover:text-[#F4A261] transition-colors"
            >
              {content.contact[language]}
            </button>
          </div>
        </div>

        {/* Contact Form - Expandable */}
        {isOpen && (
          <div className="mt-5 pt-5 border-t border-[#5F3A2D]">
            {isSubmitted ? (
              <div className="flex items-center justify-center gap-2 py-4 text-[#2A9D8F]">
                <Check className="w-5 h-5" />
                <span className="text-sm">{content.thankYou[language]}</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                <p className="text-sm text-[#E6C4B3] mb-3 text-center">{content.contactUs[language]}</p>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    placeholder={content.name[language]}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="px-3 py-2 text-sm rounded-lg bg-[#5F3A2D] border border-[#7D4A38] text-white placeholder-[#B8785C] focus:outline-none focus:border-[#F4A261]"
                  />
                  <input
                    type="email"
                    placeholder={content.email[language]}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="px-3 py-2 text-sm rounded-lg bg-[#5F3A2D] border border-[#7D4A38] text-white placeholder-[#B8785C] focus:outline-none focus:border-[#F4A261]"
                  />
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder={content.message[language]}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-[#5F3A2D] border border-[#7D4A38] text-white placeholder-[#B8785C] focus:outline-none focus:border-[#F4A261]"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-4 py-2 bg-[#E86A33] hover:bg-[#D55A25] text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? content.sending[language] : <><Send className="w-4 h-4" /></>}
                  </button>
                </div>
                {error && <p className="text-red-400 text-xs mt-2 text-center">{error}</p>}
              </form>
            )}
          </div>
        )}
      </div>
    </footer>
  );
}
