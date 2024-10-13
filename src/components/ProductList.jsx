import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, addToCart }) => {
  return (
    <section className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          name={product.name}
          image={product.image}
          price={product.price}
          description={product.description}
          addToCart={addToCart} // Pasamos la función para agregar al carrito
        />
      ))}
    </section>
  );
}

export default ProductList;