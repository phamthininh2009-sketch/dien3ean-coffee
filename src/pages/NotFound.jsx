import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center bg-cream px-6 pt-20 text-center">
      <p className="section-label">404</p>
      <h1 className="font-serif-heading mt-4 text-4xl">Không tìm thấy trang</h1>
      <p className="mt-3 max-w-md text-sm text-ink-soft">
        Trang bạn tìm kiếm không tồn tại hoặc đã được di chuyển.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
      >
        Về trang chủ
      </Link>
    </section>
  );
}
