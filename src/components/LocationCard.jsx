export default function LocationCard({ location }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <div className="relative h-48 overflow-hidden">
        <img src={location.image} alt={location.name} loading="lazy" className="h-full w-full object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-rust-dark">
          {location.tag}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-serif-heading text-2xl">{location.name}</h3>
        <p className="mt-2 text-sm text-ink-soft">{location.address}</p>
        <p className="mt-1 text-sm font-medium text-ink">{location.hours}</p>
        <p className="mt-2 text-xs uppercase tracking-[0.1em] text-ink-soft">
          {location.services.join(" · ")}
        </p>
        <a
          href={location.mapLink}
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-rust transition-colors hover:text-rust-dark"
        >
          Xem chỉ đường
          <span aria-hidden>↗</span>
        </a>
      </div>
    </div>
  );
}
