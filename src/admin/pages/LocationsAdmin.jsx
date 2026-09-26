import CollectionEditor from "../components/CollectionEditor";
import { locationsSchema } from "../schemas";

export default function LocationsAdmin() {
  return <CollectionEditor schema={locationsSchema} />;
}
