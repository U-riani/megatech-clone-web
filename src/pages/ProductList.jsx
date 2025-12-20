import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import {
  getProducts,
  getProductsByCategory,
  searchProducts,
} from "../api/products";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");
  const q = searchParams.get("q");

  useEffect(() => {
    setLoading(true);

    let request;

    if (q) {
      request = searchProducts(q);
    } else if (category) {
      request = getProductsByCategory(category);
    } else {
      request = getProducts({ limit: 24 });
    }

    request
      .then((data) => {
        setProducts(data.products || []);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [category, q]);

  if (loading) {
    return <div className="text-gray-500">Loading products…</div>;
  }

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold">
        {category
          ? `Category: ${category}`
          : q
          ? `Search: "${q}"`
          : "All Products"}
      </h1>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.id}`}
            className="rounded-lg border bg-white p-3 transition hover:shadow"
          >
            <img
              src={p.thumbnail}
              alt={p.title}
              className="mb-2 h-40 w-full object-contain"
            />

            <div className="text-sm font-medium line-clamp-2">{p.title}</div>

            <div className="mt-1 font-bold">${p.price}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
