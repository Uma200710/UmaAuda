import React from "react";

const ProductCard = ({ name, image, price, description, addToCart }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>${price}</p>
      <button onClick={() => addToCart({ name, image, price, description })}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;