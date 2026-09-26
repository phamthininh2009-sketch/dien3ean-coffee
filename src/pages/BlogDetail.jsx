import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import BlogCard, { formatDate } from "../components/BlogCard";
import { useAsync } from "../hooks/useAsync";
import { fetchBlogPostBySlug, fetchPublishedBlogPosts } from "../lib/content";

// Minimal markup: "## " heading, "![caption](url)" image, "- " bullets, "1. " steps, blank line between blocks.
function ArticleBody({ content }) {
  const blocks = (content || "").trim().split(/\n\s*\n/);
  return blocks.map((block, i) => {
    const lines = block
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);
    if (lines.length === 0) return null;
    const first = lines[0];

    if (first.startsWith("## ")) {
      return (
        <h2 key={i} className="section-heading mt-12">
          {first.slice(3)}
        </h2>
      );
    }

    const image = first.match(/^!\[(.*)\]\((\S+)\)$/);
    if (image) {
      return (
        <figure key={i} className="my-10">
          <img src={image[2]} alt={image[1]} loading="lazy" className="max-h-[520px] w-full rounded-2xl object-cover" />
          <figcaption className="mt-3 text-sm text-ink-soft">{image[1]}</figcaption>
        </figure>
      );
    }

    if (lines.every((l) => l.startsWith("- "))) {
      return (
        <ul key={i} className="mt-5 list-disc space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
          {lines.map((l, j) => (
            <li key={j}>{l.slice(2)}</li>
          ))}
        </ul>
      );
    }

    if (lines.every((l) => /^\d+\.\s/.test(l))) {
      return (
        <ol key={i} className="mt-5 list-decimal space-y-2 pl-5 text-base leading-relaxed text-ink-soft">
          {lines.map((l, j) => (
            <li key={j}>{l.replace(/^\d+\.\s/, "")}</li>
          ))}
        </ol>
      );
    }

    return (
      <p key={i} className="mt-5 text-base leading-relaxed text-ink-soft">
        {lines.join(" ")}
      </p>
    );
  });
}

export default function BlogDetail() {
  const { slug } = useParams();
  return <BlogDetailContent key={slug} slug={slug} />;
}

function BlogDetailContent({ slug }) {
  const { data: post, loading } = useAsync(() => fetchBlogPostBySlug(slug), [slug], null);
  const { data: posts } = useAsync(fetchPublishedBlogPosts, [], []);

  if (!post) {
    return (
      <section className="flex min-h-[70vh] flex-col items-center justify-center bg-coffee-dark px-6 pt-20 text-center text-cream">
        <p className="section-label text-rust-light">Blog</p>
        <h1 className="font-serif-heading mt-4 text-4xl">
          {loading ? "Đang tải bài viết..." : "Không tìm thấy bài viết"}
        </h1>
        {!loading && (
          <Link
            to="/blog"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-rust px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-cream hover:bg-rust-dark"
          >
            Quay lại Blog
          </Link>
        )}
      </section>
    );
  }

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <PageHero
        label={post.blog_categories?.name ?? "Blog"}
        title={post.title}
        desc={post.excerpt}
        image={post.cover_image_url}
      />

      <section className="bg-cream py-24">
        <div className="container-page">
          <article className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-ink-soft">
              <Link to="/blog" className="text-rust hover:text-rust-dark">
                ‹ Quay lại Blog
              </Link>
              <span aria-hidden>·</span>
              <span>{formatDate(post.published_at)}</span>
            </div>
            <ArticleBody content={post.content} />
          </article>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-cream-soft py-24">
          <div className="container-page">
            <SectionLabel>Bài viết khác</SectionLabel>
            <h2 className="section-heading">Đọc tiếp</h2>
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
