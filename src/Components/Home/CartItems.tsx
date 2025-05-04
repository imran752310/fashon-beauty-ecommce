// src/components/CartItem.tsx
import { useCart } from '../../context/CartContext';

export const CartItem = ({ id, name, price, quantity }: { 
  id: string; 
  name: string; 
  price: number; 
  quantity: number 
}) => {
  const { updateItemQuantity, removeItem } = useCart();

  return (
    <div className="flex items-center justify-between py-2 border-b">
      <div>
        <h3 className="font-medium">{name}</h3>
        <p className="text-sm text-gray-600">${price}</p>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => updateItemQuantity(id, parseInt(e.target.value))}
          className="w-12 px-2 py-1 border rounded"
        />
        <button 
          onClick={() => removeItem(id)}
          className="text-red-600 hover:text-red-700"
        >
          Remove
        </button>
      </div>
    </div>
  );
};