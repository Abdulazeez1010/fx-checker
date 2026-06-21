import logo from "../assets/images/logo.svg"

function Header() {
	return (
		<header className="flex min-h-[58px] w-full items-center gap-4 px-4 py-4 text-white sm:min-h-[66px] sm:gap-5 sm:px-6 sm:py-5">
			<a
				className="flex h-[24px] w-[128px] shrink-0 items-center outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111] sm:h-[26px] sm:w-[139px]"
				href="/"
				aria-label="FX Checker home"
			>
				<img
					className="h-full w-full object-contain"
					src={logo}
					alt="FX Checker"
				/>
			</a>
			<p className="m-0 ml-auto hidden whitespace-nowrap text-[11px] font-medium leading-[1.2] text-[#9D9D9D] sm:block md:text-xs lg:text-sm">
				55 CURRENCIES · EOD · ECB DATA
			</p>
		</header>
	)
}

export default Header;