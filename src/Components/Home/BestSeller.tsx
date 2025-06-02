
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong, FaRegEye } from "react-icons/fa6";
import { SimplifiedProduct } from "@/interface";
import { client } from "@/sanity/lib/client";

import ProductCard from "./ProductCard";


export const revalidate = 0;

async function getData() {
  const query = `*[_type == "product"]{
        _id,
          price,
        name,
        description,
          "imageUrl":image[0].asset->url,
          "slug": slug.current,
          "categoryName": category->name,
          
      }`;

  const products = await client.fetch(query);

  return products;
}


export default async function BestSellerClient(){

const products: SimplifiedProduct[] = await getData();

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10" data-aos="fade-up" data-aos-anchor-placement="top-center">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Our Best Seller</h1>
        <Link href="/" className="text-gray-900 cursor-pointer text-sm sm:text-base flex items-center space-x-2">
          <span>Shop All Product</span> <FaArrowRightLong />
        </Link>
      </div>

   <ProductCard products={products}  />
    </div>
  );
};
