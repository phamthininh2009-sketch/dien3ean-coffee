import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { submitContactMessage } from "../lib/content";
import { useSiteContent, usePageHero } from "../lib/SiteContent";

export default function Contact() {
  const { brand } = useSiteContent();
  const hero = usePageHero("contact", {
    label: "Liên hệ",
    title: "Kết nối cùng Dien3ean",
    desc: "Hãy bắt đầu một câu chuyện cùng chúng tôi. Từ nguồn cà phê, vùng nguyên liệu đến những cơ hội hợp tác, DIEN3EAN luôn sẵn sàng lắng nghe và đồng hành cùng bạn.",
  });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  function updateField(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitContactMessage(form);
      setSent(true);
    } catch (err) {
      setError("Không gửi được, vui lòng thử lại hoặc gọi hotline. (" + err.message + ")");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero {...hero} />

      <section className="bg-cream py-24">
        <div className="container-page grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <SectionLabel>Trụ sở chính</SectionLabel>
            <p className="font-serif-heading text-2xl">Trao đổi về hợp tác</p>
            <p className="mt-2 text-sm text-ink-soft">
              Nguồn cà phê · Sản phẩm · Quà tặng · Sự kiện
            </p>

            <div className="mt-8 space-y-5 text-sm text-ink-soft">
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                  Địa chỉ
                </span>
                {brand.address}
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                  Email
                </span>
                <a href={`mailto:${brand.email}`} className="hover:text-rust">
                  {brand.email}
                </a>
              </div>
              <div>
                <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-rust">
                  Hotline
                </span>
                <a href={`tel:${brand.hotline.replace(/[^\d+]/g, "")}`} className="hover:text-rust">
                  {brand.hotline}
                </a>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <a
                href={`tel:${brand.hotline.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
              >
                Gọi ngay
              </a>
              <a
                href={brand.facebook}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-ink/20 px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-ink hover:border-ink hover:bg-ink hover:text-cream"
              >
                Nhắn tin Facebook
              </a>
            </div>

            <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10">
              <iframe
                title="Bản đồ trụ sở Dien3ean"
                src="https://maps.google.com/maps?q=26%20Nguy%E1%BB%85n%20C%C3%B4ng%20Hoan%2C%20Gi%E1%BA%A3ng%20V%C3%B5%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i&t=&z=15&ie=UTF8&output=embed"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-ink/10 bg-white p-8">
            <h3 className="font-serif-heading text-2xl">Gửi lời nhắn</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Điền thông tin bên dưới, đội ngũ Dien3ean sẽ phản hồi sớm nhất.
            </p>

            {sent ? (
              <div className="mt-8 rounded-xl bg-cream-soft p-6 text-sm text-ink-soft">
                Cảm ơn bạn đã liên hệ! Dien3ean sẽ phản hồi qua email hoặc hotline sớm nhất có thể.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                      Họ và tên
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={updateField("name")}
                      className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust"
                      placeholder="Nguyễn Văn A"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                      Số điện thoại
                    </label>
                    <input
                      required
                      type="tel"
                      value={form.phone}
                      onChange={updateField("phone")}
                      className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust"
                      placeholder="09xx xxx xxx"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={updateField("email")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust"
                    placeholder="ban@email.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Nội dung
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={updateField("message")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-cream px-4 py-3 text-sm outline-none focus:border-rust"
                    placeholder="Bạn muốn trao đổi điều gì cùng Dien3ean?"
                  />
                </div>
                {error && <p className="text-sm text-rust-dark">{error}</p>}
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark disabled:opacity-60"
                >
                  {submitting ? "Đang gửi..." : "Gửi lời nhắn"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
