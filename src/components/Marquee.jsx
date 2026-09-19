export default function Marquee({ words = [], dark = true }) {
  const items = [...words, ...words];
  return (
    <div
      className={`overflow-hidden border-y ${
        dark ? "border-cream/10 bg-coffee-dark text-cream/70" : "border-ink/10 bg-cream text-ink/60"
      } py-3`}
    >
      <div className="flex w-max animate-marquee gap-6 whitespace-nowrap text-xs font-medium uppercase tracking-[0.2em]">
        {items.map((word, i) => (
          <span key={i} className="flex items-center gap-6">
            {word}
            <span className="text-rust">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
