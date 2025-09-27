export async function fetchOrders() {
    const res = await fetch("http://localhost:3000/orders", {
        headers: { "x-api-key": "procura123" },
    });
    if (!res.ok) throw new Error("Failed to fetch orders");
    return res.json();
}

export const createOrder = async (order: any) => {
    const res = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(order)
    });
    return res.json();
};