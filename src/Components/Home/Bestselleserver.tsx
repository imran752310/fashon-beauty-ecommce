import React from "react";

import BestSeller from "./BestSeller";

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  slug: string;
  imageUrl: string;
  price_id: string;
  category: string;
};


type ProductProps = {
  products: Product[];
};
const BestSellerServer = ({ products }: ProductProps) => {
  return <BestSeller products={products} />;
};

export default BestSellerServer;
