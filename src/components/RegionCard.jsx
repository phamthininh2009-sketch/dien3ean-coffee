import { Link } from "react-router-dom";

export default function RegionCard({ region, dark = true }) {
  return (
    <div
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-1 ${
        dark ? "border-cream/10 bg-coffee text-cream" : "border-ink/10 bg-white text-ink"
      }`}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={region.image}
          alt={`Vùng trồng ${region.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/70 to-transparent px-4 py-3 text-xs font-semibold uppercase tracking-[0.1em] text-white">
          <span>{region.altitude}</span>
          <span className="text-rust-light">{region.flavorTag}</span>
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif-heading text-2xl">{region.name}</h3>
        <p className={`mt-3 flex-1 text-sm leading-relaxed ${dark ? "text-cream/65" : "text-ink-soft"}`}>
          {region.desc}
        </p>
        <Link
          to="/vung-trong"
          className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-rust-light transition-colors hover:text-rust"
        >
          Khám phá vùng trồng
          <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
