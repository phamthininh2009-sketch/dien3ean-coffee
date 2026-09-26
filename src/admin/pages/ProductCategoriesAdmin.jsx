import CollectionEditor from "../components/CollectionEditor";
import { productCategoriesSchema } from "../schemas";

export default function ProductCategoriesAdmin() {
  return <CollectionEditor schema={productCategoriesSchema} />;
}
