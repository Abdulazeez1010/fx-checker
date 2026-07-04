type StatItem = {
  label: string;
  value: string;
  tone?: "positive" | "default";
};

const stats: StatItem[] = [
  {label: "OPEN", value: "0.8516"},
  {label: "LAST", value: "0.8530"},
  {label: "CHANGE", value: "+0.0014", tone: "positive"},
  {label: "% CHANGE", value: "▲ +0.16%", tone: "positive"},
];

const ranges = ["1D", "1W", "1M", "3M", "1Y", "5Y"];

function StatsContainer() {
  return (
    <section className="flex w-full flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      {/* Conversion stats */}
      <div className="grid w-full grid-cols-2 gap-3 sm:grid-cols-4 xl:max-w-[740px] xl:gap-4">
        {stats.map((stat) => (
          <article
            key={stat.label}
            className="flex min-h-[81px] flex-col gap-4 rounded-2xl border border-[#383838] bg-[#292929] px-5 py-3"
          >
            <span className="text-sm leading-[1.2] text-white/70 ">
              {stat.label}
            </span>

            <strong
              className={`text-xl font-medium leading-[1.2] ${
                stat.tone === "positive" ? "text-[#25D366]" : "text-white"
              }`}
            >
              {stat.value}
            </strong>
          </article>
        ))}
      </div>

      {/* Range selector */}
      <div className="flex h-[42px] w-max items-center rounded-lg bg-[#292929] p-0.5">
        {ranges.map((range) => {
          const isActive = range === "1M";

          return (
            <button
              key={range}
              className={`h-[38px] rounded-lg px-4 text-xs leading-[1.2] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-2 focus-visible:ring-offset-[#111111] ${
                isActive
                  ? "bg-[#5C5C5C] text-white"
                  : "text-[#9D9D9D] hover:text-white"
              }`}
              type="button"
              aria-pressed={isActive}
            >
              {range}
            </button>
          )
        })}
      </div>
    </section>
  );
}

export default StatsContainer;