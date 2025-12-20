import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-xl font-bold">Product Details</h1>
      <p className="text-gray-600">Product ID: {id}</p>
    </div>
  );
}
