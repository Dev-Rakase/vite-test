import { useSearchParams } from "react-router";
import Badge from "./Badge";

interface Game {
  id: string;
  name: string;
  image: string;
  categories: string[];
  jackport: number | undefined;
}

export default function GameCard({ image, categories, name, jackport }: Game) {
  const [searchParam] = useSearchParams();
  const currentTap = searchParam.get("category") || "top";

  const isTop = categories.includes("top");
  const isNew = categories.includes("new");

  const getFormattedCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <div className="rounded-lg w-full h-[200px] overflow-hidden hover:shadow-xl hover:scale-105 transition-all cursor-pointer relative group">
      {isTop && currentTap != "new" && <Badge text="Top" />}
      {isNew && currentTap != "top" && <Badge text="New" />}
      {jackport && (
        <div className="absolute top-0 left-0 right-0 bg-slate-500/80 text-center">
          <p className="text-white text-lg">{getFormattedCurrency(jackport)}</p>
        </div>
      )}

      <img src={image} className="w-full h-full" />

      <div className="absolute top-0 left-0 right-0 bottom-0 bg-slate-500/80 hidden group-hover:flex items-center justify-center flex-col gap-2">
        <p className="text-white text-xl">{name}</p>
        <button className="bg-[#8DC63F] text-white px-6 py-1 rounded">
          Play
        </button>
      </div>
    </div>
  );
}
