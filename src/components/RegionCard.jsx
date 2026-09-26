import { Link } from "react-router-dom";

export default function RegionCard({ region }) {
  return (
    <Link
      to={`/vung-trong#${region.slug}`}
      className="group flex h-full flex-col rounded-2xl border border-cream/10 bg-coffee-dark/50 p-4 text-cream transition-colors duration-300 hover:border-cream/25"
    >
      <div className="h-52 overflow-hidden rounded-xl">
        <img
          src={region.image}
          alt={`Vùng trồng ${region.name}`}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col px-2 pt-5">
        <div className="flex items-start justify-between gap-4 text-[11px] font-semibold uppercase tracking-[0.12em]">
          <span className="shrink-0 text-rust-light">{region.altitude}</span>
          <span className="text-right text-cream/50">{region.flavorTag}</span>
        </div>
        <h3 className="font-serif-heading mt-3 text-2xl">{region.name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-cream/60">{region.desc}</p>
        <div className="mt-6 flex items-center justify-between border-t border-cream/10 pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-cream/50 transition-colors group-hover:text-rust-light">
          <span>Khám phá vùng trồng</span>
          <span aria-hidden className="text-base">›</span>
        </div>
      </div>
    </Link>
  );
}
