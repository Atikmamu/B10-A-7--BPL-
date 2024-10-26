import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import PlayerSection from "./components/PlayerSection";
import Newsletter from "./components/Newsletter";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);
  const [mainCoins, setMainCoin] = useState(0);

  const handleIncreaseCoins = () => {
    setMainCoin(mainCoins + 600000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header mainCoins={mainCoins} setMainCoin={setMainCoin} />
      <Banner onClaimCredit={handleIncreaseCoins} />

      <div className="flex-1">
        <PlayerSection
          players={players}
          setPlayers={setPlayers}
          mainCoins={mainCoins}
          setMainCoin={setMainCoin}
        />
      </div>

      <div className="relative flex-1">
        <div className="absolute -top-[5%] md:-top-[5%] lg:-top-10 w-full">
          <Newsletter />
        </div>
        <div className="pt-24 md:pt-32 lg:pt-40">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
