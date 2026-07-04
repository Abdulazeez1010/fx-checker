import arrowLeftRightIcon from "../../../assets/images/icon-exchange.svg";
import starFilledIconBlack from "../../../assets/images/icon-star-filled-black.svg";

import CurrencyAmountPanel from "./CurrencyAmountPanel";

function ConverterWrapper() {
  return (
    <section className="flex w-full flex-col gap-4" aria-labelledby="converter-title">
      <h1
        id="converter-title"
        className="m-0 text-xl font-semibold leading-[1.2] text-white"
      >
        CHECK THE RATE
      </h1>

      <div className="overflow-hidden rounded-[20px] bg-[#292929] shadow-[0_24px_80px_rgba(0_0_0_/_0.28)]">
        {/* Top converter area */}
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:gap-6 md:p-5">
          <CurrencyAmountPanel
            label="SEND"
            amount="1,000"
            currency="USD"
            flag="US"
            variant="send"
          />

          <button
            // className=" grid h-12 w-12 shrink-0 place-items-center self-center border border-[#CEF739] bg-[#F4FFD0] px-3 py-2 text-xs font-medium leading-[1.3] text-[#111111] transition-colors hover:bg-[#CEF739] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-4 focus-visible:ring-offset-[#292929]"
            className=" grid h-12 w-12 shrink-0 place-items-center self-center px-3 py-2 text-xs font-medium leading-[1.3] text-[#111111]"
            type="button"
            aria-label="Swap currencies"
          >
            <img
              className="h-5 w-5"
              src={arrowLeftRightIcon}
              alt=""
              aria-hidden="true"
            />
          </button>

          <CurrencyAmountPanel
            label="RECEIVE"
            amount="853.02"
            currency="EUR"
            flag="EU"
            variant="receive"
          />
        </div>

        {/* Bottom rate/action area */}
        {/* <div className="flex flex-col gap-4 border-t border-[#5C5C5C] px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-5"> */}
        <div className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between md:px-5">
          <p className="m-0 whitespace-nowrap text-xs leading-[1.2] text-white">
            1 USD = 0.8530 EUR
          </p>

          <div>
            <button
              className="inline-flex h-8 items-center justify-center gap-2 rounded-lg border border-[#CEF739] bg-[#CEF739] px-3 py-2 text-xs font-medium leading-[1.3] text-[#111111] transiton-colors hover:bg-[#CEF739] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-4 focus-visible:ring-offset-[#292929] disabled:cursor-not-allowed disabled:opacity-50"
              type="button"
            >
              <img
                className="h-4 w-4"
                src={starFilledIconBlack}
                alt=""
                aria-hidden="true"
              />
              FAVORITED
            </button>

            <button
              className="inline-flex h-8 items-center justify-center rounded-lg px-3 py-2 text-xs font-medium leading-[1.3] text-white transition-colors hover:bg-[#383838] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visble:ring-offset-4 focus-visible:ring-offset-[#292929]"
              type="button"
            >
              LOG CONVERSION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConverterWrapper;