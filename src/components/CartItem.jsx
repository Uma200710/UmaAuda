import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>Precio: ${item.price} x {item.quantity}</p>
      <button onClick={() => removeFromCart(item)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
