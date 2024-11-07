import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import { CartContextProvider } from '../context/CartContext';
import CartIcon from '../components/CartIcon';

const App = () => (
    <CartContextProvider>
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/category/sofas">Sofas</Link>
                    <Link to="/category/tables">Tables</Link>
                    <Link to="/category/chairs">Chairs</Link>
                    <CartIcon />
                </nav>
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/item/:id" element={<ItemDetailContainer />} />
                </Routes>
            </div>
        </Router>
    </CartContextProvider>
);

export default App;
