
import { useState } from "react";
import { PRODUCTS } from "./productsData";
import QuantitySelector from "@/components/QuantitySelector";
import { useNavigate } from "react-router-dom";

type CartProduct = typeof PRODUCTS[number];

export default function NewArrivalsPage({ handleAddToCart }: { handleAddToCart: (prod: CartProduct, qty?: number) => void }) {
  // "New arrivals" are the middle 3 products by the original logic.
  const newArrivals = PRODUCTS.slice(1, 4);
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(newArrivals.map(p => [p.id, 1]))
  );
  const navigate = useNavigate();

  function handleQtyChange(id: number, value: number) {
    setQuantities(prev => ({ ...prev, [id]: value }));
  }

  return (
    <main className="max-w-2xl mx-auto p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-primary">New Arrivals</h1>
      <ul className="flex flex-col gap-8">
        {newArrivals.map(product => (
          <li key={product.id} className="flex items-center gap-6 p-5 border rounded-xl bg-white shadow hover:shadow-md transition">
            <img
              src={product.image}
              alt={product.title}
              className="w-28 h-28 rounded object-cover cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            />
            <div className="flex-1">
              <h2 className="font-bold text-xl text-primary cursor-pointer hover:underline" onClick={() => navigate(`/product/${product.id}`)}>
                {product.title}
              </h2>
              <p className="mb-2 text-gray-500">${product.price}</p>
              <div className="flex items-center gap-3 my-1">
                <span className="text-base font-medium">Qty:</span>
                <QuantitySelector
                  value={quantities[product.id]}
                  onChange={val => handleQtyChange(product.id, val)}
                  min={1}
                  max={99}
                />
                <button
                  onClick={() => handleAddToCart(product, quantities[product.id])}
                  className="ml-4 bg-primary text-white px-6 py-2 rounded font-bold hover:bg-primary/90 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
