"use client";

import { useFavorite } from "@/context/FavoriteContext";
import Image from "next/image";
import Link from "next/link";

const FavoritesPage = () => {
  const { favoriteItems, removeFromFavorite } = useFavorite();

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Favorites</h1>

      {favoriteItems.length === 0 ? (
        <div className="text-center text-gray-500">
          You haven't added any favorites yet.
          <br />
          <Link href="/" className="text-blue-600 underline mt-4 inline-block">
            Go to Shop
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favoriteItems.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg overflow-hidden shadow-md p-4 flex flex-col"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={250}
                height={250}
                className="w-full object-cover mx-auto"
              />
              <div className="mt-4">
                <h2 className="text-lg font-medium">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
              </div>
              <button
                onClick={() => removeFromFavorite(product.id)}
                className="mt-auto bg-red-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-600 transition-all"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
