import "./Card.css";

interface Product {
    name: string;
    description: string; // fixed typo
    rate: number;
}

interface Customer {
    name: string;
    phone: string;
}

interface Order {
    id: number;
    customer: Customer;
    products: Product[];
    totalAmount: number;
}


export default function OrderCard({ order }: any) {
    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '12px',
            padding: '15px',
            margin: '10px 20px',
            boxShadow: '0 3px 10px rgba(0,0,0,0.08)',
            width:"48vw"
        }}>
            <h2 style={{ marginBottom: '5px', fontSize: '20px', color: '#1e1e2f' }}>Order #{order.id}</h2>
            <p style={{ margin: '3px 0' }}>Customer: {order.customer.name}</p>
            <p style={{ margin: '3px 0' }}>Phone: {order.customer.phone}</p>
            <div style={{ marginTop: '10px' }}>
                {order.products.map((p: any) => (
                    <div key={p.id} style={{
                        borderBottom: '1px solid #eee',
                        paddingBottom: '5px',
                        marginBottom: '5px'
                    }}>
                        <strong>{p.name}</strong> - ${p.rate}
                    </div>
                ))}
            </div>
            <h4 style={{ marginTop: '10px', color: '#007BFF' }}>Total: ${order.totalAmount}</h4>
        </div>
    );
}


