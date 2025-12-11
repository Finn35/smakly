import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Check, Clock, Shield, Sparkles, ArrowRight, Star, Lock, Zap, Wrench } from 'lucide-react';
import { submitForm } from '@/lib/supabase';
import { useState } from 'react';
import { toast } from 'sonner';

export default function Home() {
  const { t, language } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    serviceType: '',
    serviceTypeOther: '',
    urgency: '',
    description: '',
    postcode: '',
    languagePreference: '',
    languagePreferenceOther: '',
    name: '',
    email: '',
    phone: '',
    // Honeypot field - should remain empty (bots will fill it)
    website: '',
  });

  // Track when form was loaded (bots submit too fast)
  const [formLoadTime] = useState(() => Date.now());

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Calculate form progress
  const calculateProgress = () => {
    const fields = [
      formData.serviceType,
      formData.urgency,
      formData.postcode,
      formData.languagePreference,
      formData.name,
      formData.email,
    ];
    const filledFields = fields.filter(field => field.trim() !== '').length;
    return Math.round((filledFields / fields.length) * 100);
  };

  const progress = calculateProgress();

  // Progress messages
  const getProgressMessage = () => {
    if (progress === 0) return { nl: 'Begin met invullen', en: 'Start filling in', tr: 'Doldurmaya başlayın' };
    if (progress < 50) return { nl: 'Goed bezig!', en: 'Good start!', tr: 'İyi gidiyorsun!' };
    if (progress < 100) return { nl: 'Bijna klaar!', en: 'Almost there!', tr: 'Neredeyse bitti!' };
    return { nl: 'Klaar om te versturen!', en: 'Ready to submit!', tr: 'Göndermeye hazır!' };
  };

  const serviceTypes = [
    { value: 'plumber', label: t('servicePlumber') },
    { value: 'electrical', label: t('serviceElectrical') },
    { value: 'painting', label: t('servicePainting') },
    { value: 'furniture', label: t('serviceFurniture') },
    { value: 'repairs', label: t('serviceRepairs') },
    { value: 'other', label: t('serviceOther') },
  ];

  const urgencyLevels = [
    { value: 'today', label: t('urgencyToday') },
    { value: 'week', label: t('urgencyWeek') },
    { value: 'not-urgent', label: t('urgencyNotUrgent') },
  ];

  const languagePreferences = [
    { value: 'dutch', label: t('langDutch') },
    { value: 'english', label: t('langEnglish') },
    { value: 'turkish', label: t('langTurkish') },
    { value: 'polish', label: t('langPolish') },
    { value: 'romanian', label: language === 'nl' ? 'Roemeens' : language === 'en' ? 'Romanian' : 'Romence' },
    { value: 'no-preference', label: language === 'nl' ? 'Geen voorkeur' : language === 'en' ? 'No preference' : 'Tercih yok' },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.serviceType) newErrors.serviceType = t('required');
    if (formData.serviceType === 'other' && !formData.serviceTypeOther) newErrors.serviceTypeOther = t('required');
    if (!formData.urgency) newErrors.urgency = t('required');
    if (!formData.postcode) newErrors.postcode = t('required');
    if (!formData.languagePreference) newErrors.languagePreference = t('required');
    if (!formData.name) newErrors.name = t('required');
    if (!formData.email) {
      newErrors.email = t('required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t('emailInvalid');
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Bot detection: honeypot field should be empty
    if (formData.website) {
      // Silently reject - don't tell bots they were caught
      setIsSubmitted(true);
      return;
    }

    // Bot detection: form submitted too fast (less than 3 seconds)
    const timeSpent = Date.now() - formLoadTime;
    if (timeSpent < 3000) {
      // Silently reject - humans can't fill form in under 3 seconds
      setIsSubmitted(true);
      return;
    }

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await submitForm({
        service_type: formData.serviceType,
        service_type_other: formData.serviceTypeOther,
        urgency: formData.urgency,
        description: formData.description,
        postcode: formData.postcode,
        language_preference: formData.languagePreference,
        language_preference_other: formData.languagePreferenceOther,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
      });
      setIsSubmitted(true);
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewRequest = () => {
    setIsSubmitted(false);
    setFormData({
      serviceType: '', serviceTypeOther: '', urgency: '', description: '', postcode: '',
      languagePreference: '', languagePreferenceOther: '', name: '', email: '', phone: '',
      website: '',
    });
    setErrors({});
  };

  const benefits = [
    { icon: Shield, text: t('bullet1') },  // Trusted local professionals
    { icon: Clock, text: t('bullet2') },   // Fast responses
    { icon: Check, text: t('bullet4') },   // No surprises
  ];

  const trustText = {
    fast: { nl: 'Binnen 1 minuut aangevraagd', en: 'Request in under 1 minute', tr: '1 dakikada talep edin' },
    secure: { nl: 'Gegevens worden veilig verwerkt', en: 'Data processed securely', tr: 'Veriler güvenle işlenir' },
  };

  // Thank you content
  const thankYouContent = {
    title: { nl: 'Bedankt!', en: 'Thank you!', tr: 'Teşekkürler!' },
    message: {
      nl: 'We hebben je aanvraag ontvangen.\nMeestal reageren onze vakmensen binnen 30–60 minuten.\nJe ontvangt een bevestiging per e-mail.',
      en: 'We have received your request.\nOur professionals usually respond within 30–60 minutes.\nYou will receive a confirmation by email.',
      tr: 'Talebinizi aldık.\nUstalarımız genellikle 30–60 dakika içinde yanıt verir.\nE-posta ile onay alacaksınız.',
    },
    newRequest: { nl: 'Nieuwe aanvraag', en: 'New request', tr: 'Yeni talep' },
    backHome: { nl: 'Terug naar home', en: 'Back to home', tr: 'Ana sayfaya dön' },
    reassurance: {
      secure: { nl: 'Gegevens zijn veilig', en: 'Data is secure', tr: 'Veriler güvende' },
      fast: { nl: 'Snelle reactie', en: 'Fast response', tr: 'Hızlı yanıt' },
      local: { nl: 'Lokale vakmensen', en: 'Local professionals', tr: 'Yerel ustalar' },
    },
  };

  // Thank You State
  if (isSubmitted) {
    return (
      <div className="flex-1 flex items-center justify-center py-12 bg-[#FFFBF8]">
        <div className="bg-white rounded-2xl shadow-md p-8 text-center max-w-sm mx-4 border border-[#E6C4B3]/30">
          {/* Success icon with pulse animation */}
          <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-[#2A9D8F]/10 flex items-center justify-center animate-[pulse_2s_ease-in-out_1]">
            <div className="w-12 h-12 rounded-full bg-[#2A9D8F]/20 flex items-center justify-center animate-[fadeIn_0.5s_ease-out]">
              <Check className="w-6 h-6 text-[#2A9D8F]" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold text-[#3D2620] mb-3">
            {thankYouContent.title[language]}
          </h2>

          {/* Message */}
          <p className="text-[#5F3A2D] text-sm leading-relaxed mb-6 whitespace-pre-line">
            {thankYouContent.message[language]}
          </p>

          {/* Reassurance row */}
          <div className="flex justify-center gap-4 mb-6 py-4 border-t border-b border-[#E6C4B3]/30">
            <div className="flex flex-col items-center gap-1">
              <Lock className="w-4 h-4 text-[#2A9D8F]" />
              <span className="text-xs text-[#7D4A38]">{thankYouContent.reassurance.secure[language]}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Zap className="w-4 h-4 text-[#E86A33]" />
              <span className="text-xs text-[#7D4A38]">{thankYouContent.reassurance.fast[language]}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Wrench className="w-4 h-4 text-[#5F3A2D]" />
              <span className="text-xs text-[#7D4A38]">{thankYouContent.reassurance.local[language]}</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <Button
              onClick={handleNewRequest}
              className="w-full bg-[#E86A33] hover:bg-[#D55A25] text-white font-medium h-10 rounded-lg"
            >
              {thankYouContent.newRequest[language]}
            </Button>
            <button
              onClick={() => {
                setIsSubmitted(false);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-sm text-[#7D4A38] hover:text-[#E86A33] transition-colors"
            >
              {thankYouContent.backHome[language]}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#FFFBF8]">
      <div className="container py-6 lg:py-10">
        {/* Hero - Compact */}
        <div className="text-center mb-6 max-w-xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#3D2620] mb-2">
            {t('headline')}
          </h1>
          <p className="text-sm text-[#5F3A2D]">
            {t('subheadline')}
          </p>
        </div>

        {/* Benefits - Horizontal above form */}
        <div className="flex flex-wrap justify-center gap-x-4 sm:gap-x-6 gap-y-2 mb-6">
          {benefits.map((item, i) => (
            <div key={i} className="flex items-center gap-1.5 text-xs sm:text-sm text-[#5F3A2D]">
              <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E86A33] flex-shrink-0" />
              <span>{item.text}</span>
            </div>
          ))}
        </div>

        {/* Form Card */}
        <div className="max-w-lg mx-auto">
          <div className="bg-white rounded-2xl shadow-md p-5 sm:p-6 border border-[#E6C4B3]/30">
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-base font-semibold text-[#3D2620]">
                  {t('formTitle')}
                </h2>
                <span className="text-xs font-medium text-[#E86A33]">
                  {getProgressMessage()[language]}
                </span>
              </div>
              
              {/* Progress bar */}
              <div className="h-1.5 bg-[#F2DDD3] rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#E86A33] to-[#2A9D8F] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Honeypot field - hidden from users, bots will fill it */}
              <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" tabIndex={-1}>
                <label htmlFor="website">Website</label>
                <input
                  type="text"
                  id="website"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>

              {/* Service Type - Chips */}
              <div>
                <Label className="text-sm text-[#5F3A2D] mb-2 block">
                  {t('serviceTypeLabel')}
                </Label>
                <RadioGroup
                  value={formData.serviceType}
                  onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
                  className="flex flex-wrap gap-2"
                >
                  {serviceTypes.map((service) => (
                    <div key={service.value}>
                      <RadioGroupItem value={service.value} id={service.value} className="peer sr-only" />
                      <Label 
                        htmlFor={service.value} 
                        className="inline-flex px-3 py-1.5 text-sm rounded-full border border-[#E6C4B3] cursor-pointer hover:border-[#E86A33] peer-data-[state=checked]:border-[#E86A33] peer-data-[state=checked]:bg-[#E86A33] peer-data-[state=checked]:text-white transition-all"
                      >
                        {service.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {formData.serviceType === 'other' && (
                  <Input
                    placeholder={t('otherPlaceholder')}
                    value={formData.serviceTypeOther}
                    onChange={(e) => setFormData({ ...formData, serviceTypeOther: e.target.value })}
                    className="mt-2 h-9 text-sm rounded-lg border-[#E6C4B3]"
                  />
                )}
                {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
              </div>

              {/* Urgency - Chips */}
              <div>
                <Label className="text-sm text-[#5F3A2D] mb-2 block">
                  {t('urgencyLabel')}
                </Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                  className="flex flex-wrap gap-2"
                >
                  {urgencyLevels.map((level) => (
                    <div key={level.value}>
                      <RadioGroupItem value={level.value} id={level.value} className="peer sr-only" />
                      <Label 
                        htmlFor={level.value} 
                        className="inline-flex px-3 py-1.5 text-sm rounded-full border border-[#E6C4B3] cursor-pointer hover:border-[#E86A33] peer-data-[state=checked]:border-[#E86A33] peer-data-[state=checked]:bg-[#E86A33] peer-data-[state=checked]:text-white transition-all"
                      >
                        {level.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                {errors.urgency && <p className="text-red-500 text-xs mt-1">{errors.urgency}</p>}
              </div>

              {/* Problem Description - Optional */}
              <div>
                <Label htmlFor="description" className="text-sm text-[#5F3A2D] mb-1.5 block">
                  {language === 'nl' ? 'Omschrijf het probleem (optioneel)' : language === 'en' ? 'Describe the problem (optional)' : 'Sorunu açıklayın (isteğe bağlı)'}
                </Label>
                <textarea
                  id="description"
                  rows={2}
                  placeholder={language === 'nl' ? 'Korte omschrijving helpt ons de juiste vakman te vinden…' : language === 'en' ? 'Short description helps us match you to the right handyman…' : 'Kısa açıklama size doğru ustayı bulmamıza yardımcı olur…'}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-[#E6C4B3] bg-white focus:outline-none focus:border-[#E86A33] resize-none"
                />
                <p className="text-xs text-[#7D4A38] mt-1">
                  {language === 'nl' ? 'Bijv. "Mijn kraan lekt" of "IKEA kast monteren"' : language === 'en' ? 'E.g. "My tap is leaking" or "Assemble IKEA cabinet"' : 'Örn. "Musluğum akıyor" veya "IKEA dolap montajı"'}
                </p>
              </div>

              {/* Postcode + Language - 2 columns */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="postcode" className="text-sm text-[#5F3A2D] mb-1.5 block">
                    {t('postcodeLabel')}
                  </Label>
                  <Input
                    id="postcode"
                    placeholder="1234 AB"
                    value={formData.postcode}
                    onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                    className="h-9 text-sm rounded-lg border-[#E6C4B3]"
                  />
                  <p className="text-xs text-[#7D4A38] mt-1">
                    {language === 'nl' ? 'Bijv. 1234 AB' : language === 'en' ? 'E.g. 1234 AB' : 'Örn. 1234 AB'}
                  </p>
                  {errors.postcode && <p className="text-red-500 text-xs mt-1">{errors.postcode}</p>}
                </div>

                <div>
                  <Label htmlFor="languagePreference" className="text-sm text-[#5F3A2D] mb-1.5 block">
                    {t('languagePreferenceLabel')}
                  </Label>
                  <select
                    id="languagePreference"
                    value={formData.languagePreference}
                    onChange={(e) => setFormData({ ...formData, languagePreference: e.target.value })}
                    className="w-full h-9 px-3 text-sm rounded-lg border border-[#E6C4B3] bg-white focus:outline-none focus:border-[#E86A33]"
                  >
                    <option value="">{t('selectPlaceholder')}</option>
                    {languagePreferences.map((lang) => (
                      <option key={lang.value} value={lang.value}>{lang.label}</option>
                    ))}
                  </select>
                  {errors.languagePreference && <p className="text-red-500 text-xs mt-1">{errors.languagePreference}</p>}
                </div>
              </div>

              {/* Name + Email - 2 columns */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <Label htmlFor="name" className="text-sm text-[#5F3A2D] mb-1.5 block">
                    {t('nameLabel')}
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-9 text-sm rounded-lg border-[#E6C4B3]"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm text-[#5F3A2D] mb-1.5 block">
                    {t('emailLabel')}
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-9 text-sm rounded-lg border-[#E6C4B3]"
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone - Full width */}
              <div>
                <Label htmlFor="phone" className="text-sm text-[#5F3A2D] mb-1.5 block">
                  {t('phoneLabel')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="h-9 text-sm rounded-lg border-[#E6C4B3]"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-[#E86A33] hover:bg-[#D55A25] text-white font-semibold h-11 rounded-xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    {t('submitting')}
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    {t('submitButton')}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>

              {/* Trust indicators */}
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 pt-2 text-xs text-[#7D4A38]">
                <span className="flex items-center justify-center gap-1.5">
                  <Star className="w-3.5 h-3.5 text-[#E86A33]" />
                  {trustText.fast[language]}
                </span>
                <span className="flex items-center justify-center gap-1.5">
                  <Lock className="w-3.5 h-3.5 text-[#2A9D8F]" />
                  {trustText.secure[language]}
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
