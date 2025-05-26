"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
const CheckoutPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Calculate total
  const total = cartItems.reduce((acc, item) => acc + item.salePrice, 0);

  const handleCheckout = () => {
    setLoading(true);
    // Simulate a checkout request (e.g., API call)
    setTimeout(() => {
      alert("Checkout Successful!");
      setLoading(false);
      router.push("/thank-you");
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-10">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto my-16">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Cart Items */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          {cartItems.map((product) => (
            <div key={product.id} className="flex justify-between gap-5 mb-4">
              <div className="flex items-center gap-2">
                <Image
                              src={product.thumbnail}
                              alt={product.title}
                              width={50}
                              height={50}
                              className="object-cover mx-auto"
                            />
              <div>
                <p>{product.title}</p>
                <p className="text-sm text-gray-500">${product.salePrice}</p>
              </div>
              </div>
               
              <button
                onClick={() => removeFromCart(product.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-4 font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        {/* Shipping Address and Payment */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
          <input
            type="text"
            placeholder="Shipping Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          />
          <h3 className="text-lg font-medium mb-2">Payment Method</h3>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded mb-4"
          >
            <option value="">Select Payment Method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>

          <button
            onClick={handleCheckout}
            disabled={loading || !address || !paymentMethod}
            className={`w-full p-3 bg-blue-600 text-white rounded ${
              loading || !address || !paymentMethod ? "opacity-50" : ""
            }`}
          >
            {loading ? "Processing..." : "Proceed to Checkout"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
