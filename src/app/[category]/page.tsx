// import Link from "next/link";
// import { SimplifiedProduct } from "../../interface";
// import Image from "next/image";
// import { client } from "@/sanity/lib/client";
// import { FaRegEye } from "react-icons/fa6";
// import AddToCartButton from "@/Components/Home/AddToCard";
// import AddToFavoriteButton from "@/Components/Home/AddToFavorite";

// export const revalidate = 0;

// async function getData(name: string) {
//   const query = `*[_type == "product" && category->name == "${name}"] {
//         _id,
//           price,
//         name,
//           "imageUrl":image[0].asset->url,
//           "slug": slug.current,
//           "categoryName": category->name,
//       }`;

//   const data = await client.fetch(query);
//   return data;
// }

// export const dynamic = "force-dynamic";

// interface CategoryPageProps {
//   params: {
//     category: string;
//   };
// }

// export default async function CategoryPage({ params }: CategoryPageProps) {
//   const data: SimplifiedProduct[] = await getData(params.category);

//   return (
//     <div
//       className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-10"
//       data-aos="fade-up"
//       data-aos-anchor-placement="top-center"
//     >
//       <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
//         <div className="flex justify-between items-center">
//           <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//             Our Products for {params.category}
//           </h2>
//         </div>
//       </div>

//       <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
//         {data.map((product) => (
//           <div
//             key={product._id}
//             className="bg-white rounded-md text-center space-y-3 relative group overflow-hidden cursor-pointer transition duration-300"
//           >
//             <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-0 -translate-x-10 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 z-10">
//               <AddToCartButton
//                 product={{
//                   id: product._id,
//                   title: product.title,
//                   slug: product.slug,
//                   description: product.description,
//                   imageUrl: product.imageUrl,
//                   price: product.price,
//                   name: product.name,
//                 }}
//               />
//               <AddToFavoriteButton
//                 product={{
//                   id: product._id,
//                   title: product.title,
//                   slug: product.slug,
//                   description: product.description,
//                   imageUrl: product.imageUrl,
//                   price: product.price,
//                   name: product.name,
//                 }}
//               />

//               <Link
//                 href={`/product/${product.slug}`}
//                 className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow"
//               >
//                 <FaRegEye size={23} />
//               </Link>
//             </div>

//             <div className="bg-[#f9f9f9] p-6">
//               <Image
//                 src={product.imageUrl}
//                 alt={product.name}
//                 width={160}
//                 height={260}
//                 className="mx-auto"
//               />
//             </div>

//             <div className="text-lg font-semibold text-gray-900">
//               ${product.price}
//             </div>
//             <div className="text-sm text-gray-700">{product.name}</div>
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
//     </div>
//   );
// }


// File: app/[category]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { SimplifiedProduct } from "../../interface";
import { client } from "@/sanity/lib/client";
import { FaRegEye } from "react-icons/fa6";
import AddToCartButton from "@/Components/Home/AddToCard";
import AddToFavoriteButton from "@/Components/Home/AddToFavorite";

// If you use ISR or revalidation:
export const revalidate = 0;
// If you want “force dynamic” (no caching) on every request:
export const dynamic = "force-dynamic";

// 1) Define exactly the shape of “params” that Next will pass
interface CategoryPageProps {
  params: {
    category: string;
  };
}

// 2) Give your async function an explicit return type of Promise<JSX.Element>
export default async function CategoryPage({
  params,
}: CategoryPageProps): Promise<JSX.Element> {
  // Fetch data from Sanity based on the category name
  const query = `
    *[_type == "product" && category->name == "${params.category}"] {
      _id,
      price,
      name,
      "imageUrl": image[0].asset->url,
      "slug": slug.current,
      "categoryName": category->name,
    }
  `;
  const data: SimplifiedProduct[] = await client.fetch(query);

  return (
    <div
      className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 py-10"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Our Products for {params.category}
          </h2>
        </div>
      </div>

      <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6">
        {data.map((product) => (
          <div
            key={product._id}
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
          </div>
        ))}
      </div>
    </div>
  );
}
