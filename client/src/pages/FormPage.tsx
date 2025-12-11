import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { trpc } from '@/lib/trpc';
import { useState } from 'react';
import { useLocation } from 'wouter';
import { toast } from 'sonner';

export default function FormPage() {
  const { t } = useLanguage();
  const [, setLocation] = useLocation();
  const submitMutation = trpc.form.submit.useMutation();

  const [formData, setFormData] = useState({
    serviceType: '',
    serviceTypeOther: '',
    urgency: '',
    postcode: '',
    languagePreference: '',
    languagePreferenceOther: '',
    name: '',
    email: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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
    { value: 'arabic', label: t('langArabic') },
    { value: 'polish', label: t('langPolish') },
    { value: 'other', label: t('langOther') },
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.serviceType) {
      newErrors.serviceType = t('required');
    }
    if (formData.serviceType === 'other' && !formData.serviceTypeOther) {
      newErrors.serviceTypeOther = t('required');
    }
    if (!formData.urgency) {
      newErrors.urgency = t('required');
    }
    if (!formData.postcode) {
      newErrors.postcode = t('required');
    }
    if (!formData.languagePreference) {
      newErrors.languagePreference = t('required');
    }
    if (formData.languagePreference === 'other' && !formData.languagePreferenceOther) {
      newErrors.languagePreferenceOther = t('required');
    }
    if (!formData.name) {
      newErrors.name = t('required');
    }
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

    if (!validate()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    try {
      await submitMutation.mutateAsync(formData);
      toast.success('Form submitted successfully!');
      setLocation('/thank-you');
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    }
  };

  return (
    <div className="flex-1 py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            {t('formTitle')}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                {t('serviceTypeLabel')}
              </Label>
              <RadioGroup
                value={formData.serviceType}
                onValueChange={(value) => setFormData({ ...formData, serviceType: value })}
              >
                {serviceTypes.map((service) => (
                  <div key={service.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={service.value} id={service.value} />
                    <Label htmlFor={service.value} className="font-normal cursor-pointer">
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
                  className="mt-2"
                />
              )}
              {errors.serviceType && <p className="text-red-600 text-sm mt-1">{errors.serviceType}</p>}
              {errors.serviceTypeOther && <p className="text-red-600 text-sm mt-1">{errors.serviceTypeOther}</p>}
            </div>

            {/* Urgency */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                {t('urgencyLabel')}
              </Label>
              <RadioGroup
                value={formData.urgency}
                onValueChange={(value) => setFormData({ ...formData, urgency: value })}
              >
                {urgencyLevels.map((level) => (
                  <div key={level.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={level.value} id={level.value} />
                    <Label htmlFor={level.value} className="font-normal cursor-pointer">
                      {level.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {errors.urgency && <p className="text-red-600 text-sm mt-1">{errors.urgency}</p>}
            </div>

            {/* Postcode */}
            <div>
              <Label htmlFor="postcode" className="text-base font-semibold">
                {t('postcodeLabel')}
              </Label>
              <Input
                id="postcode"
                value={formData.postcode}
                onChange={(e) => setFormData({ ...formData, postcode: e.target.value })}
                className="mt-2"
              />
              {errors.postcode && <p className="text-red-600 text-sm mt-1">{errors.postcode}</p>}
            </div>

            {/* Language Preference */}
            <div>
              <Label className="text-base font-semibold mb-3 block">
                {t('languagePreferenceLabel')}
              </Label>
              <RadioGroup
                value={formData.languagePreference}
                onValueChange={(value) => setFormData({ ...formData, languagePreference: value })}
              >
                {languagePreferences.map((lang) => (
                  <div key={lang.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={lang.value} id={lang.value} />
                    <Label htmlFor={lang.value} className="font-normal cursor-pointer">
                      {lang.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              {formData.languagePreference === 'other' && (
                <Input
                  placeholder={t('otherPlaceholder')}
                  value={formData.languagePreferenceOther}
                  onChange={(e) => setFormData({ ...formData, languagePreferenceOther: e.target.value })}
                  className="mt-2"
                />
              )}
              {errors.languagePreference && <p className="text-red-600 text-sm mt-1">{errors.languagePreference}</p>}
              {errors.languagePreferenceOther && <p className="text-red-600 text-sm mt-1">{errors.languagePreferenceOther}</p>}
            </div>

            {/* Name */}
            <div>
              <Label htmlFor="name" className="text-base font-semibold">
                {t('nameLabel')}
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2"
              />
              {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <Label htmlFor="email" className="text-base font-semibold">
                {t('emailLabel')}
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2"
              />
              {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <Label htmlFor="phone" className="text-base font-semibold">
                {t('phoneLabel')}
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="mt-2"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6 h-auto"
              disabled={submitMutation.isPending}
            >
              {submitMutation.isPending ? 'Submitting...' : t('submitButton')}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
