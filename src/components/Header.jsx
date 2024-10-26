import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Header({ mainCoins }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl py-4">
      <div className="container">
        <div className="flex justify-between items-center px-4">
          {/* Logo */}
          <div>
            <img src="./assets/logo.png" alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Navigation and Coin Display for larger screens */}
          <div className="hidden md:flex gap-8 items-center cursor-pointer">
            <p className="font-bold text-lg text-black">Home</p>
            <p className="font-bold text-lg text-black">Fixture</p>
            <p className="font-bold text-lg text-black">Teams</p>
            <p className="font-bold text-lg text-black">Schedules</p>

            {/* Coin Display */}
            <button className="flex gap-2 items-center border px-4 py-2 rounded-xl">
              <span className="font-bold text-lg text-black">
                {mainCoins} Coin
              </span>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/emoji/48/coin-emoji.png"
                alt="coin-emoji"
              />
            </button>
          </div>

          {/* Hamburger menu for mobile devices */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 px-4 space-y-2">
            <p className="font-bold text-lg text-black">Home</p>
            <p className="font-bold text-lg text-black">Fixture</p>
            <p className="font-bold text-lg text-black">Teams</p>
            <p className="font-bold text-lg text-black">Schedules</p>

            {/* Coin Display in mobile view */}
            <button className="flex gap-2 items-center border px-4 py-2 rounded-xl mt-2">
              <span className="font-bold text-lg text-black">
                {mainCoins} Coin
              </span>
              <img
                width="35"
                height="35"
                src="https://img.icons8.com/emoji/48/coin-emoji.png"
                alt="coin-emoji"
              />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
