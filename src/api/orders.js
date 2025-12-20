const BASE_URL = import.meta.env.VITE_API_URL;

export async function createOrder(items) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || "Failed to create order");
  }

  return res.json();
}

export async function getOrderById(id) {
  const res = await fetch(`${BASE_URL}/orders/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch order");
  }

  return res.json();
}
