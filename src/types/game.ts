export type SportType = "basketball" | "soccer" | "mma" | "tennis";

export interface Game {
  id: string;
  sport: SportType;
  home_team: string;
  away_team: string;
  home_score: number;
  away_score: number;
  status: "LIVE" | "FINAL" | "UPCOMING" | string;
  league?: string;
  home_logo?: string;
  away_logo?: string;
}

export interface SportCategory {
  id: SportType;
  name: string;
  icon: string;
  banner: string;
}
