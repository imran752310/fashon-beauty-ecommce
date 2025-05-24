import { client } from "../../sanity/lib/client";

export async function getCategories() {
  const query = `*[_type == "category"]{
    _id,
    name,
    text,
    "imageUrl": image.asset->url
  }`;

  return await client.fetch(query);
}
