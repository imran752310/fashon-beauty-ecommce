import { dummyProducts } from '@/constant/data';
import ProductClient from './ProductClient';

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = dummyProducts.find((p) => p.slug === params.slug);

  if (!product) return <div className="p-10 text-center">Product not found.</div>;

  return <ProductClient product={product} />;
}


// import { dummyProducts } from "@/constant/data";
// import ProductClient from "./ProductClient";

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// export default function ProductPage({ params }: ProductPageProps) {
//   const product = dummyProducts.find((p) => p.slug === params.slug);

//   if (!product) {
//     return <div className="p-10 text-center">Product not found.</div>;
//   }

//   return <ProductClient product={product} />;
// }

// app/Product/[slug]/page.tsx
// import { dummyProducts } from "@/constant/data";
// import ProductClient from "./ProductClient";

// export default function ProductPage({ params }: { params: { slug: string } }) {
//   const product = dummyProducts.find((p) => p.slug === params.slug);

//   if (!product) {
//     return <div className="p-10 text-center">Product not found.</div>;
//   }

//   return <ProductClient product={product} />;
// }



// app/Product/[slug]/page.tsx
// import { dummyProducts } from "@/constant/data";
// import ProductClient from "./ProductClient";

// interface ProductPageProps {
//   params: {
//     slug: string;
//   };
// }

// const ProductPage = ({ params }: ProductPageProps) => {
//   const product = dummyProducts.find((p) => p.slug === params.slug);

//   if (!product) {
//     return <div className="p-10 text-center">Product not found.</div>;
//   }

//   return <ProductClient product={product} />;
// };

// export default ProductPage;
