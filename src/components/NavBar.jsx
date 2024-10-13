import React from "react";

const NavBar = ({ setFilter }) => {
  return (
    <nav className="navbar">
      <h1>Armando Esteban Quito</h1>
      <ul>
        <li onClick={() => setFilter("All")}>All</li>
        <li onClick={() => setFilter("Sillas")}>Sillas</li>
        <li onClick={() => setFilter("Mesas")}>Mesas</li>
        <li onClick={() => setFilter("Estanterías")}>Estanterías</li>
        <li onClick={() => setFilter("Sofás")}>Sofás</li>
      </ul>
    </nav>
  );
}

export default NavBar;