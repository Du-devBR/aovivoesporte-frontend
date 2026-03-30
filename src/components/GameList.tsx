import { Game } from "@/types/game";
import GameCard from "./GameCard";
import { Skeleton } from "@/components/ui/skeleton";

interface GameListProps {
  games: Game[];
  loading: boolean;
}

const GameList = ({ games, loading }: GameListProps) => {
  if (loading) {
    return (
      <div>
        <p className="text-muted-foreground mb-6 text-center text-sm">Carregando jogos...</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Skeleton key={i} className="h-52 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  if (games.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
          <span className="text-3xl">📺</span>
        </div>
        <p className="text-lg font-semibold text-foreground">Nenhum jogo encontrado</p>
        <p className="text-sm text-muted-foreground mt-1">Volte mais tarde para acompanhar os jogos.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game, i) => (
        <GameCard key={game.id} game={game} index={i} />
      ))}
    </div>
  );
};

export default GameList;
