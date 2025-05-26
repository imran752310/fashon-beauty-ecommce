"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 🔁 Product type (customize if needed)
export interface Product {
  Description: ReactI18NextChildren | Iterable<ReactI18NextChildren>;
  name: string;
  image: string | StaticImport;
  id: string;
  title: string;
  salePrice: number;
  thumbnail: string;
  slug?: string;
}

interface FavoriteContextType {
  favoriteItems: Product[];
  addToFavorite: (product: Product) => void;
  removeFromFavorite: (id: string) => void;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
  const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

  // ✅ Load from localStorage on mount
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavoriteItems(JSON.parse(storedFavorites));
    }
  }, []);

  // ✅ Save to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favoriteItems));
  }, [favoriteItems]);

  const addToFavorite = (product: Product) => {
    setFavoriteItems((prev) =>
      prev.find((item) => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromFavorite = (id: string) => {
    setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <FavoriteContext.Provider value={{ favoriteItems, addToFavorite, removeFromFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavorite = () => {
  const context = useContext(FavoriteContext);
  if (!context) throw new Error("useFavorite must be used within a FavoriteProvider");
  return context;
};


// "use client";
// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "./CartContext"; // Reuse same Product type

// interface FavoriteContextType {
//   favoriteItems: Product[];
//   addToFavorite: (product: Product) => void;
//   removeFromFavorite: (id: string) => void;
// }

// const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

// export const FavoriteProvider = ({ children }: { children: ReactNode }) => {
//   const [favoriteItems, setFavoriteItems] = useState<Product[]>([]);

//   const addToFavorite = (product: Product) => {
//     setFavoriteItems((prev) =>
//       prev.find((item) => item.id === product.id) ? prev : [...prev, product]
//     );
//   };

//   const removeFromFavorite = (id: string) => {
//     setFavoriteItems((prev) => prev.filter((item) => item.id !== id));
//   };

//   return (
//     <FavoriteContext.Provider value={{ favoriteItems, addToFavorite, removeFromFavorite }}>
//       {children}
//     </FavoriteContext.Provider>
//   );
// };

// export const useFavorite = () => {
//   const context = useContext(FavoriteContext);
//   if (!context) throw new Error("useFavorite must be used within a FavoriteProvider");
//   return context;
// };
