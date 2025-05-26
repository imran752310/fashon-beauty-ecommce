import { client } from "./client";
import { urlFor } from "./image";

export async function getProducts() {
  const query = `*[_type == "product"]{
    _id,
    title,
    salePrice,
    "thumbnail": thumbnail.asset->,
    "slug": slug.current
  }`;

  const products = await client.fetch(query);

  return products.map((product: any) => ({
    ...product,
    thumbnail: urlFor(product.thumbnail), // ✅ this makes it a real image URL
  }));
}
