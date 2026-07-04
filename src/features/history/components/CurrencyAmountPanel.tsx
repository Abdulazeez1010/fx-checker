import chevronDownIcon from "../../../assets/images/icon-chevron-down.svg";

type CurrencyAmountPanelProps = {
  label: string;
  amount: string;
  currency: string;
  flag: string;
  variant: "send" | "receive";
};

function CurrencyAmountPanel({
  label,
  amount,
  currency,
  flag,
  variant,
}: CurrencyAmountPanelProps) {
  const amountColor = variant === "receive" ? "text-[#CEF739]" : "text-white";

  return (
    <div className="flex min-h-[118px] flex-1 flex-col justify-end gap-5 rounded-2xl border border-[#5C5C5C] bg-[#383838] p-5">
      {/* Label row */}
      <div className="flex items-start gap-3">
        <span className="text-sm leading-[1.2] text-[#D4D4D4]">{label}</span>
      </div>

      {/* Amount and currency row */}
      <div className="flex items-center justify-between gap-4">
        <label className="group flex min-w-0 flex-col">
          <span className="sr-only">{label} amount</span>
          <input
            className={`w-full max-w-[240px] border-0 border-b border-[#383838] bg-transparent p-0 text-[32px] font-medium leading-none tracking-normal outline-none transition-colors placeholder:text-[#737373] hover:border-[#9D9D9D] focus:border-[#CEF739] sm:text-[40px] ${amountColor}`}
            inputMode="decimal"
            value={amount}
            readOnly
            aria-label={`${label} amount`}
          />
        </label>
        <button
          className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-[#737373] bg-[#5C5C5C] px-2.5 py-2.5 text-white transition-colors hover:border-[#CEF739] hover:bg-[#666666] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-4 focus-visible:ring-offset-[#383838]"
          type="button"
          aria-label={`Select ${label.toLocaleLowerCase()} currency`}
        >
          <span className="grid h-5 w-5 place-items-center text-base leading-none" aria-hidden="true">
            {flag}
          </span>
          
          <span className="text-sm leading-[1.2]">{currency}</span>
          <img
            className="h-3 w-3"
            src={chevronDownIcon}
            alt=""
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}

export default CurrencyAmountPanel;