import { useEffect, useState } from "react";
import Card from "./Card";
import SelectedPlayers from "./SelectedPlayer";

// eslint-disable-next-line react/prop-types
export default function PlayerSection({ mainCoins, setMainCoin }) {
  const [players, setPlayers] = useState([]);
  const [selectedPlayer, setSelectedPlayer] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    fetch("playerData.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  return (
    <div className="container my-12 mb-24">
      <div className="flex justify-between items-center">
        {/* conditional  */}
        {isAvailable ? (
          <h3 className="text-2xl font-bold mb-4">Available Players</h3>
        ) : (
          <h3 className="text-2xl font-bold mb-4">
            Selected Players ({selectedPlayer.length}/6)
          </h3>
        )}
        <div className="flex border rounded-lg mb-8">
          {/* available button */}
          <button
            onClick={() => {
              setIsSelected(false);
              setIsAvailable(true);
            }}
            className={`${
              isAvailable ? "bg-primary text-black" : "bg-gray-100"
            } rounded-l-lg px-4 py-2`}
          >
            Available
          </button>

          {/* selected button */}
          <button
            onClick={() => {
              setIsSelected(true);
              setIsAvailable(false);
            }}
            className={`${
              isSelected ? "bg-primary text-black" : "bg-gray-100"
            } rounded-r-lg px-4 py-2`}
          >
            Selected: {selectedPlayer.length}
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {isAvailable ? (
          <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {players.map((player) => (
              <Card
                key={player.playerId}
                setSelectedPlayer={setSelectedPlayer}
                selectedPlayer={selectedPlayer}
                player={player}
                mainCoins={mainCoins}
                setMainCoin={setMainCoin}
              />
            ))}
          </div>
        ) : (
          <SelectedPlayers
            selectedPlayer={selectedPlayer}
            setSelectedPlayer={setSelectedPlayer}
          />
        )}
      </div>
    </div>
  );
}
