import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import { useState } from "react";
import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import CartPage from "@/pages/Cart";
import ProductPage from "@/pages/Product";
import { PRODUCTS } from "@/pages/productsData";
import NotFound from "@/pages/NotFound";
import NewArrivalsPage from "@/pages/NewArrivals";
import SalePage from "@/pages/Sale";

const queryClient = new QueryClient();

function AppRoutes() {
  // Shopping cart state
  const [cart, setCart] = useState<any[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  function handleAddToCart(product: any, qty: number = 1) {
    setCart(old => {
      const existing = old.find((item) => item.id === product.id);
      if (existing)
        return old.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      return [...old, { ...product, quantity: qty }];
    });
    setCartOpen(true);
  }

  function handleRemove(id: number) {
    setCart(old => old.filter((item) => item.id !== id));
  }

  function handleUpdateQty(id: number, qty: number) {
    setCart(old =>
      old.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  }

  const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  // Count for navbar
  function getCartCount() {
    return cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  }

  return (
    <>
      <Navbar cartCount={getCartCount()} />
      <CartDrawer open={cartOpen} setOpen={setCartOpen} cart={cart} handleRemove={handleRemove} total={total} />
      <Routes>
        <Route path="/" element={<Home handleAddToCart={handleAddToCart} />} />
        <Route path="/new-arrivals" element={<NewArrivalsPage handleAddToCart={handleAddToCart} />} />
        <Route path="/sale" element={<SalePage handleAddToCart={handleAddToCart} />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage cart={cart} handleRemove={handleRemove} handleUpdateQty={handleUpdateQty} total={total} />} />
        <Route path="/product/:id" element={<ProductPage handleAddToCart={handleAddToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
