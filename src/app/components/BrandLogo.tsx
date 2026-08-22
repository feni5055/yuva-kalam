type BrandLogoProps = {
  tagline?: string;
  inverted?: boolean;
  compact?: boolean;
  className?: string;
};

export function BrandLogo({
  tagline = "Magazine",
  inverted = false,
  compact = false,
  className = "",
}: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Yuva Kalam Magazine">
      <span className={`${compact ? "w-9 h-9" : "w-12 h-12"} overflow-hidden rounded-full border border-border bg-[#efebeb] shrink-0`}>
        <img
          src="/yuva-kalam-official.jpg"
          alt="Yuva Kalam official logo"
          width={compact ? 36 : 48}
          height={compact ? 36 : 48}
          className="w-full h-full object-cover scale-[1.42]"
        />
      </span>
      <div>
        <div className={`${inverted ? "text-primary-foreground" : "text-primary"} font-bold leading-tight font-display ${compact ? "text-sm" : "text-[1.1rem]"}`}>
          Yuva Kalam
        </div>
        <div className={`${inverted ? "text-primary-foreground/60" : "text-muted-foreground"} text-xs leading-tight tracking-widest uppercase font-body`}>
          {tagline}
        </div>
      </div>
    </div>
  );
}
