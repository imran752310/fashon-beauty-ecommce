
'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { IoStarOutline, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { LuAlignLeft } from "react-icons/lu";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#f3f3bf] text-center py-2 tracking-[2px] font-[700] uppercase">
        <h1 className="text-[12px]">Free Shipping On All U.S. Orders $50+</h1>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-4 lg:px-10">
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <LuAlignLeft size={30} />
        </button>

        {/* Search (desktop only) */}
        <div className="hidden lg:flex items-center border-1 border-gray-500 rounded px-3 py-2 w-60">
          <input type="text" placeholder="Search Product" className="text-sm w-full outline-none" />
          <IoSearchOutline size={20} className="ml-2 cursor-pointer" />
        </div>

        {/* Logo */}
        <div className="flex justify-center flex-grow lg:flex-none">
          <Image src="/images/logo.png" width={159} height={30} alt="logo" />
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-4">
          <button>
            <HiOutlineUser size={23} />
          </button>

          {/* Wishlist (desktop only) */}
          <button className="hidden lg:block relative">
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            <IoStarOutline size={23} />
          </button>

          {/* Cart (desktop only) */}
          <div className="hidden lg:flex items-center gap-2">
            <b>$0.00</b>
            <button className="relative">
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              <IoBagHandleOutline size={23} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden  px-4 pb-4 space-y-2 text-sm  text-center font-medium">
          <p><Link href="#">Home</Link></p>
          <p><Link href="#">Collection</Link></p>
          <p><Link href="#">Shop</Link></p>
          <p><Link href="#">Offer</Link></p>
          <p><Link href="#">Blog</Link></p>
        </div>
      )}

      {/* Desktop Menu */}
      {/* <nav className="hidden lg:flex justify-center gap-10 text-[15px] font-medium py-3">
        <Link href="#">Home</Link>
        <Link href="#">Collection</Link>
        <Link href="#">Shop</Link>
        <Link href="#">Offer</Link>
        <Link href="#">Blog</Link>
      </nav> */}
      <nav className="hidden lg:flex justify-center gap-10 text-[15px] font-medium py-3">
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Home</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Collection</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Shop</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Offer</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Blog</Link>
</nav>

    </>
  );
};

export default Navbar;
