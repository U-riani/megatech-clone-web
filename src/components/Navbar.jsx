import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ onToggleSidebar }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const onSearch = () => {
    if (!query.trim()) return;
    navigate(`/products?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        {/* Mobile menu button */}
        <button
          className="rounded-md px-3 py-2 hover:bg-gray-100 lg:hidden"
          onClick={onToggleSidebar}
          aria-label="Open categories"
        >
          ☰
        </button>

        {/* Logo */}
        <Link to="/" className="text-lg font-bold whitespace-nowrap">
          MegaTech Clone
        </Link>

        {/* Search */}
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
          className="ml-2 rounded-md px-3 py-2 hover:bg-gray-100"
          aria-label="Cart"
        >
          🛒 Cart
        </Link>
      </div>
    </header>
  );
}
