import logo from "../assets/images/logo.svg"

function Header() {
	return (
		<header className="flex h-[66px] w-full items-center gap-5 px-6 py-5 text-white">
			<a
				className="flex h-[26px] w-[139px] shrink-0 items-center outline-none transition-opacity hover:opacity-80 focus-visible:ring-2 focus-visible:ring-[#CEF739] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111]"
				href="/"
				aria-label="FX Checker home"
			>
				<img
					className="h-[26px] w-[139px]"
					src={logo}
					alt="FX Checker"
				/>
			</a>
			<p className="m-0 ml-auto whitespace-nowrap text-sm font-medium leading-[1.2] text-[#9D9D9D]">
				55 CURRENCIES . EOD . ECB DATA
			</p>
		</header>
	)
}

export default Header;