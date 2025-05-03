// 'use client';

// import { Product, useCart } from '@/context/CartContext';
// import Link from "next/link";
// import React, { FC } from "react";
// import Image from "next/image";
// import { RiShoppingBag4Fill } from "react-icons/ri";
// import { MdStarPurple500 } from "react-icons/md";
// import { IoRepeat } from "react-icons/io5";
// import { FaArrowRightLong } from "react-icons/fa6";
// import BuyingOptions from './AddToCard';

// import dummyProducts from '../../constant/data'

// interface Props {
//   product : Product;
//   onAddToCartClick?(): void;
//   onBuyNowClick?(): void;
// }

// const BestSeller: FC<Props> = ({
//   onAddToCartClick,
//   onBuyNowClick,
// }) => {
  
//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-10">
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <h1 className="text-2xl sm:text-3xl font-semibold">Our Best Seller</h1>
//         <Link href="/" className="text-gray-900 cursor-pointer text-sm sm:text-base flex items-center space-x-2">
//         <span>  Shop All Product</span> <FaArrowRightLong />
//         </Link>
//       </div>

//       {/* Products Grid */}
//       {dummyProducts.map((product: Product) =>{
//         <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
//         {Array(10).fill(0).map((_, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-md text-center space-y-3 relative group overflow-hidden cursor-pointer  transition duration-300"
//           >
//             {/* Hover Buttons */}
//             <div
//               className="absolute inset-0 flex items-center justify-center space-x-2 
//                 opacity-0 -translate-x-10 transition-all duration-500 
//                 group-hover:opacity-100 group-hover:translate-x-0 z-10"
//             >
//               <BuyingOptions product={product} />
//               </div>

//             {/* Image Section */}
//             <div className="bg-[#f9f9f9] rounded-md p-6">
//               <Image
//                 src={product.thumbnail}
//                 alt={product.title}
//                 width={160}
//                 height={260}
//                 className="mx-auto"
//               />
//             </div>

//             {/* Product Info */}
//             <div className="text-lg font-semibold text-gray-900">${product.salePrice}</div>
//             <div className="text-sm text-gray-700">
//             {product.title}
//             </div>
//             <div className="flex items-center justify-center space-x-1 text-sm text-gray-600 mb-5">
//               <div className="flex text-[#4e7460]">
//                 {Array(5)
//                   .fill(0)
//                   .map((_, i) => (
//                     <svg
//                       key={i}
//                       className="w-4 h-4 fill-current"
//                       xmlns="http://www.w3.org/2000/svg"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 15l-5.878 3.09L5.64 12.545 1 8.91l6.061-.884L10 3l2.939 5.026 6.061.884-4.64 3.636 1.518 5.545z" />
//                     </svg>
//                   ))}
//               </div>
//               <span className="ml-1">5170 reviews</span>
//             </div>
//           </div>
//         ))}
//       </div>
//       })

//       }
//     </div>
//   );
// };


// export default BestSeller;


'use client';

import { Product } from '@/context/CartContext';
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import BuyingOptions from './AddButton';

const BestSeller: FC = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('/api/products');
      const data = await res.json();
      console.log(data)
      setProducts(data);
    };

    fetchProducts();
  }, []);





  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h1 className="text-2xl sm:text-3xl font-semibold">Our Best Seller</h1>
        <Link href="/" className="text-gray-900 cursor-pointer text-sm sm:text-base flex items-center space-x-2">
          <span>Shop All Product</span> <FaArrowRightLong />
        </Link>
      </div>

      {/* Products Grid */}
      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
        {products.map((product: Product) => (
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
              <BuyingOptions product={product} slug={products.slug} />
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
            <div className="text-lg font-semibold text-gray-900">${product.salePrice}</div>
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
