import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { MenuIcon } from "lucide-react";
const nav_links = [
  {
    lable: "Top Games",
    to: "/?category=top",
    query: "top",
  },
  {
    lable: "New Games",
    to: "/?category=new",
    query: "new",
  },
  {
    lable: "Slots",
    to: "/?category=slots",
    query: "slots",
  },
  {
    lable: "Jackpots",
    to: "/?category=jackpots",
    query: "jackpots",
  },
  {
    lable: "Live",
    to: "/?category=live",
    query: "live",
  },
  {
    lable: "Blackjack",
    to: "/?category=blackjack",
    query: "blackjack",
  },
  {
    lable: "Roulette",
    to: "/?category=roulette",
    query: "roulette",
  },
  {
    lable: "Table",
    to: "/?category=table",
    query: "table",
  },
  {
    lable: "Pocker",
    to: "/?category=pocker",
    query: "pocker",
  },
  {
    lable: "Other",
    to: "/?category=other",
    query: "other",
  },
];
// #8DC63F, #373737, #FFFFFF, #FCFCFC

export default function Navbar() {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("category") || "top";
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full bg-[#373737] ">
      <div className="justify-between items-center text-white w-full min-h-14 px-8 hidden lg:flex">
        {nav_links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`p-4 text-center ${
              query == link.query ? "bg-[#8DC63F] " : ""
            }`}
          >
            {link.lable}
          </Link>
        ))}
      </div>

      <div className="flex justify-between items-center text-white w-full min-h-14 px-8 lg:hidden relative">
        <h1 className="font-bold text-lg">Game</h1>
        <button onClick={() => setShowMenu((prev) => !prev)}>
          <MenuIcon />
        </button>

        <div
          className={`absolute ${
            showMenu ? "flex" : "hidden"
          } justify-between items-center flex-col top-14 left-0 right-0 w-full h-auto z-10 bg-slate-500`}
        >
          {nav_links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className={`p-4 text-center w-full ${
                query == link.query ? "bg-[#8DC63F] " : ""
              }`}
            >
              {link.lable}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
