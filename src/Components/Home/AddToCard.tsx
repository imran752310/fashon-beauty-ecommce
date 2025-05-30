"use client";

import React from "react";
import { useCart } from "@/context/CartContext"; // adjust path as needed
import { Product } from "@/context/CartContext"; // same here
import { RiShoppingBag4Fill } from "react-icons/ri";

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
       className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow"
    >
     <RiShoppingBag4Fill size={23} />
    </button>
  );
};

export default AddToCartButton;
