const REVIEWS = [
  {
    initials: "SB",
    color: "bg-violet-100 text-violet-700",
    name: "Sandra B.",
    city: "Amsterdam",
    category: "Loodgieter",
    stars: 5,
    text: "Binnen 1 uur had ik al 2 reacties. De loodgieter was die avond nog langs en het lek was snel gedicht. Echt super handig platform!",
  },
  {
    initials: "MK",
    color: "bg-blue-100 text-blue-700",
    name: "Martijn K.",
    city: "Rotterdam",
    category: "Timmerman",
    stars: 5,
    text: "Makkelijk en snel. Timmerman deed het klusje voor een eerlijke prijs. Geen gedoe, gewoon geregeld. Aanrader voor iedereen.",
  },
  {
    initials: "FA",
    color: "bg-emerald-100 text-emerald-700",
    name: "Fatima A.",
    city: "Utrecht",
    category: "IKEA montage",
    stars: 5,
    text: "Zo fijn! Kast besteld, Smakly ingevuld en de volgende dag stond alles op zijn plek. Geen stress meer met instructies.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white border-t border-gray-100 py-16 sm:py-20">
      <div className="max-w-lg mx-auto px-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#FF6A00] mb-2">
          Ervaringen
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight mb-8">
          Wat klanten zeggen
        </h2>

        <div className="space-y-4">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF6A00">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Review text */}
              <p className="text-sm text-gray-700 leading-relaxed mb-4">"{r.text}"</p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className={`w-8 h-8 rounded-full ${r.color} flex items-center justify-center text-xs font-bold`}>
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 leading-none">{r.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">{r.city}</p>
                  </div>
                </div>
                <span className="text-xs font-medium text-gray-400 bg-gray-50 px-2.5 py-1 rounded-full border border-gray-100">
                  {r.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate rating */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <div className="flex gap-0.5">
            {[1,2,3,4,5].map((i) => (
              <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FF6A00">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-sm font-semibold text-gray-900">4.8 / 5</p>
          <p className="text-sm text-gray-400">· gebaseerd op 312 beoordelingen</p>
        </div>
      </div>
    </section>
  );
}
