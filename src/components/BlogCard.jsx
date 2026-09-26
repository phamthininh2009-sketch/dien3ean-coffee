import { Link } from "react-router-dom";

export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function BlogCard({ post }) {
  const href = `/blog/${post.slug}`;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white">
      <Link to={href} className="relative block h-48 overflow-hidden">
        {post.cover_image_url && (
          <img
            src={post.cover_image_url}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {post.blog_categories && (
          <span className="absolute left-3 top-3 rounded-full bg-rust px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-cream">
            {post.blog_categories.name}
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-[10px] font-semibold text-cream">
          {formatDate(post.published_at)}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-rust">Nhật ký Dien3ean</p>
        <h3 className="font-serif-heading mt-2 text-xl leading-snug">
          <Link to={href} className="hover:text-rust">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
        <Link
          to={href}
          className="mt-4 inline-flex items-center gap-2 self-start text-xs font-semibold uppercase tracking-[0.12em] text-rust hover:text-rust-dark"
        >
          Đọc thêm
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
