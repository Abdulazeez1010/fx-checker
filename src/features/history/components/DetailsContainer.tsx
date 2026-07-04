import ChartPanel from "./ChartPanel";
import DesktopTabs from "./DesktopTabs";
import StatsContainer from "./StatsContainer";

function DetailsContainer() {
  return (
    <section className="flex w-full flex-col gap-5" aria-label="Rate details">
      <DesktopTabs />
      <StatsContainer />
      <ChartPanel />
    </section>
  )
}

export default DetailsContainer;