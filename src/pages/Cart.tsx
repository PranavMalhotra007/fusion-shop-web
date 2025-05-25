import { Link } from "react-router-dom";
import QuantitySelector from "@/components/QuantitySelector";

export default function CartPage({ cart, handleRemove, handleUpdateQty, total }: {
  cart: any[];
  handleRemove: (id: number) => void;
  handleUpdateQty: (id: number, qty: number) => void;
  total: number;
}) {
  return (
    <main className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-5 text-primary">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <p className="text-gray-500 mb-4">Your cart is empty.</p>
          <Link
            to="/"
            className="inline-block bg-primary text-white px-6 py-2 rounded font-semibold hover:bg-primary/80"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <ul className="mb-8">
            {cart.map(item => (
              <li className="flex items-center border-b last:border-0 py-4" key={item.id}>
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover mr-4" />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <div className="flex gap-2 items-center">
                    <span className="text-primary">${item.price}</span>
                    <QuantitySelector
                      value={item.quantity}
                      onChange={qty => handleUpdateQty(item.id, qty)}
                      min={1}
                    />
                  </div>
                </div>
                <button
                  className="bg-rose-100 px-3 py-1 rounded text-rose-600 hover:bg-rose-200 text-xs"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center font-bold text-lg mb-8">
            <span>Total:</span>
            <span>${total}</span>
          </div>
          <button className="w-full py-3 rounded bg-primary text-white font-bold hover:bg-primary/90 animate-fade-in">Proceed to Checkout</button>
        </>
      )}
    </main>
  );
}
