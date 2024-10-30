// Cart.jsx
import React from 'react';
import { useCartContext } from '../context/CartContext';

const Cart = () => {
    const { cart, removeFromCart, clearCart } = useCartContext();

    return (
        <div className="cart">
            <h2>Carrito de Compras</h2>
            {cart.length === 0 ? (
                <p>Tu carrito está vacío</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h4>{item.name}</h4>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.quantity}</p>
                                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
                    <button onClick={clearCart}>Vaciar Carrito</button>
                </div>
            )}
        </div>
    );
};

export default Cart;
