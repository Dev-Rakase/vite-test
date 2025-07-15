import { useQuery } from "@tanstack/react-query";
import { fetchGames, fetchJackPort } from "../libs/api";
import Loading from "../components/Loading";
import Error from "../components/Error";
import GameCard from "../components/GameCard";
import { useSearchParams } from "react-router";
import { useMemo } from "react";

export default function Home() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("category") || "top";

  const { isLoading, data, isError } = useQuery({
    queryKey: ["games"],
    queryFn: fetchGames,
  });

  const {
    isLoading: loadingJackPort,
    data: jackportsData,
    isError: jackportsError,
  } = useQuery({
    queryKey: ["jackports"],
    queryFn: fetchJackPort,
    refetchInterval: 3000,
  });

  const filteredGame = useMemo(() => {
    if (!data) return [];

    if (query == "other") {
      const otherCategories = ["ball", "virtual", "fun"];
      const othersGroup = data?.filter((game) =>
        game.categories.some((cat) => otherCategories.includes(cat))
      );
      return othersGroup;
    }
    return data.filter((game) => game.categories.includes(query));
  }, [query, data]);

  if (isLoading && loadingJackPort) return <Loading />;

  if (isError && jackportsError) return <Error />;

  return (
    <div className="w-full px-4 lg:px-0 ">
      {filteredGame.length ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 container  mx-auto my-16 gap-x-4 gap-y-8">
          {filteredGame.map((game) => (
            <GameCard
              key={game.id}
              {...game}
              jackport={jackportsData?.find((jp) => jp.game == game.id)?.amount}
            />
          ))}
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center my-10">
          No Related Games Found
        </div>
      )}
    </div>
  );
}
