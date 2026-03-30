import { sports } from "@/data/sports";
import { SportType } from "@/types/game";

interface SportBannerProps {
  sport: SportType;
}

const SportBanner = ({ sport }: SportBannerProps) => {
  const sportData = sports.find((s) => s.id === sport);
  if (!sportData) return null;

  return (
    <div className="relative w-full h-40 md:h-52 rounded-2xl overflow-hidden mb-6 animate-fade-up">
      <img
        src={sportData.banner}
        alt={sportData.name}
        className="w-full h-full object-cover"
        width={1920}
        height={640}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="absolute inset-0 flex items-center px-8">
        <div>
          <span className="text-4xl mb-2 block">{sportData.icon}</span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            {sportData.name}
          </h2>
          <p className="text-white/60 text-sm mt-1">Jogos ao vivo e resultados</p>
        </div>
      </div>
    </div>
  );
};

export default SportBanner;
