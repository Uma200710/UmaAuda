import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeOneFromCart, isCartOpen, totalPrice, toggleCart } = useCartContext();

    return (
        <div className={`cart ${isCartOpen ? 'cart-open' : ''}`}>
            <button onClick={toggleCart} className="close-cart">Close</button>
            <h3>Shopping Cart</h3>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>Quantity: {item.quantity}</p>
                    <button onClick={() => removeOneFromCart(item.id)}>-</button>
                </div>
            ))}
            <h4>Total Price: ${totalPrice}</h4>
        </div>
    );
};

export default Cart;
