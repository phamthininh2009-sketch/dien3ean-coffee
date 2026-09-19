import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { faqs } from "../data/site";

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/10 py-5">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="font-serif-heading text-lg sm:text-xl">{item.q}</span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/20 text-sm transition-transform duration-300 ${
            isOpen ? "rotate-45 border-rust text-rust" : ""
          }`}
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ${
          isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <p className="overflow-hidden text-sm leading-relaxed text-ink-soft">{item.a}</p>
      </div>
    </div>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <PageHero
        label="FAQ"
        title="Câu hỏi thường gặp"
        desc="Những điều đối tác và khách hàng thường muốn biết về nguồn gốc, sản phẩm và hợp tác cùng DIEN3EAN."
        image={img("roastLevelsBowls", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page max-w-3xl">
          <SectionLabel>Hỏi & đáp</SectionLabel>
          <div className="mt-4">
            {faqs.map((item, i) => (
              <FaqItem
                key={item.q}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
