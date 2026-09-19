import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import Button from "../components/Button";
import { img } from "../data/images";
import { story, pillars, brand } from "../data/site";

export default function About() {
  return (
    <>
      <PageHero
        label="Về chúng tôi"
        title="Nơi địa hình tạo nên hương vị"
        desc={brand.heroDesc}
        image={img("seaOfClouds", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>{story.title}</SectionLabel>
            {story.paragraphs.map((p, i) => (
              <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <p className="font-serif-heading mt-8 border-l-2 border-rust pl-5 text-2xl italic leading-snug text-ink">
              {story.highlight}
            </p>
            {story.paragraphs2.map((p, i) => (
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
          <div className="grid grid-cols-2 gap-4">
            <img
              src={img("farmingVillageAerial", { w: 800 })}
              alt="Bản làng nông nghiệp giữa vùng núi Tây Bắc"
              className="col-span-2 h-64 w-full rounded-2xl object-cover"
            />
            <img
              src={img("greenBeansPile", { w: 600 })}
              alt="Hạt cà phê Arabica Điện Biên"
              className="h-48 w-full rounded-2xl object-cover"
            />
            <img
              src={img("waterfallForest", { w: 600 })}
              alt="Núi rừng Tây Bắc phủ sương"
              className="h-48 w-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-coffee py-24 text-cream">
        <div className="container-page">
          <SectionLabel light>Bản sắc thương hiệu</SectionLabel>
          <h2 className="font-serif-heading max-w-xl text-4xl leading-tight sm:text-5xl">
            {brand.tagline}
          </h2>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.key} className="overflow-hidden rounded-2xl border border-cream/10 bg-coffee-dark">
                <img src={p.image} alt={p.title} className="h-56 w-full object-cover" />
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
