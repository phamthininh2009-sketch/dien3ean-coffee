import CollectionEditor from "../components/CollectionEditor";
import { productsSchema } from "../schemas";

export default function ProductsAdmin() {
  return <CollectionEditor schema={productsSchema} />;
}
