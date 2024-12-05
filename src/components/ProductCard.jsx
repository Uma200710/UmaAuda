import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <p>Stock: {product.stock}</p>
      <button 
        onClick={() => addToCart(product)} 
        disabled={product.stock <= 0}
        className="add-to-cart-button"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ProductCard;
