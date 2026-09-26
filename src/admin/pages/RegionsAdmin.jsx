import CollectionEditor from "../components/CollectionEditor";
import { regionsSchema } from "../schemas";

export default function RegionsAdmin() {
  return <CollectionEditor schema={regionsSchema} />;
}
