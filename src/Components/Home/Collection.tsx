"use client";

import Link from "next/link";
import React from "react";

interface Category {
  _id: string;
  name: string;
  text: string;
  imageUrl: string;
}

interface Props {
  categories: Category[];
}

export default function CollectionCard({ categories }: Props) {
  return (
    <div
      className="px-5 py-15"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {categories.map((cat) => (
          <div key={cat._id} className="overflow-hidden">
            <div
              className="relative w-full h-[430px] bg-cover bg-center transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url("${cat.imageUrl}")` }}
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{cat.name}</h2>
                  <p className="text-lg mb-8">{cat.text}</p>
                </div>
                <Link href={`/${cat.name}`}>
                  <span className="text-base font-semibold hover:opacity-75 cursor-pointer">
                    Discover Now →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
