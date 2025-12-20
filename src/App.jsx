import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopLayout from "./layouts/ShopLayout";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import OrderSuccess from "./pages/OrderSuccess";

export default function App() {
  return (
    <ShopLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order-success/:orderId" element={<OrderSuccess />} />
      </Routes>
    </ShopLayout>
  );
}
