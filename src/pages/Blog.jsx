import PageHero from "../components/PageHero";
import SectionLabel from "../components/SectionLabel";
import { img } from "../data/images";
import { blogCategories as staticBlogCategories } from "../data/site";
import { useAsync } from "../hooks/useAsync";
import { fetchBlogCategories, fetchPublishedBlogPosts } from "../lib/content";

export default function Blog() {
  const { data: blogCategories } = useAsync(fetchBlogCategories, [], staticBlogCategories);
  const { data: posts } = useAsync(fetchPublishedBlogPosts, [], []);

  return (
    <>
      <PageHero
        label="Blog"
        title="Những câu chuyện phía sau hạt cà phê"
        desc="Từ vùng trồng, mùa vụ và người nông dân đến nghệ thuật rang, cách pha và những trải nghiệm cùng cà phê — DIEN3EAN kể lại hành trình của những hạt cà phê Điện Biên và Tây Bắc qua từng câu chuyện."
        image={img("waterfallForest", { w: 1920 })}
      />

      <section className="bg-cream py-24">
        <div className="container-page">
          <SectionLabel>Danh mục</SectionLabel>
          <h2 className="font-serif-heading max-w-xl text-4xl italic leading-tight sm:text-5xl">
            Khám phá câu chuyện ↗
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {blogCategories.map((cat) => (
              <div
                key={cat.key}
                className="group flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-white sm:flex-row"
              >
                <div className="h-56 overflow-hidden sm:h-auto sm:w-2/5">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-6">
                  <h3 className="font-serif-heading text-2xl">{cat.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft">{cat.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="mt-16 rounded-2xl bg-cream-soft p-8 text-center text-sm text-ink-soft">
              Bài viết đang được cập nhật — theo dõi Dien3ean để đón đọc những câu chuyện đầu tiên.
            </div>
          ) : (
            <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div key={post.id} className="overflow-hidden rounded-2xl border border-ink/10 bg-white">
                  {post.cover_image_url && (
                    <img src={post.cover_image_url} alt={post.title} className="h-48 w-full object-cover" />
                  )}
                  <div className="p-6">
                    {post.blog_categories && (
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-rust">
                        {post.blog_categories.name}
                      </p>
                    )}
                    <h3 className="font-serif-heading mt-2 text-xl">{post.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
