import PropTypes from "prop-types";
import { MdDeleteOutline } from "react-icons/md";

const SelectedPlayers = ({ selectedPlayer, setSelectedPlayer }) => {
  const handleRemovePlayer = (playerId) => {
    const updatedPlayers = selectedPlayer.filter(
      (p) => p.playerId !== playerId
    );
    setSelectedPlayer(updatedPlayers);
  };

  return (
    <div className="selected-players mt-8">
      <h2 className="text-2xl font-semibold mb-4">Selected Players</h2>
      <div className="grid gap-4">
        {selectedPlayer.map((player) => (
          <div
            key={player.playerId}
            className="card border p-4 shadow-lg rounded-lg"
          >
            <div className="flex justify-between items-center">
              <div className="flex">
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-20 h-20 object-cover rounded-md mr-4"
                />
                <div>
                  <h3 className="text-xl font-semibold">{player.name}</h3>
                  <p className="text-gray-600">Role: {player.role}</p>
                  <p className="text-gray-800 font-bold">
                    Price: ${player.biddingPrice}
                  </p>
                </div>
              </div>
              <div>
                <button
                  onClick={() => handleRemovePlayer(player.playerId)}
                  className="mt-2 text-red-500 px-4 py-1 rounded hover:text-red-600"
                >
                  <MdDeleteOutline size={24} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayer: PropTypes.array.isRequired,
  setSelectedPlayer: PropTypes.func.isRequired,
};

export default SelectedPlayers;
