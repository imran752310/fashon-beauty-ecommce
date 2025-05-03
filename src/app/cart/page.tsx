'use client';

import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h1>Your Cart</h1>
      {cart.length === 0 && <p>Cart is empty.</p>}
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name} - {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={clearCart}>Clear Cart</button>
    </div>
  );
}
