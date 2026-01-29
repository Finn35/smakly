export default function ChatDemo() {
  const messages = [
    {
      type: "incoming",
      text: "Hallo, is er morgen plek voor een afspraak?",
    },
    {
      type: "outgoing",
      text: "Goedemiddag! Wat is uw naam en welke dienst heeft u nodig?",
    },
    {
      type: "incoming",
      text: "Snoeiwerk achtertuin.",
    },
    {
      type: "outgoing",
      text: "Dank u! Wat is uw e-mailadres? Dan plannen we het direct.",
    },
  ];

  return (
    <section id="chat-demo" className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#1A1918] tracking-tight">
            Zo werkt Smakly
          </h2>
          <p className="mt-2 sm:mt-3 text-[13px] sm:text-sm text-[#787571]">
            Een voorbeeldgesprek met de AI Assistent
          </p>
        </div>

        <div className="max-w-sm mx-auto">
          {/* Chat container */}
          <div className="bg-white rounded-2xl border border-[#E8E6E1] overflow-hidden">
            {/* Chat header */}
            <div className="px-3.5 sm:px-4 py-2.5 sm:py-3 border-b border-[#E8E6E1] flex items-center gap-2.5 sm:gap-3">
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#4F7DF3] to-[#6366F1] flex items-center justify-center">
                <svg width="10" height="14" viewBox="0 0 20 28" fill="none" className="text-white sm:w-[12px] sm:h-[16px]">
                  <rect x="2" y="2" width="16" height="24" rx="8" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                  <circle cx="10" cy="9" r="1.5" fill="currentColor"/>
                  <rect x="6" y="17" width="8" height="1.5" rx="0.75" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <p className="text-[13px] sm:text-sm font-medium text-[#1A1918]">Smakly AI</p>
                <p className="text-[11px] sm:text-xs text-emerald-600 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  Online
                </p>
              </div>
            </div>

            {/* Messages */}
            <div className="p-3 sm:p-4 space-y-2.5 sm:space-y-3 min-h-[240px] sm:min-h-[260px] bg-[#FAF9F7]">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === "outgoing" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] ${
                      message.type === "outgoing"
                        ? "bg-[#1A1918] text-white rounded-2xl rounded-br-md"
                        : "bg-white text-[#1A1918] rounded-2xl rounded-bl-md border border-[#E8E6E1]"
                    } px-3 sm:px-3.5 py-2 sm:py-2.5`}
                  >
                    <p className="text-[12px] sm:text-[13px] leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              <div className="flex justify-end">
                <div className="bg-[#1A1918] rounded-2xl rounded-br-md px-3 sm:px-3.5 py-2 sm:py-2.5">
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature badges */}
          <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-3 sm:gap-4">
            {["24/7 beschikbaar", "< 5 sec reactie", "Nederlands"].map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs text-[#787571]"
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" className="text-emerald-500">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
