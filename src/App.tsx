import Header from "./components/Header";
import LiveMarkets from "./components/LiveMarkets";
import HistoryPage from "./features/history/HistoryPage";

import './App.css';

function App() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-hidden border border-black bg-[#111111] shadow-[0_24px_80px_rgb(0_0_0_/_0.35)]">
      <Header />
      <LiveMarkets />
      <HistoryPage />
    </main>
  )
}

export default App;