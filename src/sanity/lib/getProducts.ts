// lib/sanity.ts
import { client } from "./client";
import { urlFor } from "./image";

export async function getProducts() {
  const query = `*[_type == "product"]{
  _id,
  slug,
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
    imageUrl: urlFor(product.image), // or thumbnail if you changed it
  }));
}
