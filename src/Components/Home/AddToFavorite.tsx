"use client";

import React from "react";
import { useFavorite } from "@/context/FavoriteContext"; // adjust the path
import { Product } from "@/context/FavoriteContext"; // adjust the path
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; // Heart icons

interface AddToFavoriteButtonProps {
  product: Product;
}

const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({ product }) => {
  const { favoriteItems, addToFavorite, removeFromFavorite } = useFavorite();

  const isFavorited = favoriteItems.some((item) => item.id === product.id);

  const handleClick = () => {
    isFavorited ? removeFromFavorite(product.id) : addToFavorite(product);
  };

  return (
    <button
      onClick={handleClick}
      className={`text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow`}
    >
      {isFavorited ? <AiFillHeart size={23} className="text-red-500" /> : <AiOutlineHeart size={23} />}
    </button>
  );
};

export default AddToFavoriteButton;
