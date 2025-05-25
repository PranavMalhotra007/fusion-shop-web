
import { Link } from "react-router-dom";

export default function ProductCard({ product, handleAddToCart }: {
  product: { id: number; title: string; price: number; image: string; onSale?: boolean };
  handleAddToCart: (product: any) => void;
}) {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition hover:scale-105 hover:shadow-xl duration-200 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover"
        />
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <Link to={`/product/${product.id}`} className="text-lg font-semibold text-primary hover:underline hover:text-secondary">
          {product.title}
        </Link>
        <div className="flex items-center gap-2 mt-2 mb-4">
          <span className="text-xl font-bold text-gray-900">${product.price}</span>
          {product.onSale &&
            <span className="px-2 py-1 text-xs rounded bg-rose-100 text-rose-500 ml-2">SALE</span>
          }
        </div>
        <button onClick={() => handleAddToCart(product)}
          className="bg-primary text-white rounded py-2 mt-auto hover:bg-primary/90 transition-shadow shadow ring-1 ring-primary/50">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
