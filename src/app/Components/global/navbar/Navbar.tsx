
'use client';
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineUser } from "react-icons/hi2";
import { IoStarOutline, IoBagHandleOutline, IoSearchOutline } from "react-icons/io5";
import { LuAlignLeft } from "react-icons/lu";
import TopBar from "./TopBar";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
     <TopBar />
      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 py-5 lg:px-10">
        {/* Mobile Menu Button */}
        <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <LuAlignLeft size={30} />
        </button>

        {/* Search (desktop only) */}
        <div className="hidden lg:flex items-center border-2 border-gray-300 rounded px-3 py-2 w-60">
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
            <HiOutlineUser size={23} className="hover:text-[#4e7460] cursor-pointer"  />
          </button>

          {/* Wishlist (desktop only) */}
          <button className="hidden lg:block cursor-pointer relative ">
            <span className="absolute -top-2 -right-2 bg-black  text-white hover:bg-[#4e7460] text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
            <IoStarOutline size={23} className="hover:text-[#4e7460]" />
          </button>

          {/* Cart (desktop only) */}
          <div className="hidden lg:flex items-center gap-2">
            <b>$0.00</b>
            <button className="relative cursor-pointer">
              <span className="absolute -top-2 -right-2 bg-black text-white  hover:bg-[#4e7460] text-xs w-5 h-5 rounded-full flex items-center justify-center">0</span>
              <IoBagHandleOutline size={23}  className="hover:text-[#4e7460]" />
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

     
  <nav className="hidden lg:flex justify-center gap-10 text-[15px] font-medium py-3 sticky top-0 z-50 bg-white">
  <Link href="/" className="hover:underline underline-offset-4 decoration-black transition duration-200">Home</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Collection</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Shop</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Offer</Link>
  <Link href="#" className="hover:underline underline-offset-4 decoration-black transition duration-200">Blog</Link>
</nav>

    </>
  );
};

export default Navbar;
