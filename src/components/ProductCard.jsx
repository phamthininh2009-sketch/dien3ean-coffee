import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  const href = `/san-pham/${product.slug}`;
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/10">
      <Link to={href} className="relative block h-64 overflow-hidden bg-cream-soft">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-cream">
          {product.category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif-heading text-xl leading-snug">
          <Link to={href} className="hover:text-rust">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{product.desc}</p>

        <div className="mt-4 space-y-1.5 text-xs text-ink-soft">
          <p>
            <span className="font-semibold text-ink">Định lượng: </span>
            {product.weight}
          </p>
          <p>
            <span className="font-semibold text-ink">Hương vị: </span>
            {product.flavor.join(" • ")}
          </p>
          <p>
            <span className="font-semibold text-ink">Mức rang: </span>
            {product.roast.join(" | ")}
          </p>
          <p>
            <span className="font-semibold text-ink">Dạng: </span>
            {product.form.join(" | ")}
          </p>
        </div>

        <Link
          to={href}
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink transition-colors hover:border-rust hover:bg-rust hover:text-cream"
        >
          Khám phá cà phê
        </Link>
      </div>
    </div>
  );
}
