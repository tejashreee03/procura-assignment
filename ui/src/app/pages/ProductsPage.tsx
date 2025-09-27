import React, { useEffect, useState } from 'react';
import { fetchProducts, addProduct, updateProduct } from '../api/productsApi';
import { createOrder } from '../api/ordersApi';
import ProductCard from '../components/ProductCard';
import Modal from '../components/Modal';

export default function ProductsPage() {
    const [products, setProducts] = useState<any[]>([]);
    const [selectedProducts, setSelectedProducts] = useState<any[]>([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [customerName, setCustomerName] = useState('');
    const [customerPhone, setCustomerPhone] = useState('');
    const [productModalVisible, setProductModalVisible] = useState(false);
    const [editProduct, setEditProduct] = useState<any>(null);
    const [productName, setProductName] = useState('');
    const [productDesc, setProductDesc] = useState('');
    const [productRate, setProductRate] = useState('');

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const data = await fetchProducts();
        setProducts(data);
    };

    const toggleProduct = (product: any) => {
        if (selectedProducts.includes(product)) {
            setSelectedProducts(selectedProducts.filter(p => p !== product));
        } else {
            setSelectedProducts([...selectedProducts, product]);
        }
    };

    const handlePlaceOrder = async () => {
        if (!customerName || !customerPhone) return alert("Enter name and phone");
        const order = {
            customer: { name: customerName, phone: customerPhone },
            products: selectedProducts.map(p => p.id),
            totalAmount: selectedProducts.reduce((sum, p) => sum + Number(p.rate), 0)
        };
        await createOrder(order);
        setSelectedProducts([]);
        setCustomerName('');
        setCustomerPhone('');
        setModalVisible(false);
        alert('Order placed successfully!');
    };

    const openProductModal = (product?: any) => {
        if (product) {
            setEditProduct(product);
            setProductName(product.name);
            setProductDesc(product.description);
            setProductRate(product.rate);
        } else {
            setEditProduct(null);
            setProductName('');
            setProductDesc('');
            setProductRate('');
        }
        setProductModalVisible(true);
    };

    const handleSaveProduct = async () => {
        if (!productName || !productDesc || !productRate) return alert("Fill all fields");
        const productData = { name: productName, description: productDesc, rate: productRate };
        if (editProduct) {
            await updateProduct(editProduct.id, productData);
            alert('Product updated!');
        } else {
            await addProduct(productData);
            alert('Product added!');
        }
        setProductModalVisible(false);
        loadProducts();
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Products</h1>
            <button
                onClick={() => openProductModal()}
                style={{
                    marginBottom: '15px',
                    padding: '10px 20px',
                    backgroundColor: '#28a745',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer'
                }}
            >
                Add Product
            </button>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map(p => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        selected={selectedProducts.includes(p)}
                        onToggle={toggleProduct}
                        onEdit={openProductModal}
                    />
                ))}
            </div>

            {selectedProducts.length > 0 && (
                <button
                    onClick={() => setModalVisible(true)}
                    style={{
                        marginTop: '20px',
                        padding: '10px 20px',
                        backgroundColor: '#007BFF',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer'
                    }}
                >
                    Place Order ({selectedProducts.length})
                </button>
            )}

            {/* Order Modal */}
            <Modal visible={modalVisible} onClose={() => setModalVisible(false)}>
                <h2>Enter Customer Details</h2>
                <input placeholder="Name" value={customerName} onChange={e => setCustomerName(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <input placeholder="Phone" value={customerPhone} onChange={e => setCustomerPhone(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <button onClick={handlePlaceOrder} style={{ padding: '10px 20px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Submit</button>
            </Modal>

            {/* Product Modal */}
            <Modal visible={productModalVisible} onClose={() => setProductModalVisible(false)}>
                <h2>{editProduct ? 'Edit Product' : 'Add Product'}</h2>
                <input placeholder="Name" value={productName} onChange={e => setProductName(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <input placeholder="Description" value={productDesc} onChange={e => setProductDesc(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <input placeholder="Rate" value={productRate} onChange={e => setProductRate(e.target.value)} style={{ width: '100%', marginBottom: '10px', padding: '8px' }} />
                <button onClick={handleSaveProduct} style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
                    {editProduct ? 'Update' : 'Add'}
                </button>
            </Modal>
        </div>
    );
}
