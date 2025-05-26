
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
    <div className="px-5 py-15" data-aos="fade-up" data-aos-anchor-placement="top-center">
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
                <Link href={`/category/${cat.name}`}>
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










// import Link from "next/link";
// import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// export default async function CollectionCard() {
//   const categories = await getCategories();

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
//       {categories.map((cat: { _id: Key | null | undefined; imageUrl: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }) => (
//         <div key={cat._id} className="relative rounded-xl overflow-hidden">
//           <div
//             className="h-[400px] bg-cover bg-center"
//             style={{ backgroundImage: `url(${cat.imageUrl})` }}
//           >
//             <div className="absolute inset-0 bg-black/30" />
//             <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
//               <h2 className="text-2xl font-bold">{cat.name}</h2>
//               <p className="mt-2">{cat.text}</p>
//               <Link href={`/category/${cat._id}`} className="mt-4 underline">
//                 Discover Now →
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }



// // import Link from "next/link";

// // export default function CollectionCard() {
// //   return (
// //     <div className="px-5 py-15" data-aos="fade-up"
// //     data-aos-anchor-placement="top-center">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
// //         {/* card 2 */}
// //         <div className="overflow-hidden">
// //           <div className="relative bg-[url('/images/collection-1.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
// //             <div className="absolute inset-0 bg-black/10"></div>{" "}
// //             {/* Optional overlay */}
// //             <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
// //                 <p className="text-lg mb-8">Get the glow</p>
// //               </div>
// //               <Link href="/discover">
// //                 <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
// //                   Discover Now →
// //                 </span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //         {/* card 2 */}
// //         <div className="overflow-hidden">
// //           <div className="relative bg-[url('/images/collection-2.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
// //             <div className="absolute inset-0 bg-black/10"></div>{" "}
// //             {/* Optional overlay */}
// //             <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
// //                 <p className="text-lg mb-8">Get the glow</p>
// //               </div>
// //               <Link href="/discover">
// //                 <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
// //                   Discover Now →
// //                 </span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //         {/* card 2 */}
// //         <div className="overflow-hidden">
// //           <div className="relative bg-[url('/images/collection-3.jpg')] w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105 ">
// //             <div className="absolute inset-0 bg-black/10"></div>{" "}
// //             {/* Optional overlay */}
// //             <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
// //               <div>
// //                 <h2 className="text-3xl font-bold mb-4">What’s New?</h2>
// //                 <p className="text-lg mb-8">Get the glow</p>
// //               </div>
// //               <Link href="/discover">
// //                 <span className="text-base font-semibold  hover:opacity-75 cursor-pointer">
// //                   Discover Now →
// //                 </span>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }


// // import Image from "next/image";
// // import Link from "next/link";
// // import { getCategories } from "../../sanity/lib/getCategories"; // adjust path as needed
// // import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

// // export default async function CollectionCard() {
// //   const categories = await getCategories();
// // console.log(categories)
// //   return (
// //     <div className="px-5 py-15" data-aos="fade-up" data-aos-anchor-placement="top-center">
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7">
// //         {categories.map((cat: { _id: Key | null | undefined; imageUrl: any; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; text: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | Iterable<ReactNode> | null | undefined; }) => (
// //           <div key={cat._id} className="overflow-hidden">
// //             <div
// //               className="relative w-full h-[430px] bg-cover bg-center transform transition-transform duration-300 hover:scale-105"
// //               style={{ backgroundImage: `url(${cat.imageUrl})` }}
// //             >
// //               <div className="absolute inset-0 bg-black/10"></div>
// //               <div className="relative z-10 p-10 text-black flex flex-col justify-between h-full max-w-md">
// //                 <div>
// //                   <h2 className="text-3xl font-bold mb-4">{cat.name}</h2>
// //                   <p className="text-lg mb-8">{cat.text}</p>
// //                 </div>
// //                 <Link href={`/category/${cat._id}`}>
// //                   <span className="text-base font-semibold hover:opacity-75 cursor-pointer">
// //                     Discover Now →
// //                   </span>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // }





// src/components/home/Collection.tsx