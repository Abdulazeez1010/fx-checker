import ConverterWrapper from "./components/ConverterWrapper";

function HistoryPage() {
	return (
		<section
			className="flex w-full max-w-[1100px] flex-col px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12"
			aria-label="History default"
		>
			<ConverterWrapper/>
			{/* Desktop - History - Default content will go here */}
		</section>
	)
}

export default HistoryPage;