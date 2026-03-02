import Logo from "@/components/smakly/Logo";

export default function SmaklyCookies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-2xl mx-auto px-5 h-14 flex items-center justify-between">
          <a href="/">
            <Logo size="md" variant="default" showWordmark={true} withHat={true} />
          </a>
          <a
            href="/"
            className="flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Terug naar home
          </a>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-5 py-12 sm:py-16">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
            Juridisch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Cookiebeleid
          </h1>
          <p className="text-gray-500 text-sm">
            Laatst bijgewerkt: februari 2026 · Smakly B.V., Amsterdam
          </p>
        </div>

        <div className="space-y-8 text-sm text-gray-600 leading-relaxed">

          <section className="border-b border-gray-100 pb-8">
            <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">1</span>
              Wat zijn cookies?
            </h2>
            <p>
              Cookies zijn kleine tekstbestanden die op uw apparaat worden opgeslagen wanneer u
              onze website bezoekt. Ze helpen ons de website goed te laten werken en inzicht te
              krijgen in het gebruik ervan.
            </p>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">2</span>
              Welke cookies gebruiken wij?
            </h2>
            <p className="mb-4">Smakly maakt gebruik van de volgende categorieën cookies:</p>

            <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-100">
                  <tr>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold">Type</th>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold">Doel</th>
                    <th className="text-left px-4 py-3 text-gray-700 font-semibold">Duur</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-800">Functioneel</td>
                    <td className="px-4 py-3 text-gray-600">Formuliergegevens onthouden</td>
                    <td className="px-4 py-3 text-gray-600">Sessie</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-gray-800">Analytisch</td>
                    <td className="px-4 py-3 text-gray-600">Google Ads conversie meten (gtag.js)</td>
                    <td className="px-4 py-3 text-gray-600">90 dagen</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">3</span>
              Google Ads (gtag.js)
            </h2>
            <p>
              Wij maken gebruik van Google Ads (gtag.js, ID: AW-989714763) om bij te houden of
              bezoekers na het klikken op een advertentie een klus plaatsen. Google kan deze
              informatie opslaan. Meer informatie:{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6A00] hover:underline"
              >
                Google Privacybeleid
              </a>
              .
            </p>
          </section>

          <section className="border-b border-gray-100 pb-8">
            <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">4</span>
              Cookies beheren of weigeren
            </h2>
            <p>
              U kunt cookies beheren of verwijderen via de instellingen van uw browser. Let op:
              het uitschakelen van cookies kan de werking van de website beïnvloeden. Zie voor
              instructies:{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF6A00] hover:underline"
              >
                allaboutcookies.org
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="flex items-center gap-2 text-base font-bold text-gray-900 mb-3">
              <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center">5</span>
              Contact
            </h2>
            <p>
              Vragen over ons cookiebeleid?{" "}
              <a href="mailto:privacy@smakly.nl" className="text-[#FF6A00] hover:underline">
                privacy@smakly.nl
              </a>
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-gray-700 transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Terug naar home
          </a>
        </div>
      </main>

      <footer className="bg-gray-900 py-5 px-6 text-center">
        <p className="text-sm text-gray-500">© 2026 Smakly · Amsterdam</p>
      </footer>
    </div>
  );
}
