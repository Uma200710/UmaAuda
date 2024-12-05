import React, { useState, useEffect } from 'react';
import { fetchProducts, createOrder, updateProductStock } from '../db/db';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';
import Categories from '../components/Categories';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  
  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  const categories = ['sofas', 'chairs', 'tables'];

  const updateStockInDbAndState = async (productId, newStock) => {
    await updateProductStock(productId, newStock);
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId ? { ...product, stock: newStock } : product
      )
    );
  };

  const addToCart = (product) => {
    const productInStock = products.find((item) => item.id === product.id);

    if (!productInStock || productInStock.stock <= 0) {
      alert('No hay suficiente stock para este producto');
      return;
    }

    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        if (existingProduct.quantity >= productInStock.stock) {
          alert('No puedes agregar más productos de los que hay en stock');
          return prevCart;
        }
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      updateStockInDbAndState(product.id, productInStock.stock - 1);
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    const productToRemove = cart.find((item) => item.id === productId);
    if (productToRemove) {
      const productInStock = products.find((item) => item.id === productToRemove.id);
      if (productInStock) {
        updateStockInDbAndState(productId, productInStock.stock + productToRemove.quantity);
      }
    }
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const handleCheckout = async () => {
    const order = {
      products: cart,
      total: cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
      date: new Date(),
    };
    const orderId = await createOrder(order);
    alert(`Compra realizada con éxito. ID de compra: ${orderId}`);
    setCart([]);
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Armando Esteban Quito</h1>
      <Categories 
        categories={categories} 
        onCategoryClick={setSelectedCategory} 
        onHomeClick={() => setSelectedCategory('')} 
      />
      <ProductList products={filteredProducts} addToCart={addToCart} />
      <button 
        onClick={() => setIsCartOpen(!isCartOpen)} 
        className="cart-button"
      >
        {isCartOpen ? 'Cerrar carrito' : 'Ver carrito'}
      </button>
      {isCartOpen && (
        <Cart 
          cart={cart} 
          removeFromCart={removeFromCart} 
          handleCheckout={handleCheckout} 
        />
      )}
    </div>
  );
};

export default App;
