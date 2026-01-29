import Logo from "@/components/smakly/Logo";

export default function SmaklyPrivacy() {
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
              Privacybeleid
            </h1>

            <div className="prose prose-gray max-w-none">
              <p className="text-[#787571] leading-relaxed mb-6">
                Laatst bijgewerkt: januari 2025
              </p>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  1. Wie zijn wij?
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Smakly is een AI-assistent service voor ZZP'ers en kleine ondernemers in Nederland. 
                  Wij helpen ondernemers om geen klanten te missen door automatisch telefoontjes, 
                  WhatsApp-berichten en e-mails te beantwoorden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  2. Welke gegevens verzamelen wij?
                </h2>
                <p className="text-[#5C5955] leading-relaxed mb-3">
                  Via onze website verzamelen wij de volgende gegevens:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#5C5955]">
                  <li>Naam</li>
                  <li>E-mailadres</li>
                  <li>Telefoonnummer (optioneel)</li>
                  <li>Bedrijfstype</li>
                  <li>Berichten die u via het contactformulier verstuurt</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  3. Waarvoor gebruiken wij uw gegevens?
                </h2>
                <p className="text-[#5C5955] leading-relaxed mb-3">
                  Wij gebruiken uw gegevens uitsluitend voor:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#5C5955]">
                  <li>Contact met u opnemen over onze diensten</li>
                  <li>Het beantwoorden van uw vragen</li>
                  <li>Het informeren over de pilot en nieuwe functies</li>
                  <li>Het verbeteren van onze dienstverlening</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  4. Delen wij uw gegevens?
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Nee. Wij verkopen, verhuren of delen uw persoonsgegevens niet met derden, 
                  tenzij dit wettelijk verplicht is of noodzakelijk voor onze dienstverlening 
                  (bijvoorbeeld hosting bij Supabase).
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  5. Hoe lang bewaren wij uw gegevens?
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Wij bewaren uw gegevens niet langer dan noodzakelijk voor de doeleinden 
                  waarvoor ze zijn verzameld. Contactformulier-gegevens worden maximaal 
                  2 jaar bewaard.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  6. Beveiliging
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Wij nemen passende technische en organisatorische maatregelen om uw 
                  persoonsgegevens te beschermen tegen verlies of onrechtmatige verwerking. 
                  Onze website maakt gebruik van SSL-encryptie en onze database is beveiligd 
                  met moderne beveiligingsstandaarden.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  7. Uw rechten
                </h2>
                <p className="text-[#5C5955] leading-relaxed mb-3">
                  Op grond van de AVG (Algemene Verordening Gegevensbescherming) heeft u de volgende rechten:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#5C5955]">
                  <li><strong>Recht op inzage:</strong> U kunt opvragen welke gegevens wij van u hebben</li>
                  <li><strong>Recht op rectificatie:</strong> U kunt onjuiste gegevens laten corrigeren</li>
                  <li><strong>Recht op verwijdering:</strong> U kunt verzoeken uw gegevens te verwijderen</li>
                  <li><strong>Recht op bezwaar:</strong> U kunt bezwaar maken tegen de verwerking van uw gegevens</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  8. Cookies
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Onze website maakt alleen gebruik van functionele cookies die noodzakelijk zijn 
                  voor de werking van de website. Wij gebruiken geen tracking cookies of 
                  advertentiecookies.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  9. Contact
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Heeft u vragen over dit privacybeleid of wilt u gebruik maken van uw rechten? 
                  Neem dan contact met ons op:
                </p>
                <div className="mt-4 p-4 bg-white rounded-lg border border-[#E8E6E1]">
                  <p className="text-[#1A1918] font-medium">Smakly</p>
                  <a 
                    href="mailto:hallo@smakly.nl" 
                    className="text-[#4F7DF3] hover:underline"
                  >
                    hallo@smakly.nl
                  </a>
                </div>
              </section>

              <section>
                <h2 className="text-lg font-semibold text-[#1A1918] mb-3">
                  10. Wijzigingen
                </h2>
                <p className="text-[#5C5955] leading-relaxed">
                  Wij behouden ons het recht voor dit privacybeleid te wijzigen. 
                  De meest recente versie is altijd beschikbaar op deze pagina.
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

