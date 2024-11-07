import React from 'react';
import products from '../data/products';
import Item from './Item';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { id } = useParams();
    const filteredProducts = id ? products.filter(p => p.category === id) : products;

    return (
        <div className="item-list">
            {filteredProducts.map(product => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ItemListContainer;
