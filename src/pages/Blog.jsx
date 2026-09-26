import { useMemo, useState } from "react";
import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import BlogCard from "../components/BlogCard";
import { blogCategories as staticBlogCategories } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchBlogCategories, fetchPublishedBlogPosts } from "../lib/content";
import { usePageHero } from "../lib/SiteContent";

export default function Blog() {
  const { data: blogCategories } = useAsync(fetchBlogCategories, [], staticBlogCategories);
  const { data: posts } = useAsync(fetchPublishedBlogPosts, [], []);
  const [activeTab, setActiveTab] = useState("Tất cả");
  const hero = usePageHero("blog", {
    label: "Blog",
    title: "Những câu chuyện phía sau hạt cà phê",
    desc: "Từ vùng trồng, mùa vụ và người nông dân đến nghệ thuật rang, cách pha và những trải nghiệm cùng cà phê. DIEN3EAN kể lại hành trình của những hạt cà phê Điện Biên và Tây Bắc qua từng câu chuyện.",
  });

  const tabs = useMemo(() => ["Tất cả", ...blogCategories.map((c) => c.name)], [blogCategories]);
  const filteredPosts = useMemo(
    () => (activeTab === "Tất cả" ? posts : posts.filter((p) => p.blog_categories?.name === activeTab)),
    [posts, activeTab],
  );

  return (
    <>
      <PageHero {...hero} />

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
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
