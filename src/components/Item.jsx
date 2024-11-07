import React, { useState } from 'react';
import { useCartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
    const { addToCart } = useCartContext();
    const [stock, setStock] = useState(product.stock);

    const handleAddToCart = () => {
        if (stock > 0) {
            addToCart(product);
            setStock(stock - 1);
        }
    };

    return (
        <div className="item">
            <img src={product.image} alt={product.name} />
            <p>${product.price}</p>
            <Link to={`/item/${product.id}`}>
                <button>View Details</button>
            </Link>
            <button onClick={handleAddToCart} disabled={stock === 0}>
                {stock > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
        </div>
    );
};

export default Item;
