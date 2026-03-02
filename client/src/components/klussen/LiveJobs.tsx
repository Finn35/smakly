const JOBS = [
  { emoji: "🚿", title: "Lekkende kraan badkamer", location: "Amsterdam-Noord", time: "12 min geleden", price: "€50–100", isNew: true },
  { emoji: "🎨", title: "Kozijnen schilderen (buiten)", location: "Utrecht", time: "34 min geleden", price: "€150–200", isNew: true },
  { emoji: "🛋️", title: "IKEA PAX kast monteren", location: "Rotterdam", time: "1 uur geleden", price: "€40–60", isNew: false },
  { emoji: "⚡", title: "Stopcontact verplaatsen", location: "Den Haag", time: "2 uur geleden", price: "€80–120", isNew: false },
];

export default function LiveJobs() {
  return (
    <section className="bg-[#FAFAFA] border-t border-[#EBEBEB] py-14 sm:py-16">
      <div className="container mx-auto px-5 sm:px-6 max-w-[560px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-[#16A34A] animate-pulse" />
          <h2 className="text-base font-bold text-[#0C0C0C] tracking-tight">
            Recent geplaatste klussen
          </h2>
        </div>
        <div className="space-y-2">
          {JOBS.map((j) => (
            <div
              key={j.title}
              className="flex items-center gap-3 p-4 bg-white border border-[#EBEBEB] rounded-xl hover:shadow-md transition-shadow"
            >
              <div className="w-9 h-9 shrink-0 rounded-lg bg-[#FAFAFA] border border-[#EBEBEB] flex items-center justify-center text-lg">
                {j.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <strong className="text-sm font-bold block truncate">{j.title}</strong>
                <span className="text-xs text-[#6B6B6B]">{j.location} · {j.time}</span>
              </div>
              <div className="flex gap-1.5 shrink-0">
                {j.isNew && (
                  <span className="px-1.5 py-0.5 rounded bg-[#DCFCE7] text-[#16A34A] text-[11px] font-bold">
                    Nieuw
                  </span>
                )}
                <span className="px-1.5 py-0.5 rounded bg-[#E84500]/[0.08] text-[#E84500] text-[11px] font-bold">
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
