import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import { Link } from 'wouter';

export default function ThankYou() {
  const { t } = useLanguage();

  return (
    <div className="flex-1 flex items-center justify-center py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-6 flex justify-center">
            <CheckCircle className="w-20 h-20 text-green-600" />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('thankYouTitle')}
          </h1>
          
          <p className="text-xl text-gray-600 mb-12">
            {t('thankYouMessage')}
          </p>

          <Link href="/">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 h-auto"
            >
              {t('backToHome')}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
