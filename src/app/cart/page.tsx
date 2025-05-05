"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.salePrice * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-semibold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-600">Your cart is empty.</p>
          <Link href="/" className="text-blue-500 hover:underline">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* Cart Items */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border p-4 rounded-md"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="rounded"
                  />
                  <div>
                    <h2 className="font-medium">{item.title}</h2>
                    <p className="text-gray-600">
                      ${item.salePrice} x {item.quantity}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Cart Total and Checkout Button */}
          <div className="mt-6 flex justify-between items-center">
            <div className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>

            {/* Clear Cart Button */}
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              Clear Cart
            </button>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <Link href="/checkout">
              <button
                className={`w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition`}
              >
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;


// "use client";
// import { useCart } from "@/context/CartContext";
// import Image from "next/image";
// import Link from "next/link";

// const CartPage = () => {
//   const { cartItems, removeFromCart, clearCart } = useCart();

//   const totalPrice = cartItems.reduce(
//     (total, item) => total + item.salePrice * item.quantity,
//     0
//   );

//   return (
//     <div className="p-6 max-w-5xl mx-auto">
//       <h1 className="text-2xl font-semibold mb-6">Your Shopping Cart</h1>

//       {cartItems.length === 0 ? (
//         <div className="text-center">
//           <p className="text-gray-600">Your cart is empty.</p>
//           <Link href="/" className="text-blue-500 hover:underline">
//             Continue Shopping
//           </Link>
//         </div>
//       ) : (
//         <>
//           <div className="space-y-4">
//             {cartItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="flex items-center justify-between border p-4 rounded-md"
//               >
//                 <div className="flex items-center gap-4">
//                   <Image
//                     src={item.thumbnail}
//                     alt={item.title}
//                     width={80}
//                     height={80}
//                     className="rounded"
//                   />
//                   <div>
//                     <h2 className="font-medium">{item.title}</h2>
//                     <p className="text-gray-600">
//                       ${item.salePrice} x {item.quantity}
//                     </p>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => removeFromCart(item.id)}
//                   className="text-red-500 hover:underline"
//                 >
//                   Remove
//                 </button>
//               </div>
//             ))}
//           </div>

//           <div className="mt-6 flex justify-between items-center">
//             <div className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</div>
//             <button
//               onClick={clearCart}
//               className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
//             >
//               Clear Cart
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default CartPage;
