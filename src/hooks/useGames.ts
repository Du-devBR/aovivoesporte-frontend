import { useState, useEffect, useCallback } from "react";
import { Game, SportType } from "@/types/game";
import { fetchGames } from "@/services/api";

const POLL_INTERVAL = 10_000;

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);
  const [activeSport, setActiveSport] = useState<SportType | "all">("all");

  const load = useCallback(async () => {
    try {
      const data = await fetchGames();
      setGames(data);
      setLastUpdated(new Date());
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
    const interval = setInterval(load, POLL_INTERVAL);
    return () => clearInterval(interval);
  }, [load]);

  const filteredGames = activeSport === "all"
    ? games
    : games.filter((g) => g.sport === activeSport);

  return { games: filteredGames, allGames: games, loading, lastUpdated, activeSport, setActiveSport };
}
