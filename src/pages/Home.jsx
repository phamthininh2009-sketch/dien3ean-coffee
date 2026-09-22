import Button from "../components/Button";
import SectionLabel from "../components/SectionLabel";
import Marquee from "../components/Marquee";
import RegionCard from "../components/RegionCard";
import ProductCard from "../components/ProductCard";
import LocationCard from "../components/LocationCard";
import { img } from "../data/images";
import {
  brand,
  pillars,
  regions as staticRegions,
  products as staticProducts,
  journeySteps,
  locations as staticLocations,
} from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchRegions, fetchProducts, fetchLocations } from "../lib/content";

export default function Home() {
  const { data: regions } = useAsync(fetchRegions, [], staticRegions);
  const { data: products } = useAsync(fetchProducts, [], staticProducts);
  const { data: locations } = useAsync(fetchLocations, [], staticLocations);

  return (
    <>
      {/* ================= HERO / SLIDESHOW ================= */}
      <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-coffee-dark pb-20 text-cream">
        <img
          src={img("heroMisty", { w: 1920 })}
          alt="Núi rừng Điện Biên trong sương sớm"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/60 to-coffee-dark/40" />

        <div className="container-page relative pt-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rust-light">
            ĐIỆN BIÊN · TÂY BẮC VIỆT NAM
          </p>
          <h1 className="font-serif-heading mt-6 max-w-4xl text-[13vw] leading-[0.95] sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {brand.name}
          </h1>
          <p className="mt-6 max-w-lg text-lg font-medium uppercase tracking-[0.15em] text-cream/80">
            {brand.heroTitle}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/65">{brand.heroDesc}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/san-pham" variant="primary">
              Khám phá Dien3ean
            </Button>
            <Button to="/showroom" variant="ghost">
              Showroom
            </Button>
          </div>
        </div>

        <div className="absolute bottom-24 right-8 hidden -rotate-90 items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cream/50 md:flex">
          <span className="h-px w-8 bg-cream/40" /> Scroll
        </div>
      </section>

      <Marquee words={brand.marqueeWords} />

      {/* stats */}
      <section className="bg-coffee-dark py-10 text-cream">
        <div className="container-page grid grid-cols-1 gap-8 sm:grid-cols-3">
          {brand.stats.map((s) => (
            <div key={s.label} className="text-center sm:text-left">
              <p className="font-serif-heading text-3xl text-rust-light md:text-4xl">{s.value}</p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cream/50">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 1: VỀ CHÚNG TÔI ================= */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionLabel>Về chúng tôi</SectionLabel>
          <h2 className="section-heading max-w-2xl">{brand.tagline}</h2>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.key} className="group overflow-hidden rounded-2xl border border-ink/10 bg-white">
                <div className="h-64 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif-heading text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Button to="/ve-chung-toi" variant="outline">
              Đọc câu chuyện Dien3ean
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VÙNG TRỒNG ================= */}
      <section className="bg-coffee py-24 text-cream">
        <div className="container-page">
          <SectionLabel light>Vùng trồng</SectionLabel>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-heading max-w-xl">Từ vùng trồng, nơi địa hình tạo nên hương vị.</h2>
            <p className="max-w-md text-sm leading-relaxed text-cream/60">
              Điện Biên là điểm khởi đầu trong hành trình của DIEN3EAN. Từ Mường Ảng, Tỏa Tình, Pú Nhung
              đến Quài Tở, Búng Lao và Mường Chà, mỗi vùng đất mang những điều kiện tự nhiên và câu
              chuyện riêng.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regions.map((r) => (
              <RegionCard key={r.slug} region={r} />
            ))}
          </div>

          <div className="mt-10">
            <Button to="/vung-trong" variant="ghost">
              Khám phá tất cả vùng trồng
            </Button>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: SẢN PHẨM ================= */}
      <section className="bg-cream py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Sản phẩm</SectionLabel>
              <h2 className="section-heading max-w-xl">Coffee Collection</h2>
            </div>
            <Button to="/san-pham" variant="outline">
              Xem toàn bộ cửa hàng
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: HÀNH TRÌNH CỦA HẠT CÀ PHÊ ================= */}
      <section className="bg-white py-24">
        <div className="container-page">
          <SectionLabel>Hành trình của hạt cà phê</SectionLabel>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="section-heading max-w-xl">Giữ trọn những gì vùng đất tạo nên.</h2>
            <p className="max-w-md text-sm leading-relaxed text-ink-soft">
              Mỗi lô cà phê Dien3ean được theo dõi từ vùng trồng, thu hái, sơ chế đến tuyển chọn thành
              phẩm. Chúng tôi ưu tiên sự minh bạch về nguồn gốc và những phương pháp giúp giữ lại đặc
              tính tự nhiên của từng vùng cà phê Điện Biên.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step) => (
              <div key={step.no} className="group">
                <div className="relative h-72 overflow-hidden rounded-2xl">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="font-serif-heading absolute left-4 top-4 text-3xl text-white/80">
                    {step.no}
                  </span>
                </div>
                <h3 className="mt-4 text-sm font-semibold uppercase tracking-[0.1em]">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: SHOWROOM ================= */}
      <section className="bg-cream-soft py-24">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionLabel>Showroom</SectionLabel>
              <h2 className="section-heading max-w-xl">Điểm trải nghiệm của Dien3ean</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">Điểm đến gần bạn.</p>
            </div>
            <Button to="/showroom" variant="outline">
              Xem tất cả địa điểm ↗
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {locations.map((loc) => (
              <LocationCard key={loc.key} location={loc} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
