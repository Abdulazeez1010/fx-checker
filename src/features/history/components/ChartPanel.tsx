const yAxisValues = ["0.8612", "0.8516", "0.8421"];
const xAxisValues = ["Apr 14", "Apr 21", "Apr 28", "May 06", "May 14"];

function ChartPanel() {
 	return (
 		<section className="flex min-h-[377px] w-full flex-col gap-5 rounded-2xl border border-[#383838] bg-[#292929] p-5">
 			{/* Chart header */}
      <div className="flex w-full items-center justify-between gap-4">
        <h2 className="m-0 text-base font-medium leading-[1.2] text-white">
          USD/EUR
        </h2>

        <p className="m-0 whitespace-nowrap text-xs leading-[1.2] text-white/70">
          0.8530 . MAY 14 16:00 CET
        </p>
      </div>

      {/* Chart container */}
      <div className="flex w-full flex-col gap-4">
        {/* Y-axis and line area */}
        <div className="flex min-h-[272px] w-full gap-4">
          <div className="flex w-9 shrink-0 flex-col justify-between">
            {yAxisValues.map((value) => (
              <span
                key={value}
                className="text-[10px] leading-none text-[#9D9D9D]"
              >
                {value}
              </span>
            ))}
          </div>

          <div className="relative min-h-[272px] flex-1 overflow-hidden">
            <ChartGrid />
            <ChartLine />
          </div>
        </div>

        {/* X-axis */}
        <div className="ml-[52px] flex h-2.5 items-start justify-between gap-4">
          {xAxisValues.map((value) => (
            <span
              key={value}
              className="whitespace-nowrap text-[10px] leading-none text-[#9D9D9D]"
            >
              {value}
            </span>
          ))}
        </div>
      </div>
 		</section>
 	);
 }

 function ChartGrid() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 944 272"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 1H944M0 136H944M0 271H944"
        stroke="#383838"
        strokeWidth="1"
      />
      <path
        d="M1 0V272M236 0V272M472 0V272M708 0V272M943 0V272"
        stroke="#383838"
        strokeWidth="1"
      />
    </svg>
  );
 }

 function ChartLine() {
  return (
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 944 272"
      preserveAspectRatio="none"
      aria-label="USD to EUR exchange rate history chart"
      role="img"
    >
      <defs>
        <linearGradient id="rateAreaGradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#CEF739" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#CEF739" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path
        d="M0 206C72 190 122 198 188 174C254 150 298 98 362 112C426 126 456 178 520 158C584 138 626 66 694 82C762 98 810 148 874 118C904 104 924 86 944 72V272H0Z"
        fill="url(#rateAreaGradient)"
      />

      <path
        d="M0 206C72 190 122 198 188 174C254 150 298 98 362 112C426 126 456 178 520 158C584 138 626 66 694 82C762 98 810 148 874 118C904 104 924 86 944 72"
        fill="none"
        stroke="#CEF739"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

export default ChartPanel;