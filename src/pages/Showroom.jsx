import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { locations as staticLocations, brand } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchLocations } from "../lib/content";

export default function Showroom() {
  const { data: locations } = useAsync(fetchLocations, [], staticLocations);

  return (
    <>
      <PageHero
        label="Showroom"
        title="Điểm trải nghiệm của Dien3ean"
        desc="Khám phá những không gian nơi bạn có thể thưởng thức cà phê DIEN3EAN và cảm nhận câu chuyện từ những vùng đất Tây Bắc."
        image={img("cafeMachineSteam", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionLabel>Điểm đến gần bạn</SectionLabel>
          <h2 className="section-heading">Tìm Dien3ean gần bạn</h2>

          <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="space-y-4">
              {locations.map((loc) => (
                <div key={loc.key} className="rounded-2xl border border-ink/10 bg-white p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="rounded-full bg-rust/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-rust-dark">
                        {loc.tag}
                      </span>
                      <h3 className="mt-3 text-xl font-semibold text-ink">{loc.name}</h3>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{loc.address}</p>
                  <p className="mt-1 text-sm text-ink-soft">{loc.hours}</p>
                  <p className="mt-1 text-sm text-ink-soft">{loc.services.join(" · ")}</p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <a
                      href={loc.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-rust px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-cream hover:bg-rust-dark"
                    >
                      Chỉ đường
                      <span aria-hidden>↗</span>
                    </a>
                    <a
                      href={`tel:${brand.hotline.replace(/[^\d+]/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.1em] text-ink hover:border-ink/30"
                    >
                      Gọi điện
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="overflow-hidden rounded-2xl border border-ink/10 lg:sticky lg:top-24 lg:h-[560px]">
              <iframe
                title="Bản đồ các showroom Dien3ean"
                src="https://maps.google.com/maps?q=26%20Nguy%E1%BB%85n%20C%C3%B4ng%20Hoan%2C%20Gi%E1%BA%A3ng%20V%C3%B5%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i&t=&z=13&ie=UTF8&output=embed"
                className="h-64 w-full lg:h-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
