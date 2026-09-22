import { useMemo, useState } from "react";
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
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = useMemo(() => ["Tất cả", ...productCategories.map((c) => c.name)], [productCategories]);
  const filteredProducts = useMemo(
    () => (activeTab === "Tất cả" ? products : products.filter((p) => p.category === activeTab)),
    [products, activeTab],
  );

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
          <SectionLabel>Coffee Collection</SectionLabel>
          <h3 className="section-heading max-w-lg">Packaging as collectible art.</h3>

          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeTab === tab
                    ? "bg-rust text-cream"
                    : "border border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-coffee py-16 text-cream">
        <div className="container-page flex flex-col items-center gap-4 text-center">
          <h3 className="font-serif-heading text-2xl">Cần nguồn cà phê cho quán hoặc nhà hàng?</h3>
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
