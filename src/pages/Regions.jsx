import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { regions as staticRegions, products as staticProducts } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchRegions, fetchProducts } from "../lib/content";

export default function Regions() {
  const { data: regions } = useAsync(fetchRegions, [], staticRegions);
  const { data: products } = useAsync(fetchProducts, [], staticProducts);
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash, regions]);

  return (
    <>
      <PageHero
        label="Vùng trồng"
        title="Từ vùng trồng, nơi địa hình tạo nên hương vị"
        desc="Điện Biên là điểm khởi đầu trong hành trình của DIEN3EAN. Từ Mường Ảng, Tỏa Tình, Pú Nhung đến Quài Tở, Búng Lao và Mường Chà, mỗi vùng đất mang những điều kiện tự nhiên và câu chuyện riêng."
        image={img("terracesAerial", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page space-y-20">
          {regions.map((region, i) => {
            const product = products.find((p) => p.slug === region.slug);
            return (
              <div
                key={region.slug}
                id={region.slug}
                className={`grid scroll-mt-28 grid-cols-1 items-center gap-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={region.image}
                    alt={`Vùng trồng ${region.name}`}
                    className="h-80 w-full object-cover sm:h-96"
                  />
                </div>
                <div>
                  <SectionLabel>{region.altitude}</SectionLabel>
                  <h2 className="section-heading">{region.name}</h2>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                    {region.flavorTag}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-ink-soft">{region.desc}</p>
                  <Link
                    to={product ? `/san-pham/${product.slug}` : "/san-pham"}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors hover:border-rust hover:bg-rust hover:text-cream"
                  >
                    {product ? `Xem cà phê ${region.name}` : "Xem sản phẩm"}
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
