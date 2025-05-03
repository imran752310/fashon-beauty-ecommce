"use client";

import { RiShoppingBag4Fill } from "react-icons/ri";
import { Product, useCart } from "../../context/CartContext";
import { FC } from "react";
import { IoRepeat } from "react-icons/io5";

interface Props {
  product: Product;
  // slug: string;
}

const BuyingOptions: FC<Props> = ({ product }) => {
  const { updateCart  } = useCart();
  const onAddToCartClick = () => {
    updateCart(product, 1);
  };

  return (
    <div className="flex p-2 space-x-2">
      {/* <button
        onClick={onAddToCartClick}
        className="flex-1 border-2 border-pink-500 p-2 rounded-md text-gray-800"
      >
        Add to Cart
      </button> */}
      <button   onClick={onAddToCartClick} className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow">
        <RiShoppingBag4Fill size={23} />
      </button>
      {/* <Link href={`/Product/${product.slug}`} className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow">
        <MdStarPurple500 size={23} />
      </Link> */}
      <button className="text-black bg-white cursor-pointer hover:bg-black hover:text-white transition-all duration-500 px-2 py-2 rounded-full shadow">
        <IoRepeat size={23} />
      </button>
    </div>
  );
};

export default BuyingOptions;
