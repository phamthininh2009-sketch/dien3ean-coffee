import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import LocationCard from "../components/LocationCard";
import { img } from "../data/images";
import { locations as staticLocations } from "../data/site";
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
          <h2 className="font-serif-heading max-w-xl text-4xl italic leading-tight sm:text-5xl">
            Tìm Dien3ean gần bạn.
          </h2>

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
