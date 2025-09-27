import React, { useEffect, useState } from 'react';
import { fetchOrders } from '../api/ordersApi';
import OrderCard from '../components/OrderCard';

export default function OrdersPage() {
    const [orders, setOrders] = useState<any[]>([]);

    useEffect(() => {
        fetchOrders().then(setOrders);
    }, []);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Orders</h1>
            <div style={{ display: 'flex'}}>

            {orders.map(order => (
                <OrderCard key={order.id} order={order} />
            ))}
                </div>

        </div>
    );
}
