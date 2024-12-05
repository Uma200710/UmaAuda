import React from 'react';

const Categories = ({ categories, onCategoryClick, onHomeClick }) => {
  return (
    <div className="categories">
      <button onClick={onHomeClick} className="category-button">Home</button>
      {categories.map((category) => (
        <button 
          key={category} 
          onClick={() => onCategoryClick(category)} 
          className="category-button"
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
