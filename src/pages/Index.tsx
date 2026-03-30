import Header from "@/components/Header";
import GameList from "@/components/GameList";
import SportFilter from "@/components/SportFilter";
import SportBanner from "@/components/SportBanner";
import { useGames } from "@/hooks/useGames";
import { SportType } from "@/types/game";

const Index = () => {
  const { games, allGames, loading, lastUpdated, activeSport, setActiveSport } = useGames();

  const liveCount = allGames.filter((g) => g.status === "LIVE").length;

  const counts: Record<string, number> = {};
  allGames.forEach((g) => {
    counts[g.sport] = (counts[g.sport] || 0) + 1;
  });

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <Header lastUpdated={lastUpdated} liveCount={liveCount} />

        {/* Sport Filter */}
        <div className="mb-6">
          <SportFilter active={activeSport} onChange={setActiveSport} counts={counts} />
        </div>

        {/* Banner */}
        {activeSport !== "all" && (
          <SportBanner sport={activeSport as SportType} />
        )}

        {/* Games Grid */}
        <GameList games={games} loading={loading} />
      </div>
    </div>
  );
};

export default Index;
