
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Blogs = () => {
  const blogData = [
    { id: 1, image: "/images/blog-1.jpg", title: "Find a Store", href: "/discover" },
    { id: 2, image: "/images/blog-2.jpg", title: "Find a Store", href: "/discover" },
    { id: 3, image: "/images/blog-3.jpg", title: "Find a Store", href: "/discover" },
  ];

  return (
    <div className="px-5 py-15">
      {/* Animated Heading */}
      <motion.div
        className="mx-auto text-center text-5xl m-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1>More to Discover</h1>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
        {blogData.map((blog, index) => (
          <motion.div
            key={blog.id}
            className="overflow-hidden"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {/* Blog Image */}
            <div
              className="relative w-full h-[250px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
              style={{ backgroundImage: `url("${blog.image}")` }}
            ></div>

            {/* Blog Text/Link */}
            <div className="p-10 text-black text-center h-full max-w-md">
              <h2 className="text-2xl font-semibold pb-4 cursor-pointer hover:text-green-700 transition-all">
                {blog.title}
              </h2>
              <Link
                href={blog.href}
                className="text-base hover:opacity-75 cursor-pointer"
              >
                Discover Now →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
