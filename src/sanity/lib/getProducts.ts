import { client } from "./client";
import { urlFor } from "./image";

export async function getProducts() {
  const query = `*[_type == "product"]{
      name,
        image,
        description,
        price,
        price_id,
        category
      }`;

  const products = await client.fetch(query);

  return products.map((product: any) => ({
    ...product,
    thumbnail: urlFor(product.thumbnail), // ✅ this makes it a real image URL
  }));
}
