
import { ShoppingCart, Search, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const links = [
  { name: "Home", to: "/" },
  { name: "New Arrivals", to: "/new-arrivals" },
  { name: "Sale", to: "/sale" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function onSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (search.trim()) navigate(`/search?q=${encodeURIComponent(search)}`);
  }

  return (
    <header className="w-full sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm animate-fade-in">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="font-bold text-2xl tracking-tight text-primary hover:opacity-90 duration-150">
          ShopEase
        </Link>
        <div className="hidden md:flex gap-4">
          {links.map((l) => (
            <Link key={l.name} to={l.to} className="text-gray-600 hover:text-primary duration-150 font-medium">
              {l.name}
            </Link>
          ))}
        </div>
        <form onSubmit={onSearchSubmit} className="flex-1 flex justify-center mx-8 max-w-md">
          <input
            className="h-10 rounded-l px-4 border border-gray-300 w-full font-medium outline-none focus:border-primary"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            aria-label="Search"
          />
          <button className="bg-primary px-4 rounded-r text-white hover:bg-primary/80 flex items-center justify-center" type="submit">
            <Search size={20} />
          </button>
        </form>
        <div className="flex items-center gap-3">
          <Link to="/signin" className="hover:opacity-80 p-2 text-primary">
            <User size={22} />
          </Link>
          <Link to="/cart" className="relative hover:opacity-80 p-2 text-primary">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 mt-1 mr-1 bg-rose-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold animate-pulse">{cartCount}</span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
}
