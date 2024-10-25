import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [players, setPlayers] = useState([]);

  // const getData = async () => {
  //   const res = await fetch("playerData.json");
  //   const data = await res.json();
  //   setPlayers(data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  useEffect(() => {
    fetch("playerData.json")
      .then((res) => res.json())
      .then((data) => {
        setPlayers(data);
      });
  }, []);

  return (
    <div>
      <h1>Player data:</h1>
      <div className="grid grid-cols-6 gap-4">
        {players.map((player) => (
          <div key={player.playerId}>
            <h1>{player.name}</h1>
            <img src={player.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
