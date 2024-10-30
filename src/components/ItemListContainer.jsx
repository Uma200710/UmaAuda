// ItemListContainer.jsx
import React from 'react';
import products from '../data/products';
import { useCartContext } from '../context/CartContext';

const ItemListContainer = () => {
    const { addToCart } = useCartContext();

    return (
        <div className="item-list-container">
            {products.map((product) => (
                <div className="product-card" key={product.id}>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <p>${product.price}</p>
                    <p>Stock: {product.stock}</p>
                    <button onClick={() => addToCart(product)} disabled={product.stock === 0}>
                        {product.stock > 0 ? "Agregar al carrito" : "Sin stock"}
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ItemListContainer;
