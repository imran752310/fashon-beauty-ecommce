"use client";
import React, { createContext, useContext, useState,useEffect, ReactNode } from "react";

// Product type
export interface Product {
  id: string;
  title: string;
  slug: string;
  mrp: number;
  salePrice: number;
  percentOff: number;
  thumbnail: string;
}

// Cart Item type (can extend Product and add quantity)
export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);


   // ✅ Load from localStorage on mount
    useEffect(() => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setCartItems(JSON.parse(storedFavorites));
      }
    }, []);
  
    // ✅ Save to localStorage whenever favorites change
    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(cartItems));
    }, [cartItems]);

  const addToCart = (product: Product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook for accessing cart
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
