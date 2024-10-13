import React from "react";

const NavBar = ({ categories, onCategoryClick }) => {
  return (
    <nav className="navbar">
      <h1>Armando Esteban Quito</h1>
      <ul className="category-list">
        {categories.map((category, index) => (
          <li key={index} className="category-item">
            <button onClick={() => onCategoryClick(category)}>
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
