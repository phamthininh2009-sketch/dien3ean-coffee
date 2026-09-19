import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import ProductCard from "../components/ProductCard";
import { img } from "../data/images";
import { productCategories as staticProductCategories, products as staticProducts } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchProductCategories, fetchProducts } from "../lib/content";

export default function Products() {
  const { data: productCategories } = useAsync(fetchProductCategories, [], staticProductCategories);
  const { data: products } = useAsync(fetchProducts, [], staticProducts);

  return (
    <>
      <PageHero
        label="Sản phẩm"
        title="Cà phê từ Điện Biên"
        desc="Từ hạt nguyên bản đến những tuyển chọn dành cho thưởng thức và trao tặng. Khám phá hương vị Tây Bắc qua từng vùng trồng, từng mức rang và từng cách pha."
        image={img("roastLevelsBowls", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionLabel>Danh mục sản phẩm</SectionLabel>
          <h2 className="font-serif-heading max-w-xl text-4xl italic leading-tight sm:text-5xl">
            Nhân xanh · Cà phê theo vùng trồng · Phin & dụng cụ · Bộ quà tặng
          </h2>

          <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
            {productCategories.map((c) => (
              <div key={c.key} className="group relative h-64 overflow-hidden rounded-2xl border border-ink/10">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream-soft py-24">
        <div className="container-page">
          <SectionLabel>Coffee Collection</SectionLabel>
          <h3 className="font-serif-heading max-w-lg text-4xl leading-tight sm:text-5xl">
            <span className="italic">Packaging as</span>
            <br /> collectible art.
          </h3>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coffee py-16 text-cream">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h3 className="font-serif-heading text-3xl">Cần nguồn cà phê cho quán hoặc nhà hàng?</h3>
          <p className="max-w-xl text-sm text-cream/60">
            DIEN3EAN cung cấp cà phê nhân xanh, rang nguyên hạt và rang xay theo hồ sơ hương vị và quy
            mô riêng của từng đối tác.
          </p>
          <Link
            to="/doi-tac"
            className="mt-2 inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
          >
            Trở thành đối tác
          </Link>
        </div>
      </section>
    </>
  );
}
