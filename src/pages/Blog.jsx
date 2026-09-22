import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { blogCategories as staticBlogCategories } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchBlogCategories, fetchPublishedBlogPosts } from "../lib/content";

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function Blog() {
  const { data: blogCategories } = useAsync(fetchBlogCategories, [], staticBlogCategories);
  const { data: posts } = useAsync(fetchPublishedBlogPosts, [], []);
  const [activeTab, setActiveTab] = useState("Tất cả");

  const tabs = useMemo(() => ["Tất cả", ...blogCategories.map((c) => c.name)], [blogCategories]);
  const filteredPosts = useMemo(
    () => (activeTab === "Tất cả" ? posts : posts.filter((p) => p.blog_categories?.name === activeTab)),
    [posts, activeTab],
  );

  return (
    <>
      <PageHero
        label="Blog"
        title="Những câu chuyện phía sau hạt cà phê"
        desc="Từ vùng trồng, mùa vụ và người nông dân đến nghệ thuật rang, cách pha và những trải nghiệm cùng cà phê. DIEN3EAN kể lại hành trình của những hạt cà phê Điện Biên và Tây Bắc qua từng câu chuyện."
        image={img("waterfallForest", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionLabel>Bài viết</SectionLabel>
          <h2 className="section-heading">Khám phá câu chuyện</h2>

          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`rounded-full px-5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors ${
                  activeTab === tab
                    ? "bg-rust text-cream"
                    : "border border-ink/15 text-ink-soft hover:border-ink/30 hover:text-ink"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {filteredPosts.length === 0 ? (
            <div className="mt-16 rounded-2xl bg-cream-soft p-8 text-center text-sm text-ink-soft">
              Chưa có bài viết nào trong danh mục này. Theo dõi Dien3ean để đón đọc những câu chuyện mới.
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white"
                >
                  <div className="relative h-48 overflow-hidden">
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
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-rust">
                      Dien3ean Journal
                    </p>
                    <h3 className="font-serif-heading mt-2 text-xl leading-snug">{post.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-rust">
                      Đọc thêm
                      <span aria-hidden>→</span>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
