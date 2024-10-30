import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/category/1">Category 1</Link>
      <Link to="/category/2">Category 2</Link>
      <span>Cart ({cart.length})</span>
    </nav>
  );
}
