const JOBS = [
  { emoji: "🚿", title: "Lekkende kraan badkamer",    location: "Amsterdam-Noord", time: "12 min geleden", price: "€50–100",  isNew: true  },
  { emoji: "🎨", title: "Kozijnen schilderen (buiten)", location: "Utrecht",         time: "34 min geleden", price: "€150–200", isNew: true  },
  { emoji: "🛋️", title: "IKEA PAX kast monteren",      location: "Rotterdam",        time: "1 uur geleden",  price: "€40–60",   isNew: false },
  { emoji: "⚡", title: "Stopcontact verplaatsen",      location: "Den Haag",         time: "2 uur geleden",  price: "€80–120",  isNew: false },
];

export default function LiveJobs() {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-14 sm:py-16">
      <div className="max-w-lg mx-auto px-5">

        {/* Section title */}
        <div className="flex items-center gap-2 mb-5">
          <span className="w-2 h-2 rounded-full bg-[#FF6A00]" />
          <h2 className="text-base font-bold text-gray-900 tracking-tight">
            Voorbeeldklussen
          </h2>
        </div>

        <div className="space-y-2.5">
          {JOBS.map((j) => (
            <div
              key={j.title}
              className="flex items-center gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <div className="w-10 h-10 shrink-0 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-lg">
                {j.emoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <strong className="text-sm font-semibold text-gray-900 block truncate">
                  {j.title}
                </strong>
                <span className="text-xs text-gray-400">{j.location} · {j.time}</span>
              </div>

              {/* Badges */}
              <div className="flex flex-col items-end gap-1 shrink-0">
                {j.isNew && (
                  <span className="px-2 py-0.5 rounded-md bg-green-50 text-green-600 text-[11px] font-semibold">
                    Nieuw
                  </span>
                )}
                <span className="px-2 py-0.5 rounded-md bg-[#FF6A00]/[0.07] text-[#FF6A00] text-[11px] font-semibold">
                  {j.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
