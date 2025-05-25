
import { Link } from "react-router-dom";

export default function CartDrawer({
  open,
  setOpen,
  cart,
  handleRemove,
  total,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
  cart: any[];
  handleRemove: (id: number) => void;
  total: number;
}) {
  return (
    <div className={`fixed inset-0 z-50 ${open ? "block" : "hidden"} bg-black/40 animate-fade-in`}>
      <aside className="fixed right-0 top-0 w-full sm:w-[420px] h-full bg-white shadow-xl p-8 flex flex-col">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-primary">Shopping Cart</h3>
          <button className="text-gray-500 hover:text-primary" onClick={() => setOpen(false)}>
            Close
          </button>
        </div>
        {cart.length === 0 ? (
          <p className="text-gray-500 flex-1 mb-20">Your cart is empty.</p>
        ) : (
          <ul className="flex-1 overflow-y-auto">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center mb-5">
                <img src={item.image} alt={item.title} className="w-16 h-16 rounded object-cover mr-4" />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  <p className="text-primary">${item.price}</p>
                </div>
                <button
                  className="text-xs bg-rose-100 px-3 py-1 rounded text-rose-600 hover:bg-rose-200"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="mt-6 flex flex-col gap-3">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Total:</span> <span>${total}</span>
          </div>
          <Link to="/cart"
             className="bg-primary text-white rounded py-2 w-full text-center font-semibold hover:bg-primary/90">
            View Cart / Checkout
          </Link>
        </div>
      </aside>
    </div>
  );
}
