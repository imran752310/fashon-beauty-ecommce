"use client";

import React from "react";
import { useCart } from "@/context/CartContext"; // adjust path as needed
import { Product } from "@/context/CartContext"; // same here

interface AddToCartButtonProps {
  product: Product;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleClick = () => {
    addToCart(product);
  };

  return (
    <button
      onClick={handleClick}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
