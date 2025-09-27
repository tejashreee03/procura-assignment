import React from 'react';

export default function ProductCard({ product, selected, onToggle, onEdit }: any) {
    return (
        <div
            style={{
                border: selected ? '2px solid #007BFF' : '1px solid #ddd',
                borderRadius: '10px',
                padding: '15px',
                margin: '10px',
                width: '220px',
                cursor: 'pointer',
                boxShadow: '0 3px 8px rgba(0,0,0,0.1)',
                position: 'relative',
            }}
            onClick={() => onToggle(product)}
        >
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>
                {product.name}
            </h3>
            <p style={{ fontSize: '14px', color: '#555', marginBottom: '8px' }}>{product.description}</p>
            <p style={{ fontWeight: 'bold', color: '#007BFF' }}>${product.rate}</p>

            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEdit(product);
                }}
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    backgroundColor: '#ffc107',
                    border: 'none',
                    padding: '5px 8px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    color: '#fff',
                }}
            >
                Edit
            </button>
        </div>
    );
}
