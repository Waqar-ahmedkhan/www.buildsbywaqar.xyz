const COVER_PALETTES = [
  ["#e8e1d3", "#243a36", "#c16c4b"],
  ["#d6dfd8", "#344e42", "#b77b4e"],
  ["#e3d8cf", "#54433d", "#b86b5a"],
  ["#d9dfeb", "#35445f", "#c18a53"],
  ["#e7dfc3", "#494b38", "#a56845"],
  ["#ded6e7", "#4f405b", "#bc795b"],
];

export function ReadingCover({ title, tone, className = "" }: { title: string; tone: string; className?: string }) {
  const seed = title.split("").reduce((value, character) => value + character.charCodeAt(0), 0);
  const [paper, ink, accent] = COVER_PALETTES[seed % COVER_PALETTES.length];
  const offset = seed % 24;
  const isFilm = tone === "film";
  const titleLines = title.split(" ").slice(0, 3);

  return (
    <span
      className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-md border border-border/70 ${className || "h-16 w-14"}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 80" className="h-full w-full" role="img" aria-label={`${title} cover artwork`}>
        <rect width="64" height="80" fill={paper} />
        <path d={`M0 ${47 + offset / 3}C15 ${35 + offset / 4} 38 ${61 - offset / 3} 64 ${40 + offset / 4}V80H0Z`} fill={ink} opacity=".9" />
        <circle cx={46 - (offset % 11)} cy={25 + (offset % 9)} r={9 + (offset % 6)} fill={accent} />
        {isFilm ? (
          <>
            <path d={`M0 ${53 + offset / 4}h64M0 ${59 + offset / 4}h64`} stroke={paper} strokeOpacity=".55" />
            <path d={`M${10 + (offset % 9)} 80 33 ${43 + offset / 4} 55 80`} fill={accent} opacity=".86" />
          </>
        ) : (
          <>
            <path d="M10 0v80" stroke={ink} strokeOpacity=".15" />
            <path d={`M17 ${11 + (offset % 7)}h29M17 ${15 + (offset % 7)}h20`} stroke={ink} strokeOpacity=".3" />
          </>
        )}
        <text x="7" y="65" fill={isFilm ? paper : ink} fontSize="5.5" fontWeight="600" letterSpacing=".2">
          {titleLines.map((line, index) => (
            <tspan key={index} x="7" dy={index === 0 ? 0 : 6}>{line.slice(0, 16)}</tspan>
          ))}
        </text>
      </svg>
    </span>
  );
}
