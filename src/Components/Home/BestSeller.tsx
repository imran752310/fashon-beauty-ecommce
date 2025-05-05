"use client";
import { useCart } from "@/context/CartContext"; // ✅ import useCart
import { useFavorite } from "@/context/FavoriteContext"; // ✅

import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong, FaRegEye, FaRegHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri";

import { dummyProducts } from "@/constant/data";

const BestSeller = () => {
  const products = dummyProducts;
  const { addToCart } = useCart(); // ✅ use the cart
  const { addToFavorite } = useFavorite();

  return (
    <div
      className="px-4 sm:px-6 lg:px-8 py-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Our Best Seller</h1>
        <Link
          href="/"
          className="text-gray-900 cursor-pointer text-sm sm:text-base flex items-center space-x-2"
        >
          <span>Shop All Product</span> <FaArrowRightLong />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-md text-center space-y-3 relative group overflow-hidden cursor-pointer transition duration-300"
          >
            {/* Hover Buttons */}
            <div
              className="absolute inset-0 flex items-center justify-center space-x-2 
                opacity-0 -translate-x-10 transition-all duration-500 
                group-hover:opacity-100 group-hover:translate-x-0 z-10"
            >
              <button
                onClick={() => addToCart(product)} // ✅ Add to Cart button
                className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow"
              >
                <RiShoppingBag4Fill size={23} />
              </button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  addToFavorite(product); // ✅
                }}
                className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow"
              >
                <FaRegHeart size={23} />
              </button>
              <Link href={`/Product/${product.slug}`} className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow">
                <FaRegEye size={23} />
              </Link>
            </div>

            {/* Image Section */}
            <div className="bg-[#f9f9f9]  p-6">
              <Image
                src={product.thumbnail}
                alt={product.title}
                width={160}
                height={260}
                className="mx-auto"
              />
            </div>

            {/* Product Info */}
            <div className="text-lg font-semibold text-gray-900">
              ${product.salePrice}
            </div>
            <div className="text-sm text-gray-700">{product.title}</div>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
