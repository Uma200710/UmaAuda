import React from 'react';

const Cart = ({ cart, removeFromCart, handleCheckout }) => {
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity} x ${item.price}
            <button 
              onClick={() => removeFromCart(item.id)} 
              className="remove-item-button"
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice}</p>
      <button onClick={handleCheckout} className="checkout-button">
        Finalizar compra
      </button>
    </div>
  );
};

export default Cart;
