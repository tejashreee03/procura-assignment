import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import OrdersPage from './pages/OrdersPage';

export default function App() {
  const [page, setPage] = useState<'products' | 'orders'>('products');

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '10px' }}>
        <button onClick={() => setPage('products')} style={{ marginRight: '10px', padding: '10px', cursor: 'pointer' }}>Products</button>
        <button onClick={() => setPage('orders')} style={{ padding: '10px', cursor: 'pointer' }}>Orders</button>
      </div>
      {page === 'products' ? <ProductsPage /> : <OrdersPage />}
    </div>
  );
}
