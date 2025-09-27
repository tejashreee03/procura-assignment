
export async function fetchProducts() {
    const res = await fetch("http://localhost:3000/products", {
        headers: { "x-api-key": "procura123" },
    });
    if (!res.ok) throw new Error("Failed to fetch products");
    return res.json();
}

export const addProduct = async (product: any) => {
    const res = await fetch('http://localhost:3000/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
    });
    return res.json();
};


export const updateProduct = async (id: number, product: any) => {
    const res = await fetch(`http://localhost:3000/api/products/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
    });
    return res.json();
};