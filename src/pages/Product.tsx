import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "./productsData";
import QuantitySelector from "@/components/QuantitySelector";
import { useState } from "react";

export default function ProductPage({ handleAddToCart }: { handleAddToCart: (prod: any, qty?: number) => void }) {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  if (!product) return (
    <main className="max-w-2xl mx-auto p-8 text-center font-sans">
      <p className="text-gray-500">Product not found.</p>
      <Link to="/" className="text-primary hover:underline">Go to Home</Link>
    </main>
  );

  return (
    <main className="max-w-4xl mx-auto p-8 flex flex-col md:flex-row gap-12 items-center font-sans">
      <img src={product.image} alt={product.title} className="rounded-2xl w-[340px] h-[340px] object-cover shadow-xl animate-fade-in" />
      <div className="flex-1 py-6">
        <h1 className="text-4xl font-extrabold mb-3 text-primary">{product.title}</h1>
        <p className="text-xl mb-5">${product.price}</p>
        <p className="mb-8 text-gray-700">{product.description}</p>
        <div className="flex items-center gap-4 mb-8">
          <span className="font-medium">Quantity:</span>
          <QuantitySelector value={quantity} onChange={setQuantity} />
        </div>
        <button onClick={() => handleAddToCart(product, quantity)} className="bg-primary px-8 py-3 rounded-md text-white font-bold text-lg hover:bg-primary/90 animate-pulse transition-all shadow">
          Add to Cart
        </button>
        <Link to="/" className="ml-7 text-gray-600 hover:text-primary underline text-base">Back to Products</Link>
      </div>
    </main>
  );
}
