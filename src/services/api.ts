import { Game } from "@/types/game";

const API_URL = "http://localhost:3001/games";

const MOCK_GAMES: Game[] = [
  // Basketball
  { id: "1", sport: "basketball", league: "NBA", home_team: "Lakers", away_team: "Warriors", home_score: 102, away_score: 98, status: "LIVE", home_logo: "lakers", away_logo: "warriors" },
  { id: "2", sport: "basketball", league: "NBA", home_team: "Celtics", away_team: "Heat", home_score: 88, away_score: 91, status: "LIVE", home_logo: "celtics", away_logo: "heat" },
  { id: "3", sport: "basketball", league: "NBA", home_team: "Nets", away_team: "76ers", home_score: 110, away_score: 105, status: "FINAL", home_logo: "nets", away_logo: "76ers" },
  // Soccer
  { id: "4", sport: "soccer", league: "La Liga", home_team: "Real Madrid", away_team: "Barcelona", home_score: 2, away_score: 1, status: "LIVE", home_logo: "real-madrid", away_logo: "barcelona" },
  { id: "5", sport: "soccer", league: "Premier League", home_team: "Man City", away_team: "Liverpool", home_score: 3, away_score: 3, status: "LIVE", home_logo: "man-city", away_logo: "liverpool" },
  { id: "6", sport: "soccer", league: "Premier League", home_team: "Liverpool", away_team: "Barcelona", home_score: 4, away_score: 0, status: "FINAL", home_logo: "liverpool", away_logo: "barcelona" },
  // MMA
  { id: "7", sport: "mma", league: "UFC 310", home_team: "Jon Jones", away_team: "Stipe Miocic", home_score: 0, away_score: 0, status: "UPCOMING" },
  { id: "8", sport: "mma", league: "UFC 310", home_team: "Alex Pereira", away_team: "Jiří Procházka", home_score: 1, away_score: 0, status: "LIVE" },
  // Tennis
  { id: "9", sport: "tennis", league: "Roland Garros", home_team: "Djokovic", away_team: "Alcaraz", home_score: 2, away_score: 1, status: "LIVE" },
  { id: "10", sport: "tennis", league: "Wimbledon", home_team: "Sinner", away_team: "Medvedev", home_score: 3, away_score: 1, status: "FINAL" },
];

export async function fetchGames(): Promise<Game[]> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("API error");
    return await res.json();
  } catch {
    return MOCK_GAMES;
  }
}
