import Logo from "@/components/smakly/Logo";

export default function SmaklyCookies() {
  return (
    <div className="min-h-screen bg-[#FAF9F7]">
      {/* Header */}
      <header className="py-6 border-b border-[#E8E6E1]">
        <div className="container mx-auto">
          <a href="/">
            <Logo size="md" variant="default" />
          </a>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-semibold text-[#1A1918] tracking-tight mb-8">
              Cookiebeleid
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-[#787571] leading-relaxed mb-6">
                Laatst bijgewerkt: januari 2025
              </p>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  Wat zijn cookies?
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Cookies zijn kleine tekstbestanden die op uw computer of mobiele apparaat 
                  worden opgeslagen wanneer u een website bezoekt. Ze worden veel gebruikt 
                  om websites te laten werken en om informatie te verstrekken aan de eigenaren 
                  van de website.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  Welke cookies gebruiken wij?
                </h2>
                <p className="text-[#5C5955] leading-relaxed mb-4">
                  Smakly.nl maakt alleen gebruik van <strong>strikt noodzakelijke cookies</strong>. 
                  Dit zijn cookies die essentieel zijn voor de werking van de website.
                </p>
                
                <div className="bg-white rounded-lg border border-[#E8E6E1] overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-[#FAF9F7]">
                      <tr>
                        <th className="text-left px-4 py-3 text-[#1A1918] font-medium">Cookie</th>
                        <th className="text-left px-4 py-3 text-[#1A1918] font-medium">Doel</th>
                        <th className="text-left px-4 py-3 text-[#1A1918] font-medium">Duur</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E8E6E1]">
                      <tr>
                        <td className="px-4 py-3 text-[#5C5955]">Sessie</td>
                        <td className="px-4 py-3 text-[#5C5955]">Onthouden van formuliergegevens</td>
                        <td className="px-4 py-3 text-[#5C5955]">Sessie</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  Geen tracking cookies
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Wij gebruiken <strong>geen</strong> tracking cookies, analytische cookies of 
                  advertentiecookies. Wij volgen uw surfgedrag niet en delen geen gegevens 
                  met advertentienetwerken.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  Cookies beheren
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  U kunt cookies beheren via de instellingen van uw browser. Let op: het 
                  uitschakelen van cookies kan de werking van de website beïnvloeden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  Contact
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Heeft u vragen over ons cookiebeleid? Neem contact met ons op via{" "}
                  <a 
                    href="mailto:hallo@smakly.nl" 
                    className="text-[#4F7DF3] hover:underline"
                  >
                    hallo@smakly.nl
                  </a>
                </p>
              </section>
            </div>

            {/* Back link */}
            <div className="mt-12 pt-8 border-t border-[#E8E6E1]">
              <a 
                href="/" 
                className="inline-flex items-center gap-2 text-sm text-[#787571] hover:text-[#1A1918] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Terug naar home
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="py-8 border-t border-[#E8E6E1]">
        <div className="container mx-auto">
          <p className="text-xs text-[#A8A5A0] text-center">
            © 2025 Smakly
          </p>
        </div>
      </footer>
    </div>
  );
}

