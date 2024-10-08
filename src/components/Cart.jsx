import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio: ${item.price * item.quantity}</p>
            <button onClick={() => removeFromCart(item)}>Eliminar</button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
