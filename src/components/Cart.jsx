import React from "react";

const Cart = ({ cartItems }) => {
  const itemCount = {};
  let total = 0;

  cartItems.forEach(item => {
    if (itemCount[item.name]) {
      itemCount[item.name].count += 1;
    } else {
      itemCount[item.name] = {
        count: 1,
        price: item.price
      };
    }
    total += item.price;
  });

  return (
    <div className="cart">
      <h2>Carrito</h2>
      <ul>
        {Object.entries(itemCount).map(([name, { count, price }]) => (
          <li key={name}>
            {name} ({count}) - Total: ${count * price}
          </li>
        ))}
      </ul>
      <h3>Total del carrito: ${total}</h3>
    </div>
  );
};

export default Cart;
