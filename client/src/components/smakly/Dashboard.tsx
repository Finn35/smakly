export default function Dashboard() {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#FAF9F7]">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1A1918] tracking-tight">
            Alles in één dashboard
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#787571] max-w-lg mx-auto">
            Bekijk je voortgang, reviews en posts op één plek.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-[#E8E6E1] shadow-lg overflow-hidden">
          {/* Dashboard header */}
          <div className="px-5 sm:px-7 py-4 border-b border-[#E8E6E1] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-sm font-medium text-[#1A1918]">Smakly Dashboard</span>
            </div>
            <span className="text-xs text-[#A8A5A0]">Live preview</span>
          </div>

          {/* Dashboard body */}
          <div className="p-5 sm:p-7">
            {/* Stats row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-6">
              <StatCard label="Reviews" value="47" change="+12 deze maand" positive />
              <StatCard label="Gemiddeld" value="4.8" icon={<StarIcon />} positive />
              <StatCard label="Posts" value="8" change="deze maand" positive />
              <StatCard label="Zichtbaarheid" value="92%" change="+18%" positive />
            </div>

            {/* Weekly posts preview */}
            <div className="bg-[#FAF9F7] rounded-xl p-4 sm:p-5 border border-[#E8E6E1]/60">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-medium text-[#1A1918]">Google Posts deze week</h4>
                <span className="text-[11px] text-[#A8A5A0]">AI-gegenereerd</span>
              </div>
              <div className="space-y-2.5">
                <PostPreview
                  day="Ma"
                  title="Badkamer renovatie afgerond!"
                  status="Geplaatst"
                  statusColor="emerald"
                />
                <PostPreview
                  day="Wo"
                  title="Nieuw project: keuken installatie"
                  status="Gepland"
                  statusColor="blue"
                />
                <PostPreview
                  day="Vr"
                  title="5-sterren review van klant!"
                  status="Concept"
                  statusColor="gray"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={scrollToForm}
            className="px-6 sm:px-7 py-3 sm:py-3.5 bg-[#4F7DF3] text-white font-semibold rounded-xl transition-all duration-200 hover:bg-[#3B63D9] active:scale-[0.98] shadow-md hover:shadow-lg"
          >
            Gratis Google Analyse
          </button>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  label,
  value,
  change,
  icon,
  positive,
}: {
  label: string;
  value: string;
  change?: string;
  icon?: React.ReactNode;
  positive?: boolean;
}) {
  return (
    <div className="bg-[#FAF9F7] rounded-xl p-3.5 sm:p-4 border border-[#E8E6E1]/60">
      <p className="text-[11px] sm:text-xs text-[#A8A5A0] mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <span className="text-xl sm:text-2xl font-bold text-[#1A1918]">{value}</span>
        {icon}
      </div>
      {change && (
        <p className={`text-[10px] sm:text-[11px] mt-1 ${positive ? "text-emerald-500" : "text-[#A8A5A0]"}`}>
          {change}
        </p>
      )}
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function PostPreview({
  day,
  title,
  status,
  statusColor,
}: {
  day: string;
  title: string;
  status: string;
  statusColor: "emerald" | "blue" | "gray";
}) {
  const colorMap = {
    emerald: "bg-emerald-50 text-emerald-600",
    blue: "bg-blue-50 text-[#4F7DF3]",
    gray: "bg-[#F5F3F0] text-[#A8A5A0]",
  };

  return (
    <div className="flex items-center gap-3 bg-white rounded-lg p-2.5 sm:p-3 border border-[#E8E6E1]/40">
      <div className="w-8 h-8 rounded-lg bg-white border border-[#E8E6E1] flex items-center justify-center flex-shrink-0">
        <span className="text-[10px] font-semibold text-[#787571]">{day}</span>
      </div>
      <span className="text-sm text-[#434240] flex-1 truncate">{title}</span>
      <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${colorMap[statusColor]}`}>
        {status}
      </span>
    </div>
  );
}
