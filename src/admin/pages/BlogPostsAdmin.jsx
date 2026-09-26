import { useEffect, useState } from "react";
import CollectionEditor from "../components/CollectionEditor";
import { blogPostsSchema } from "../schemas";
import { listRows } from "../lib/api";

export default function BlogPostsAdmin() {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    listRows("blog_categories")
      .then(setCategories)
      .catch(() => setCategories([]));
  }, []);

  if (!categories) return <p className="text-sm text-ink-soft">Đang tải...</p>;

  return <CollectionEditor schema={blogPostsSchema(categories)} />;
}
