type TabItem = {
  label: string;
  count?: number;
}

const tabs: TabItem[] = [
  {label: "HISTORY", count: 1},
  {label: "COMPARE"},
  {label: "FAVORITES"},
  {label: "LOG"},
];

function DesktopTabs() {
  return (
    <nav
      className="flex h-[42px] w-full items-start gap-2 border-b border-[#3838383]"
      aria-label="Currency tools"
    >
      {
        tabs.map((tab, index) => (
          <button
            key={tab.label}
            className="group flex h-[42px] shrink-0 flex-col items-center"
            type="button"
            aria-current={index === 0 ? "page" : undefined}
          >
            <span
              className={`flex h-10 items-center justify-center gap-2 px-4 text-xs font-medium leading-[1.2] transition-colors ${
                index === 0
                  ? "text-white"
                  : "text-[#9D9D9D] hover:text-white group-focus-visible:text-white"
              }`}
            >
              {tab.label}

              {tab.count ? (
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#364100] text-[10px] font-medium leading-none text-[#CEF739]">
                  {tab.count}
                </span>
              ): null}
            </span>

            <span
              className={`h-0.5 w-full ${
                index === 0 ? "bg-[#CEF739]" : "bg-transparent"
              }`}
            />
          </button>
        ))
      }
    </nav>
  );
}

export default DesktopTabs;