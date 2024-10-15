import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('path/to/your/api');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ItemListContainer;
