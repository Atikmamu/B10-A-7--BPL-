import PropTypes, { array } from "prop-types";
import { toast } from "react-toastify";

// eslint-disable-next-line react/prop-types
const Card = ({
  player,
  setSelectedPlayer,
  selectedPlayer,
  mainCoins,
  setMainCoin,
}) => {
  const {
    playerId,
    name,
    country,
    image,
    role,
    battingType,
    bowlingType,
    biddingPrice,
  } = player || {};

  const handleChoosePlayer = () => {
    if (mainCoins <= 0) {
      return toast.warning("Your accounts has no money");
    }
    if (mainCoins < biddingPrice) {
      return toast.warning(
        "Your accounts balance is vary low! please claim credit."
      );
    }

    const isExist = selectedPlayer.find((p) => p.playerId == playerId);

    if (isExist) {
      return toast.warning("Player selected already isExist");
    } else if (selectedPlayer.length === 6) {
      return toast.warning("You have already choose 6 players.");
    } else {
      setSelectedPlayer([...selectedPlayer, player]);
      const newBalance = mainCoins - biddingPrice;
      setMainCoin(newBalance);
      toast.success("Player selected successful");
    }
  };

  return (
    <div className="card border-2">
      <figure className="px-8 pt-7 rounded-xl">
        <img className="w-full md:h-52 rounded-xl" src={image} alt={name} />
      </figure>
      <div className="card-body">
        <div className="flex gap-4 mb-2">
          <div className="text-2xl font-semibold flex gap-4">
            <i className="fa-solid fa-user flex items-center"></i>
            {name}
          </div>
        </div>
        <div className="flex gap-4 justify-between">
          <div className="flex items-center gap-3">
            <i className="fa-solid fa-flag"></i>
            {country}
          </div>
          <button className="btn card-actions justify-end items-center">
            {role}
          </button>
        </div>
        <h2 className="text-xl font-bold">Rating</h2>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mt-1">{battingType}</h3>
          <h3 className="text-lg font-bold text-gray-600 mt-1">
            {bowlingType}
          </h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-lg font-bold mt-1">{biddingPrice}</h3>
          <div className="card-actions justify-end">
            <button
              onClick={handleChoosePlayer}
              className="btn text-gray-950 text-lg"
            >
              Choose Player
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  player: PropTypes.object,
  setSelectedPlayer: array,
  selectedPlayer: array,
};

export default Card;
