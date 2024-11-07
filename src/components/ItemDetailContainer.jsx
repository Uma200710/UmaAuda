import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCartContext } from '../context/CartContext';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const { addToCart } = useCartContext();
    const product = products.find(item => item.id === id);

    if (!product) return <p>Product not found.</p>;

    return (
        <div className="item-detail">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default ItemDetailContainer;
