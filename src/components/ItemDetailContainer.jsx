import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === id);

  return (
    <div>
      {product ? (
        <>
          <h2>{product.name}</h2>
          <img src={product.image} alt={product.name} width="200" />
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
