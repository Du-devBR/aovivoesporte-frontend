import { Game } from "@/types/game";
import { useEffect, useRef, useState } from "react";
import TeamLogo from "./TeamLogo";

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  const isLive = game.status === "LIVE";
  const isFinal = game.status === "FINAL";
  const isUpcoming = game.status === "UPCOMING";
  const prevScoreRef = useRef({ home: game.home_score, away: game.away_score });
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const prev = prevScoreRef.current;
    if (prev.home !== game.home_score || prev.away !== game.away_score) {
      setFlash(true);
      const t = setTimeout(() => setFlash(false), 500);
      prevScoreRef.current = { home: game.home_score, away: game.away_score };
      return () => clearTimeout(t);
    }
  }, [game.home_score, game.away_score]);

  return (
    <div
      className={`glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30 animate-fade-up ${
        isLive ? "animate-glow" : ""
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Top row: league + status */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
          {game.league || game.sport}
        </span>
        {isLive && (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[hsl(var(--live))] px-3 py-1 text-xs font-bold text-white animate-pulse-live">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            AO VIVO
          </span>
        )}
        {isFinal && (
          <span className="inline-flex items-center rounded-full bg-[hsl(var(--final))/0.15] px-3 py-1 text-xs font-bold text-[hsl(var(--final))]">
            FINAL
          </span>
        )}
        {isUpcoming && (
          <span className="inline-flex items-center rounded-full bg-[hsl(var(--upcoming))/0.15] px-3 py-1 text-xs font-bold text-[hsl(var(--upcoming))]">
            EM BREVE
          </span>
        )}
      </div>

      {/* Teams & Score */}
      <div className="space-y-3">
        {/* Home team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <TeamLogo teamKey={game.home_logo} teamName={game.home_team} size="md" />
            <span className="font-semibold text-foreground truncate">{game.home_team}</span>
          </div>
          <span className={`text-2xl font-black tabular-nums ${flash ? "animate-score-flash" : ""} ${
            !isUpcoming && game.home_score > game.away_score ? "text-[hsl(var(--primary))]" : "text-foreground"
          }`}>
            {isUpcoming ? "-" : game.home_score}
          </span>
        </div>

        {/* Divider */}
        <div className="h-px bg-border/50" />

        {/* Away team */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <TeamLogo teamKey={game.away_logo} teamName={game.away_team} size="md" />
            <span className="font-semibold text-foreground truncate">{game.away_team}</span>
          </div>
          <span className={`text-2xl font-black tabular-nums ${flash ? "animate-score-flash" : ""} ${
            !isUpcoming && game.away_score > game.home_score ? "text-[hsl(var(--primary))]" : "text-foreground"
          }`}>
            {isUpcoming ? "-" : game.away_score}
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameCard;
