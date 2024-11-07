import React from 'react';
import { useCartContext } from '../context/CartContext';
import Cart from './Cart';

const CartIcon = () => {
    const { toggleCart, totalQuantity, totalPrice } = useCartContext();

    return (
        <div className="cart-icon-container">
            <button onClick={toggleCart} className="cart-icon">
                🛒
                <span className="cart-count">{totalQuantity}</span>
            </button>
            <p className="cart-total">Total: ${totalPrice}</p>
            <Cart />
        </div>
    );
};

export default CartIcon;
