import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../../lib/supabaseClient";

const cards = [
  { to: "/admin/noi-dung", label: "Nội dung chung", hint: "Thương hiệu, câu chuyện, FAQ, ảnh bìa" },
  { to: "/admin/vung-trong", label: "Vùng trồng", table: "regions" },
  { to: "/admin/san-pham", label: "Sản phẩm", table: "products" },
  { to: "/admin/blog", label: "Bài viết blog", table: "blog_posts" },
  { to: "/admin/showroom", label: "Showroom", table: "locations" },
  { to: "/admin/tin-nhan", label: "Tin nhắn liên hệ", table: "contact_messages" },
];

export default function Dashboard() {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    (async () => {
      const tables = cards.map((c) => c.table).filter(Boolean);
      const results = await Promise.all(
        tables.map((t) => supabase.from(t).select("*", { count: "exact", head: true })),
      );
      const next = {};
      tables.forEach((t, i) => {
        next[t] = results[i].count ?? 0;
      });
      setCounts(next);
    })();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-ink">Tổng quan</h1>
      <p className="mt-1 text-sm text-ink-soft">
        Mọi thay đổi ở đây sẽ hiện ngay trên website, không cần chỉnh sửa code.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <Link
            key={card.to}
            to={card.to}
            className="rounded-xl border border-ink/10 bg-white p-5 transition-colors hover:border-rust/50"
          >
            <p className="text-sm font-semibold text-ink">{card.label}</p>
            <p className="mt-2 text-sm text-ink-soft">
              {card.table ? `${counts[card.table] ?? "..."} mục` : card.hint}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-ink/10 bg-white p-6">
        <h2 className="text-sm font-semibold text-ink">Hướng dẫn nhanh</h2>
        <ul className="mt-3 space-y-2 text-sm text-ink-soft">
          <li>Chọn mục cần sửa ở menu bên trái, bấm vào từng dòng để mở nội dung.</li>
          <li>Đổi ảnh bằng nút Tải ảnh lên, ảnh được lưu thẳng lên máy chủ.</li>
          <li>Bấm Lưu thay đổi, sau đó tải lại trang website để xem kết quả.</li>
          <li>Bài viết blog chỉ hiện ra ngoài khi đã điền Ngày đăng.</li>
        </ul>
      </div>
    </div>
  );
}
