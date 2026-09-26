import CollectionEditor from "../components/CollectionEditor";
import { blogCategoriesSchema } from "../schemas";

export default function BlogCategoriesAdmin() {
  return <CollectionEditor schema={blogCategoriesSchema} />;
}
