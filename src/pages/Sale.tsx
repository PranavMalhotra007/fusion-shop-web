
import { useState } from "react";
import { PRODUCTS } from "./productsData";
import QuantitySelector from "@/components/QuantitySelector";
import { useNavigate } from "react-router-dom";

type CartProduct = typeof PRODUCTS[number];

export default function SalePage({ handleAddToCart }: { handleAddToCart: (prod: CartProduct, qty?: number) => void }) {
  const saleProducts = PRODUCTS.filter(p => p.onSale);
  const [quantities, setQuantities] = useState(() =>
    Object.fromEntries(saleProducts.map(p => [p.id, 1]))
  );
  const navigate = useNavigate();

  function handleQtyChange(id: number, value: number) {
    setQuantities(prev => ({ ...prev, [id]: value }));
  }

  return (
    <main className="max-w-2xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-4 text-primary text-left">On Sale</h1>
      <ul className="flex flex-col items-start gap-4 w-full">
        {saleProducts.map(product => (
          <li
            key={product.id}
            className="flex w-full items-center gap-4 p-3 border rounded-lg bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-24 h-24 rounded object-cover cursor-pointer flex-shrink-0"
              onClick={() => navigate(`/product/${product.id}`)}
            />
            <div className="flex-1 min-w-0">
              <h2
                className="font-bold text-lg text-rose-600 cursor-pointer hover:underline"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                {product.title}
              </h2>
              <p className="mb-1 text-gray-500 text-sm truncate">${product.price}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm font-medium">Qty:</span>
                <QuantitySelector
                  value={quantities[product.id]}
                  onChange={val => handleQtyChange(product.id, val)}
                  min={1}
                  max={99}
                />
                <button
                  onClick={() => handleAddToCart(product, quantities[product.id])}
                  className="ml-2 bg-primary text-white px-4 py-1.5 rounded font-bold hover:bg-primary/90 transition text-sm"
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
