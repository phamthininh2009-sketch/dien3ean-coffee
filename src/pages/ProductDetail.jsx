import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import ProductCard from "../components/ProductCard";
import { brand, products as staticProducts, regions as staticRegions } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchProductBySlug, fetchProducts, fetchRegions } from "../lib/content";

export default function ProductDetail() {
  const { slug } = useParams();
  return <ProductDetailContent key={slug} slug={slug} />;
}

function ProductDetailContent({ slug }) {
  const fallback = staticProducts.find((p) => p.slug === slug) ?? null;
  const { data: product, loading } = useAsync(() => fetchProductBySlug(slug), [slug], fallback);
  const { data: products } = useAsync(fetchProducts, [], staticProducts);
  const { data: regions } = useAsync(fetchRegions, [], staticRegions);

  if (!product) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-coffee-dark px-6 pt-20 text-center text-cream">
        <p className="section-label text-rust-light">Sản phẩm</p>
        <h1 className="font-serif-heading mt-4 text-4xl">
          {loading ? "Đang tải sản phẩm..." : "Không tìm thấy sản phẩm"}
        </h1>
        {!loading && (
          <Link
            to="/san-pham"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
          >
            Xem toàn bộ sản phẩm
          </Link>
        )}
      </section>
    );
  }

  const region = regions.find((r) => r.slug === product.slug);
  const others = products.filter((p) => p.slug !== product.slug);
  const tel = brand.hotline.replace(/[^\d+]/g, "");

  const specs = [
    ["Định lượng", product.weight],
    ["Hương vị", product.flavor.join(" • ")],
    ["Mức rang", product.roast.join(" | ")],
    ["Dạng", product.form.join(" | ")],
  ];

  return (
    <>
      <PageHero label={product.category} title={product.name} desc={product.desc} image={product.image} />

      <section className="bg-cream py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-2">
          <div className="self-start overflow-hidden rounded-2xl border border-ink/10 lg:sticky lg:top-28">
            <img src={product.image} alt={product.name} className="max-h-[560px] w-full object-cover" />
          </div>

          <div>
            <SectionLabel>Thông tin sản phẩm</SectionLabel>
            <h2 className="section-heading">{product.name}</h2>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{product.desc}</p>

            <dl className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              {specs.map(([label, value]) => (
                <div key={label} className="flex justify-between gap-6 py-4 text-sm">
                  <dt className="font-semibold text-ink">{label}</dt>
                  <dd className="text-right text-ink-soft">{value}</dd>
                </div>
              ))}
            </dl>

            {region && (
              <div className="mt-8 rounded-2xl bg-cream-soft p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                  Vùng trồng · {region.altitude}
                </p>
                <p className="font-serif-heading mt-2 text-2xl">{region.name}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{region.desc}</p>
                <Link
                  to={`/vung-trong#${region.slug}`}
                  className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-rust hover:text-rust-dark"
                >
                  Tìm hiểu vùng trồng
                  <span aria-hidden>›</span>
                </Link>
              </div>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/lien-he"
                className="inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
              >
                Liên hệ đặt hàng
              </Link>
              <a
                href={`tel:${tel}`}
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-ink hover:bg-ink hover:text-cream"
              >
                Gọi {brand.hotline}
              </a>
            </div>
          </div>
        </div>
      </section>

      {others.length > 0 && (
        <section className="bg-cream-soft py-24">
          <div className="container-page">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <SectionLabel>Sản phẩm khác</SectionLabel>
                <h2 className="section-heading">Có thể bạn cũng thích</h2>
              </div>
              <Link
                to="/san-pham"
                className="inline-flex items-center justify-center self-start rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-ink hover:bg-ink hover:text-cream lg:self-auto"
              >
                Xem toàn bộ sản phẩm
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
