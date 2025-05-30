import React from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';
import { FullProduct } from '@/interface';
import { product } from '@/sanity/products';
import { DocumentDefinition, PreviewConfig } from 'sanity';

async function getData(slug: string) {
  const query = `*[_type == "product" && slug.current == "${slug}"][0] {
      _id,
      price,
      name,
      description,
      "images": image[].asset->url, // Fetch all images
      "slug": slug.current,
      "categoryName": category->name, 
      price_id,
  }`;
  const product = await client.fetch(query);
  return product;
}


export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const data: FullProduct = await getData(params.slug);

  function addToCart(product: { type: "document"; name: "product"; } & Omit<DocumentDefinition, "preview"> & { preview?: PreviewConfig<Record<string, string>, Record<never, any>> | undefined; }): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div className="bg-white m-10 py-10">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image src={product.imageUrl} alt={product.name}  width={400} height={400} />
          <div className="md:py-8">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-x-2 px-3 bg-[#4e7460] text-white p-3 rounded-full">
                <span>4.2</span>
                <FaStar className="w-5 h-5" />
              </div>
              <span className="text-sm text-gray-500">56 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800">${product.price}</span>
                <span className="mb-0.5 text-red-500 line-through">${product.price}</span>
              </div>
              <span className="text-sm text-gray-500">Incl. VAT + Shipping</span>
            </div>

            <div className="flex gap-2.5 mt-4">
              <div
                // onClick={() => addToCart(product)}
                className="flex gap-x-2 px-3 bg-black hover:bg-[#4e7460] cursor-pointer text-white p-3 rounded-full"
              >
                <span>Add To Cart</span>
                <FaShoppingCart className="w-5 h-5" />
              </div>
              <Link href={'/checkout/'} className="flex gap-x-2 px-3 border hover:bg-[#4e7460] hover:text-white p-3 rounded-full">
                <span>Checkout</span>
              </Link>
            </div>

            <p className="mt-12 text-base text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, saepe sit delectus cupiditate beatae consequatur at ratione deleniti eveniet ex a? Natus modi aliquam pariatur amet repellat nihil neque? Quo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
