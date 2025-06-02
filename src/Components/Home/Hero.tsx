'use client'

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="mx-5"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="bg-[url('/images/hero-banner-1.jpg')] bg-cover bg-center w-full h-[550px] md:h-[600px] lg:h-[600px]">
        <div className="w-[90%] md:w-[80%] h-full mx-auto flex flex-col justify-center space-y-4 px-4 md:px-0">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-Urbanist leading-tight text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Reveal The <br /> Beauty of Skin
          </motion.h1>

          <motion.p
            className="text-sm sm:text-base md:text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Made using clean, non-toxic ingredients, our products <br className="hidden sm:block" />
            are designed for everyone.
          </motion.p>

          <motion.span
            className="text-base sm:text-lg md:text-xl font-semibold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Starting at $7.99
          </motion.span>

          <motion.div
            className="py-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              href={"/shop"}
              className="w-36 sm:w-40 cursor-pointer p-2 sm:p-3 bg-black hover:bg-[#4e7460] text-white rounded font-semibold text-sm sm:text-md"
            >
              Shop Now
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Hero;
