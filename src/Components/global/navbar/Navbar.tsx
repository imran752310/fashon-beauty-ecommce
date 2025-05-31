"use client";

import { useFavorite } from "@/context/FavoriteContext";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import {
  IoBagHandleOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { LuAlignLeft } from "react-icons/lu";
import TopBar from "./TopBar";
import { useCart } from "@/context/CartContext"; // ✅ Import the hook
import { FaRegHeart } from "react-icons/fa6";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart(); // ✅ Get cart items from context
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0); // ✅
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const { favoriteItems } = useFavorite();

  return (
    <>
      <TopBar />
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-5 lg:px-10">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <LuAlignLeft size={30} />
        </button>

        {/* Search (desktop only) */}
        <div className="hidden lg:flex items-center border-2 border-gray-300 rounded px-3 py-2 w-60">
          <input
            type="text"
            placeholder="Search Product"
            className="text-sm w-full outline-none"
          />
          <IoSearchOutline size={20} className="ml-2 cursor-pointer" />
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-grow lg:flex-none">
          <Image src="/images/logo.png" width={159} height={30} alt="logo" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button>
            <HiOutlineUser
              size={23}
              className="hover:text-[#4e7460] cursor-pointer"
            />
          </button>

          {/* Wishlist (desktop only) */}

          <Link href={"/favorites/"}>
            <button className="hidden lg:block cursor-pointer relative ">
              {favoriteItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-black  text-white hover:bg-[#4e7460] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {" "}
                  {favoriteItems.length}
                </span>
              )}
              <FaRegHeart size={23} className="hover:text-[#4e7460]" />
            </button>
          </Link>

          {/* Cart (desktop only) */}
          <Link href={"/cart/"}>
            <div className="hidden lg:flex items-center gap-2">
              <b>${totalPrice.toFixed(2)}</b>
              <button className="relative cursor-pointer">
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white  hover:bg-[#4e7460] text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
                <IoBagHandleOutline
                  size={23}
                  className="hover:text-[#4e7460]"
                />
              </button>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden  px-4 pb-4 space-y-2 text-sm  text-center font-medium">
          <p>
            <Link href="#">Home</Link>
          </p>
          <p>
            <Link href="#">Collection</Link>
          </p>
          <p>
            <Link href="#">Shop</Link>
          </p>
          <p>
            <Link href="#">Offer</Link>
          </p>
          <p>
            <Link href="#">Blog</Link>
          </p>
        </div>
      )}

      <nav className="hidden lg:flex justify-center gap-10 text-[15px] font-medium py-3 sticky top-0 z-50 bg-white">
        <Link
          href="/"
          className="hover:underline underline-offset-4 decoration-black transition duration-200"
        >
          Home
        </Link>
        <Link
          href="#"
          className="hover:underline underline-offset-4 decoration-black transition duration-200"
        >
          Collection
        </Link>
        <Link
          href="/shop/"
          className="hover:underline underline-offset-4 decoration-black transition duration-200"
        >
          Shop
        </Link>
        <Link
          href="#"
          className="hover:underline underline-offset-4 decoration-black transition duration-200"
        >
          Offer
        </Link>
        <Link
          href="#"
          className="hover:underline underline-offset-4 decoration-black transition duration-200"
        >
          Blog
        </Link>
      </nav>
    </>
  );
};

export default Navbar;
