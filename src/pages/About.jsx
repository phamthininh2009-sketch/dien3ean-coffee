import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { useSiteContent, usePageHero } from "../lib/SiteContent";

export default function About() {
  const { brand, pillars, story } = useSiteContent();
  const hero = usePageHero("about", {
    label: "Về chúng tôi",
    title: "Nơi địa hình tạo nên hương vị",
    desc: brand.heroDesc,
  });
  const gallery = story.gallery || [];

  return (
    <>
      <PageHero {...hero} desc={hero.desc || brand.heroDesc} />

      <section className="bg-cream py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>Về chúng tôi</SectionLabel>
            <h2 className="section-heading">{story.heading}</h2>
            {(story.paragraphs || []).map((p, i) => (
              <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            {story.highlight && (
              <p className="font-serif-heading mt-8 border-l-2 border-rust pl-5 text-2xl italic leading-snug text-ink">
                {story.highlight}
              </p>
            )}
            {(story.paragraphs2 || []).map((p, i) => (
              <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-8">
              <Button to="/vung-trong" variant="outline">
                Khám phá vùng trồng
              </Button>
            </div>
          </div>

          {gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt=""
                  loading="lazy"
                  className={`w-full rounded-2xl object-cover ${i === 0 ? "col-span-2 h-64" : "h-48"}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-coffee py-24 text-cream">
        <div className="container-page">
          <SectionLabel light>Bản sắc thương hiệu</SectionLabel>
          <h2 className="section-heading max-w-xl">{brand.tagline}</h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.key || p.title}
                className="overflow-hidden rounded-2xl border border-cream/10 bg-coffee-dark"
              >
                <img src={p.image} alt={p.title} loading="lazy" className="h-56 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif-heading text-2xl">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream/60">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
