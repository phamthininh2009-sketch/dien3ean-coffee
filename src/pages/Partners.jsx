import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { partners, brand } from "../data/site";

export default function Partners() {
  return (
    <>
      <PageHero
        label="Đối tác"
        title={partners.title}
        desc={partners.desc}
        image={partners.image}
      />

      <section className="bg-cream py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionLabel>Chính sách hợp tác</SectionLabel>
            <p className="text-base leading-relaxed text-ink-soft">{partners.desc}</p>
            <p className="mt-5 text-base leading-relaxed text-ink-soft">{partners.desc2}</p>

            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              <li>• Nhà nhập khẩu & nhà phân phối cà phê nhân xanh</li>
              <li>• Đối tác rang xay theo hồ sơ hương vị riêng</li>
              <li>• Doanh nghiệp F&B: quán cà phê, nhà hàng, khách sạn, văn phòng</li>
              <li>• Hỗ trợ thử mẫu và tư vấn trước khi hợp tác</li>
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/lien-he"
                className="inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
              >
                Liên hệ hợp tác
              </Link>
              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-ink hover:bg-ink hover:text-cream"
              >
                Xem câu hỏi thường gặp
              </Link>
            </div>
          </div>

          <div className="rounded-2xl bg-coffee p-8 text-cream">
            <h3 className="font-serif-heading text-2xl">Thông tin liên hệ</h3>
            <div className="mt-6 space-y-4 text-sm text-cream/70">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust-light">
                  Hotline
                </span>
                {brand.hotline}
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust-light">
                  Email
                </span>
                {brand.email}
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust-light">
                  Instagram
                </span>
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-cream">
                  @dien3eancoffee
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust-light">
                  Facebook
                </span>
                <a href={brand.facebook} target="_blank" rel="noreferrer" className="hover:text-cream">
                  facebook.com/dien3eancoffee
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
