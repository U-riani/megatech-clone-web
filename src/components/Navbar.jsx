import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Navbar({ onToggleSidebar }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { items } = useCart();

  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  const onSearch = () => {
    if (!query.trim()) return;
    navigate(`/products?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <button
          className="rounded-md px-3 py-2 hover:bg-gray-100 lg:hidden"
          onClick={onToggleSidebar}
          aria-label="Open categories"
        >
          ☰
        </button>

        <Link to="/" className="text-lg font-bold whitespace-nowrap">
          MegaTech Clone
        </Link>

        <div className="ml-auto flex w-full max-w-xl items-center gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearch()}
            className="w-full rounded-md border px-3 py-2"
            placeholder="Search products..."
          />
          <button
            onClick={onSearch}
            className="rounded-md bg-gray-900 px-4 py-2 text-white"
          >
            Search
          </button>
        </div>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative ml-2 rounded-md px-3 py-2 hover:bg-gray-100"
          aria-label="Cart"
        >
          🛒 Cart
          {cartCount > 0 && (
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white">
              {cartCount}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
