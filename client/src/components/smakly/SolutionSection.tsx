export default function SolutionSection() {
  const features = [
    "Beantwoordt alle oproepen automatisch",
    "Reageert direct via WhatsApp",
    "Plant afspraken in je agenda",
    "Stuurt follow-up berichten",
    "Beantwoordt veelgestelde vragen",
    "Verzamelt klantgegevens",
  ];

  const channels = [
    { label: "Telefoon", icon: "phone" },
    { label: "WhatsApp", icon: "message" },
    { label: "Agenda", icon: "calendar" },
    { label: "E-mail", icon: "mail" },
  ];

  const renderIcon = (type: string) => {
    const className = "text-[#787571]";
    switch (type) {
      case "phone":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "message":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case "calendar":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
            <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        );
      case "mail":
        return (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className={className}>
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F7]">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A1918] tracking-tight">
            De AI Assistent die nooit pauze neemt
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start max-w-3xl mx-auto">
          {/* Left: Feature list */}
          <div>
            <ul className="space-y-3 sm:space-y-3.5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2.5 sm:gap-3">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-emerald-500 flex-shrink-0">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="text-[14px] sm:text-[15px] text-[#434240]">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Channels */}
          <div>
            <p className="text-[11px] sm:text-xs font-medium text-[#A8A5A0] uppercase tracking-wider mb-4 sm:mb-5">Werkt via</p>
            <div className="grid grid-cols-2 gap-x-5 sm:gap-x-6 gap-y-3 sm:gap-y-4">
              {channels.map((channel, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-2.5">
                  {renderIcon(channel.icon)}
                  <span className="text-[13px] sm:text-sm font-medium text-[#434240]">{channel.label}</span>
                </div>
              ))}
            </div>
            
            {/* Integration note */}
            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-[#E8E6E1]">
              <p className="text-[13px] sm:text-sm text-[#787571] leading-relaxed">
                Werkt naadloos met je bestaande tools en workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
