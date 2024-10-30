import React, { useState } from 'react';
import products from '../data/products';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';

const App = () => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setCartOpen] = useState(false);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct && existingProduct.quantity < product.stock) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else if (!existingProduct) {
                return [...prevCart, { ...product, quantity: 1 }];
            }
            return prevCart;
        });
    };

    const removeFromCart = (id) => {
        setCart(prevCart => prevCart.filter(item => item.id !== id));
    };

    const toggleCart = () => {
        setCartOpen(!isCartOpen);
    };

    return (
        <Router>
            <div>
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/category/sofas">Sofas</Link>
                    <Link to="/category/tables">Tables</Link>
                    <Link to="/category/chairs">Chairs</Link>
                    <button onClick={toggleCart}>
                        Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
                    </button>
                </nav>
                <Routes>
                    <Route path="/" element={<ItemListContainer products={products} addToCart={addToCart} />} />
                    <Route path="/category/:id" element={<ItemListContainer products={products} addToCart={addToCart} />} />
                    <Route path="/item/:id" element={<ItemDetailContainer products={products} addToCart={addToCart} />} />
                </Routes>
                <Cart cart={cart} isOpen={isCartOpen} toggleCart={toggleCart} removeFromCart={removeFromCart} />
            </div>
        </Router>
    );
};

export default App;
