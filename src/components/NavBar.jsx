import React from 'react';

const NavBar = ({ cartItemCount }) => {
  return (
    <nav className="navbar">
      <h1>Armando Esteban Quito</h1>
      <ul className="categories">
        <li>Categoría 1</li>
        <li>Categoría 2</li>
        <li>Categoría 3</li>
      </ul>
      <div className="cart">
        <span>Carrito ({cartItemCount})</span>
      </div>
    </nav>
  );
};

export default NavBar;
