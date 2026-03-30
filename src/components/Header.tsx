interface HeaderProps {
  lastUpdated: Date | null;
  liveCount: number;
}

const Header = ({ lastUpdated, liveCount }: HeaderProps) => {
  return (
    <header className="pt-10 pb-6 px-4">
      <div className="flex items-center justify-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-[hsl(var(--primary))] flex items-center justify-center">
          <span className="text-xl">⚡</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Aovivo<span className="text-[hsl(var(--primary))]">Esportes</span>
        </h1>
      </div>
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
        {liveCount > 0 && (
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--live))] animate-pulse-live" />
            <span className="font-medium">{liveCount} ao vivo</span>
          </div>
        )}
        <span className="w-px h-3 bg-border" />
        <span>Atualiza a cada 10s</span>
        {lastUpdated && (
          <>
            <span className="w-px h-3 bg-border" />
            <span>{lastUpdated.toLocaleTimeString("pt-BR")}</span>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
