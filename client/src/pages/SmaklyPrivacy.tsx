import Logo from "@/components/smakly/Logo";

const SECTIONS = [
  {
    num: "1",
    title: "Wie zijn wij?",
    content: (
      <>
        <p>
          Smakly (hierna: "Smakly", "wij", "ons") is een <strong>online bemiddelingsplatform</strong> gevestigd te Amsterdam.
          Wij verbinden particulieren en bedrijven die een klus willen laten uitvoeren ("opdrachtgevers")
          met zelfstandige vakmensen ("vakmensen" of "opdrachtnemers").
        </p>
        <p className="mt-3">
          Smakly is <strong>uitsluitend een technisch tussenpersoon</strong>. Wij zijn geen partij bij de
          overeenkomst die tussen opdrachtgever en vakman tot stand komt.
        </p>
      </>
    ),
  },
  {
    num: "2",
    title: "Rol en aansprakelijkheid van Smakly",
    content: (
      <>
        <p>
          Smakly faciliteert het contact tussen opdrachtgevers en vakmensen, maar is{" "}
          <strong>op geen enkele wijze aansprakelijk</strong> voor:
        </p>
        <ul className="mt-3 space-y-2 list-none">
          {[
            "De kwaliteit, veiligheid of het resultaat van uitgevoerde werkzaamheden",
            "Het gedrag of de betrouwbaarheid van vakmensen of opdrachtgevers",
            "Schade aan eigendommen, personen of derden die voortvloeit uit een via Smakly tot stand gekomen opdracht",
            "Geschillen over betaling, materialen, planning of uitvoering tussen opdrachtgever en vakman",
            "Het niet nakomen van afspraken door een van de partijen",
            "Indirecte schade, gevolgschade of gederfde inkomsten",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-gray-600">
              <span className="mt-0.5 w-4 h-4 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6A00] text-[10px] font-bold shrink-0">
                ✕
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-4 p-4 bg-amber-50 border border-amber-100 rounded-xl">
          <p className="text-sm text-amber-800 font-medium">
            Alle afspraken, overeenkomsten en verantwoordelijkheden liggen uitsluitend tussen de opdrachtgever en de vakman.
            Smakly is hierin geen partij.
          </p>
        </div>
      </>
    ),
  },
  {
    num: "3",
    title: "Welke gegevens verzamelen wij?",
    content: (
      <>
        <p>Via ons platform verzamelen wij de volgende persoonsgegevens:</p>
        <ul className="mt-3 space-y-1.5 list-disc pl-5 text-gray-600">
          <li>Naam en contactgegevens (e-mailadres, telefoonnummer)</li>
          <li>Postcode (voor het koppelen aan vakmensen in de buurt)</li>
          <li>Beschrijving van de klus</li>
          <li>Categorie van de opdracht</li>
          <li>Technische gegevens (IP-adres, browser-type)</li>
        </ul>
        <p className="mt-3">
          Wij bewaren deze gegevens op beveiligde servers van Supabase (EU-regio) en behandelen
          ze in overeenstemming met de AVG.
        </p>
      </>
    ),
  },
  {
    num: "4",
    title: "Waarvoor gebruiken wij uw gegevens?",
    content: (
      <ul className="space-y-1.5 list-disc pl-5 text-gray-600">
        <li>Het doorsturen van uw klus naar relevante vakmensen in uw regio</li>
        <li>Het in contact brengen van opdrachtgever en vakman</li>
        <li>Het beantwoorden van vragen via het contactformulier</li>
        <li>Het verbeteren van ons platform en onze dienstverlening</li>
        <li>Het voldoen aan wettelijke verplichtingen</li>
      </ul>
    ),
  },
  {
    num: "5",
    title: "Delen wij uw gegevens?",
    content: (
      <>
        <p>
          Uw klusomschrijving en contactgegevens worden gedeeld met vakmensen die actief zijn
          in uw regio, zodat zij kunnen reageren op uw opdracht. Dit is de kern van onze dienstverlening.
        </p>
        <p className="mt-3">
          Wij verkopen uw persoonsgegevens <strong>nooit</strong> aan derden en gebruiken ze niet
          voor commerciële doeleinden buiten Smakly.
        </p>
      </>
    ),
  },
  {
    num: "6",
    title: "Bewaartermijn",
    content: (
      <p>
        Gegevens van geplaatste klussen bewaren wij maximaal <strong>2 jaar</strong> na plaatsingsdatum,
        tenzij wettelijk anders vereist. Contactformulierberichten worden maximaal 1 jaar bewaard.
        U kunt te allen tijde verwijdering verzoeken via{" "}
        <a href="mailto:privacy@smakly.nl" className="text-[#FF6A00] hover:underline">
          privacy@smakly.nl
        </a>
        .
      </p>
    ),
  },
  {
    num: "7",
    title: "Uw rechten (AVG)",
    content: (
      <>
        <p>Op grond van de AVG heeft u de volgende rechten:</p>
        <ul className="mt-3 space-y-2 list-disc pl-5 text-gray-600">
          <li><strong>Inzage</strong> — opvragen welke gegevens wij van u hebben</li>
          <li><strong>Rectificatie</strong> — onjuiste gegevens laten corrigeren</li>
          <li><strong>Verwijdering</strong> — verzoeken uw gegevens te wissen</li>
          <li><strong>Bezwaar</strong> — bezwaar maken tegen verwerking</li>
          <li><strong>Overdraagbaarheid</strong> — uw gegevens in leesbaar formaat ontvangen</li>
        </ul>
        <p className="mt-3">
          Verzoeken kunt u sturen naar{" "}
          <a href="mailto:privacy@smakly.nl" className="text-[#FF6A00] hover:underline">
            privacy@smakly.nl
          </a>
          . Wij reageren binnen 30 dagen.
        </p>
      </>
    ),
  },
  {
    num: "8",
    title: "Beveiliging",
    content: (
      <p>
        Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens
        te beschermen. Onze website maakt gebruik van SSL-encryptie en onze database
        (Supabase, EU-West) is beveiligd met row-level security en moderne encryptiestandaarden.
      </p>
    ),
  },
  {
    num: "9",
    title: "Cookies",
    content: (
      <p>
        Smakly maakt uitsluitend gebruik van functionele cookies die strikt noodzakelijk zijn
        voor de werking van het platform. Wij plaatsen geen tracking- of advertentiecookies
        zonder uw toestemming.
      </p>
    ),
  },
  {
    num: "10",
    title: "Contact en klachten",
    content: (
      <>
        <p>Heeft u vragen over dit privacybeleid? Neem contact met ons op:</p>
        <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
          <p className="text-sm font-semibold text-gray-900">Smakly</p>
          <p className="text-sm text-gray-500">Amsterdam, Nederland</p>
          <a href="mailto:privacy@smakly.nl" className="text-sm text-[#FF6A00] hover:underline">
            privacy@smakly.nl
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-500">
          U heeft ook het recht een klacht in te dienen bij de{" "}
          <a
            href="https://autoriteitpersoonsgegevens.nl"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FF6A00] hover:underline"
          >
            Autoriteit Persoonsgegevens
          </a>
          .
        </p>
      </>
    ),
  },
];

export default function SmaklyPrivacy() {
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
        {/* Page title */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
            Juridisch
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-3">
            Privacybeleid &amp; Disclaimer
          </h1>
          <p className="text-gray-500 text-sm">
            Laatst bijgewerkt: februari 2026 · Smakly B.V., Amsterdam
          </p>
        </div>

        {/* Disclaimer highlight */}
        <div className="mb-10 p-5 bg-[#FF6A00]/[0.05] border border-[#FF6A00]/20 rounded-2xl">
          <p className="text-sm font-semibold text-gray-900 mb-1">Belangrijk: Smakly is een bemiddelaar</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Smakly brengt opdrachtgevers en vakmensen samen, maar is zelf <strong>geen partij</strong> bij
            de overeenkomst die tussen hen wordt gesloten. Alle rechten, plichten en aansprakelijkheden
            liggen uitsluitend bij de opdrachtgever en de vakman onderling.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {SECTIONS.map((s) => (
            <section key={s.num} className="border-b border-gray-100 pb-8 last:border-0">
              <h2 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 rounded-md bg-gray-100 text-gray-500 text-xs font-bold flex items-center justify-center shrink-0">
                  {s.num}
                </span>
                {s.title}
              </h2>
              <div className="text-sm text-gray-600 leading-relaxed">{s.content}</div>
            </section>
          ))}
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
