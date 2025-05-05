"use client";

import React from 'react';
import Image from 'next/image';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';

export default function ProductClient({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white m-10 py-10">
      <div className="mx-auto max-w-screen-xl px-4 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <Image src={product.thumbnail} alt={product.title} width={400} height={400} />
          <div className="md:py-8">
            <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
            <div className="mb-6 flex items-center gap-3">
              <button className="flex gap-x-2 px-3 bg-[#4e7460] text-white p-3 rounded-full">
                <span>4.2</span>
                <FaStar className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-500">56 Ratings</span>
            </div>

            <div className="mb-4">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800">${product.salePrice}</span>
                <span className="mb-0.5 text-red-500 line-through">${product.mrp}</span>
              </div>
              <span className="text-sm text-gray-500">Incl. VAT + Shipping</span>
            </div>

            <div className="flex gap-2.5 mt-4">
              <button
                onClick={() => addToCart(product)}
                className="flex gap-x-2 px-3 bg-black hover:bg-[#4e7460] text-white p-3 rounded-md"
              >
                <span>Add To Cart</span>
                <FaShoppingCart className="w-5 h-5" />
              </button>
              <Link href={'/checkout/'} className="flex gap-x-2 px-3 border hover:bg-[#4e7460] hover:text-white p-3 rounded-md">
                <span>Checkout</span>
              </Link>
            </div>

            <p className="mt-12 text-base text-gray-500">
              Lorem ipsum product description...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
