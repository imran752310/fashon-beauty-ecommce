"use client";
import { motion } from "framer-motion";
import { SimplifiedProduct } from "@/interface";
import React from "react";
import AddToCartButton from "./AddToCard";
import AddToFavoriteButton from "./AddToFavorite";
import { FaRegEye } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

interface Props {
  products: SimplifiedProduct[];
}

const ProductCard = ({ products }: Props) => {
  return (
    <div>
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((product, index) => (
          <motion.div
            key={product._id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-md text-center space-y-3 relative group overflow-hidden cursor-pointer transition duration-300"
          >
            <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 -translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-10">
              <AddToCartButton
                product={{
                  id: product._id,
                  title: product.title,
                  slug: product.slug,
                  description: product.description,
                  imageUrl: product.imageUrl,
                  price: product.price,
                  name: product.name,
                }}
              />
              <AddToFavoriteButton
                product={{
                  id: product._id,
                  title: product.title,
                  slug: product.slug,
                  description: product.description,
                  imageUrl: product.imageUrl,
                  price: product.price,
                  name: product.name,
                }}
              />
              <Link
                href={`/product/${product.slug}`}
                className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow"
              >
                <FaRegEye size={23} />
              </Link>
            </div>

            <div className="bg-[#f9f9f9] p-6">
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={160}
                height={260}
                className="mx-auto"
              />
            </div>

            <div className="text-lg font-semibold text-gray-900">
              ${product.price}
            </div>
            <div className="text-sm text-gray-700">{product.name}</div>
            <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-5">
              <div className="flex text-[#4e7460]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.061-.884L10 3l2.939 5.026 6.061.884-4.64 3.636 1.518 5.545z" />
                    </svg>
                  ))}
              </div>
              <span className="ml-1">5170 reviews</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
