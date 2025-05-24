// lib/getProducts.ts or sanity/queries/getProducts.ts
import { client } from "../../sanity/lib/client";

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    name,
    price,
    price_id,
    description,
    "slug": slug.current,
    "images": image[].asset->url,
  }`;

  return await client.fetch(query);
}
