
import ProductCard from "@/components/ProductCard";
import Newsletter from "@/components/Newsletter";
import { PRODUCTS } from "./productsData";
import { toast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function filterProducts(type: "new" | "sale") {
  if (type === "new") return PRODUCTS.slice(1, 4);
  if (type === "sale") return PRODUCTS.filter(p => p.onSale);
  return [];
}

export default function Home({ handleAddToCart }: { handleAddToCart: (product: any) => void }) {
  const [_, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <main className="max-w-7xl mx-auto px-3 font-sans">
      {/* Hero */}
      <section className="py-16 flex flex-col md:flex-row items-center gap-10 md:gap-24">
        <div className="flex-1 animate-fade-in">
          <h1 className="font-black text-4xl md:text-6xl mb-4 text-primary leading-tight animate-fade-in">
            Discover Your <span className="text-transparent bg-gradient-to-r from-blue-500 via-purple-400 to-fuchsia-400 bg-clip-text">Dream Products</span>
          </h1>
          <p className="text-gray-600 mb-6 text-lg">Shop the latest and greatest at unbeatable prices.</p>
          <a href="#new" className="inline-block bg-primary text-white px-7 py-3 rounded-md font-bold text-lg hover:scale-105 transition-transform shadow">
            Shop New Arrivals
          </a>
        </div>
        <img
          src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
          alt="hero"
          className="rounded-3xl hidden md:block w-[400px] h-[340px] shadow-lg object-cover animate-fade-in"
        />
      </section>

      <Newsletter />

      <section id="new" className="mb-12 animate-fade-in">
        <h2 className="text-3xl font-bold mb-5 text-primary">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filterProducts("new").map(p => (
            <ProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>

      <section id="sale" className="mb-20 animate-fade-in">
        <h2 className="text-3xl font-bold mb-5 text-primary">On Sale</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filterProducts("sale").map(p => (
            <ProductCard key={p.id} product={p} handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </section>
    </main>
  );
}
