// "use client";

// import React from "react";
// import { useFavorite } from "@/context/FavoriteContext"; 
// import { Product } from "@/context/FavoriteContext"; 
// import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
// import toast from "react-hot-toast";

// interface AddToFavoriteButtonProps {
//   product: Product;
// }

// const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({ product }) => {
//   const { favoriteItems, addToFavorite, removeFromFavorite } = useFavorite();

//   const isFavorited = favoriteItems.some((item) => item.id === product.id);

//   const handleClick = () => {
//     isFavorited ? removeFromFavorite(product.id) : addToFavorite(product);
//     toast.success(`Product added to Favorite!`)
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow`}
//     >
//       {isFavorited ? <AiFillHeart size={23} className="text-red-500" /> : <AiOutlineHeart size={23} />}
//     </button>
//   );
// };

// export default AddToFavoriteButton;

"use client";

import React from "react";
import { useFavorite } from "@/context/FavoriteContext"; 
import { Product } from "@/context/FavoriteContext"; 
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"; 
import toast from "react-hot-toast";

interface AddToFavoriteButtonProps {
  product: Product;
}

const AddToFavoriteButton: React.FC<AddToFavoriteButtonProps> = ({ product }) => {
  const { favoriteItems, addToFavorite, removeFromFavorite } = useFavorite();

  const isFavorited = favoriteItems.some((item) => item.id === product.id);

  const handleClick = () => {
    if (isFavorited) {
      removeFromFavorite(product.id);
      toast.success(`Product removed from Favorite!`);
    } else {
      addToFavorite(product);
      toast.success(`Product added to Favorite!`);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow`}
    >
      {isFavorited ? (
        <AiFillHeart size={23} className="text-red-500" />
      ) : (
        <AiOutlineHeart size={23} />
      )}
    </button>
  );
};

export default AddToFavoriteButton;
