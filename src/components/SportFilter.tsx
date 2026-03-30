import { SportType } from "@/types/game";
import { sports } from "@/data/sports";

interface SportFilterProps {
  active: SportType | "all";
  onChange: (sport: SportType | "all") => void;
  counts: Record<string, number>;
}

const SportFilter = ({ active, onChange, counts }: SportFilterProps) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none px-1">
      <button
        onClick={() => onChange("all")}
        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
          active === "all"
            ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
            : "glass-card text-muted-foreground hover:text-foreground"
        }`}
      >
        🔥 Todos
        <span className={`text-xs px-1.5 py-0.5 rounded-md ${
          active === "all" ? "bg-black/20" : "bg-muted"
        }`}>
          {Object.values(counts).reduce((a, b) => a + b, 0)}
        </span>
      </button>
      {sports.map((sport) => (
        <button
          key={sport.id}
          onClick={() => onChange(sport.id)}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all whitespace-nowrap ${
            active === sport.id
              ? "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
              : "glass-card text-muted-foreground hover:text-foreground"
          }`}
        >
          {sport.icon} {sport.name}
          {counts[sport.id] > 0 && (
            <span className={`text-xs px-1.5 py-0.5 rounded-md ${
              active === sport.id ? "bg-black/20" : "bg-muted"
            }`}>
              {counts[sport.id]}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default SportFilter;
