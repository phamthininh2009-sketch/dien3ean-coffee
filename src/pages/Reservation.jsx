import { useState } from "react";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { locations as staticLocations } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchLocations, submitReservation } from "../lib/content";

export default function Reservation() {
  const { data: locations } = useAsync(fetchLocations, [], staticLocations);
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
    locationKey: "",
    note: "",
  });

  function updateField(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      await submitReservation(form);
      setSent(true);
    } catch (err) {
      setError("Không gửi được, vui lòng thử lại hoặc gọi hotline. (" + err.message + ")");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <PageHero
        label="Đặt chỗ"
        title="Đặt chỗ tại Dien3ean"
        desc="Giữ chỗ trước để Dien3ean chuẩn bị chu đáo cho buổi thưởng thức cà phê của bạn tại showroom."
        image={img("cafeMachineSteam", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page max-w-xl">
          <SectionLabel>Thông tin đặt chỗ</SectionLabel>
          <h2 className="section-heading">Điền thông tin bên dưới</h2>
          <p className="mt-3 text-sm text-ink-soft">
            Đội ngũ Dien3ean sẽ gọi lại xác nhận trong thời gian sớm nhất.
          </p>

          {sent ? (
            <div className="mt-8 rounded-xl bg-cream-soft p-6 text-sm text-ink-soft">
              Cảm ơn bạn đã đặt chỗ! Dien3ean sẽ liên hệ xác nhận qua số điện thoại bạn đã cung cấp.
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
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
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
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                    placeholder="09xx xxx xxx"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Ngày đến
                  </label>
                  <input
                    required
                    type="date"
                    value={form.date}
                    onChange={updateField("date")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Giờ đến
                  </label>
                  <input
                    required
                    type="time"
                    value={form.time}
                    onChange={updateField("time")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Số khách
                  </label>
                  <input
                    required
                    type="number"
                    min={1}
                    value={form.guests}
                    onChange={updateField("guests")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                    Showroom
                  </label>
                  <select
                    required
                    value={form.locationKey}
                    onChange={updateField("locationKey")}
                    className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                  >
                    <option value="" disabled>
                      Chọn địa điểm
                    </option>
                    {locations.map((loc) => (
                      <option key={loc.key} value={loc.key}>
                        {loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-soft">
                  Ghi chú (tùy chọn)
                </label>
                <textarea
                  rows={3}
                  value={form.note}
                  onChange={updateField("note")}
                  className="mt-2 w-full rounded-lg border border-ink/15 bg-white px-4 py-3 text-sm outline-none focus:border-rust"
                  placeholder="Yêu cầu thêm về chỗ ngồi, dịp đặc biệt..."
                />
              </div>

              {error && <p className="text-sm text-rust-dark">{error}</p>}
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark disabled:opacity-60"
              >
                {submitting ? "Đang gửi..." : "Xác nhận đặt chỗ"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
