
'use client';

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.4,
      duration: 0.2,
      ease: "easeOut"
    },
  }),
};

const ShopGlowing = () => {
  return (
    <div className="p-10">
      <motion.h1
        className="text-center text-4xl p-5"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Shop with Glowing?
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {[1, 2, 3].map((item, i) => (
          <motion.div
            key={i}
            className="mx-auto text-center p-10"
            custom={i}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true }}
          >
            <Image
              src={`/images/feature-${item}.jpg`}
              width={100}
              height={100}
              alt={`feature-${item}`}
              className="mx-auto"
            />
            <div>
              <h1 className="text-2xl py-5">Guaranteed PURE</h1>
              <p className="text-gray-600">
                All Grace formulations adhere to strict purity standards and
                will never contain harsh or toxic ingredients
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ShopGlowing;
