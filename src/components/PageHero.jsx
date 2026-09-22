import SectionLabel from "./SectionLabel";

export default function PageHero({ label, title, desc, image }) {
  return (
    <section className="relative flex min-h-[60vh] items-end overflow-hidden bg-coffee-dark pt-32 pb-14 text-cream">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark via-coffee-dark/70 to-coffee-dark/30" />
        </>
      )}
      <div className="container-page relative">
        {label && <SectionLabel light>{label}</SectionLabel>}
        <h1 className="font-serif-heading max-w-3xl text-4xl leading-tight sm:text-6xl md:text-7xl">{title}</h1>
        {desc && <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/70">{desc}</p>}
      </div>
    </section>
  );
}
