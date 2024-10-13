import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, image, price, description }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
