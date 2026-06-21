// Types

type LiveRate = {
		pair: string;
		rate: string;
		change: string;
		direction: "up" | "down";
	}

// Temporary static ticker data.
// Will be replaced with live API data.
const liveRates:LiveRate[] = [
	{
		pair: "EUR/USD",
		rate: "1.1723",
		change: "▼ −0.14%",
		direction: "down",
	},
	{
		pair: "USD/JPY",
		rate: "157.91",
		change: "▲ +0.04%",
		direction: "up"
	},
	{
		pair: "GBP/USD",
		rate: "1.3575",
		change: "▼ −0.22%",
		direction: "down"
	},
	{
		pair: "USD/CHF",
		rate: "0.9098",
		change: "▲ +0.13%",
		direction: "up"
	},
	{
		pair: "EUR/GBP",
		rate: "0.8633",
		change: "▲ +0.11%",
		direction: "up"
	},
	{
		pair: "AUD/USD",
		rate: "0.7208",
		change: "▲ +0.08%",
		direction: "up"
	},
	{
		pair: "USD/CAD",
		rate: "1.3815",
		change: "▲ +0.04%",
		direction: "up"
	},
];

// Main component

function LiveMarkets() {
	return (
		<section
			className="flex h-10 w-full items-start overflow-x-auto overflow-y-hidden bg-[#292929] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
			aria-label="Live markets"
		>
			{/* Fixed label block */}
			<div className="sticky left-0 z-10 flex h-10 w-[124px] shrink-0 items-center gap-2 bg-[#CEF739] px-3 py-3 sm:w-[138px] sm:px-4">
				<span className="h-1.5 w-1.5 rounded-full bg-[#111111] shadow-[0_0_8px_rgb(17_17_17_/_0.35)]" />
				<span className="whitespace-nowrap text-[11px] font-medium leading-[1.2] text-[#111111] sm:text-xs">
					LIVE MARKETS
				</span>
			</div>

			{/* Horizontal ticker rates */}
			<div className="flex h-10 min-w-max shrink-0 items-start">
				{liveRates.map((item) => (
					<LiveRateItem key={item.pair} item={item}/>
				))}
			</div>
		</section>
	)
}

// Child component

function LiveRateItem({item}: {item: LiveRate}) {
	const changeColor = item.direction === "up" ? "text-[#25D366]" : "text-[#FF4D4D]";

	return (
		<article className="flex h-10 w-[176px] shrink-0 items-center gap-2 border border-[#5C5C5C] px-3 py-3 sm:w-[208px] sm:gap-2.5 sm:px-5">
			<span className="whitespace-nowrap text-[11px] leading-[1.2] text-[#9D9D9D] sm:text-xs">
				{item.pair}
				</span>
			<span className="whitespace-nowrap text-[11px] font-medium leading-[1.2] text-white sm:text-xs">
				{item.rate}
			</span>
			<span className={`whitespace-nowrap text-[11px] leading-[1.2] sm:text-xs ${changeColor}`}>
				{item.change}
			</span>
		</article>
	);
}

export default LiveMarkets;