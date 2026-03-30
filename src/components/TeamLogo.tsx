import { teamLogos } from "@/data/teamLogos";

interface TeamLogoProps {
  teamKey?: string;
  teamName: string;
  size?: "sm" | "md" | "lg";
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
};

const TeamLogo = ({ teamKey, teamName, size = "md" }: TeamLogoProps) => {
  const logo = teamKey ? teamLogos[teamKey] : undefined;
  const initials = teamName.slice(0, 2).toUpperCase();

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden flex items-center justify-center bg-secondary shrink-0`}>
      {logo ? (
        <img
          src={logo}
          alt={teamName}
          className="w-full h-full object-contain p-1"
          loading="lazy"
        />
      ) : (
        <span className="text-xs font-bold text-muted-foreground">{initials}</span>
      )}
    </div>
  );
};

export default TeamLogo;
