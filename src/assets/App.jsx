import React, { useState, useEffect } from 'react';
import { fetchProducts, createOrder, updateProductStock } from '../db/db';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setProducts(fetchedProducts);
    };
    getProducts();
  }, []);

  const updateStockInDbAndState = async (productId, newStock) => {
    await updateProductStock(productId, newStock);
    const updatedProducts = products.map((product) =>
      product.id === productId ? { ...product, stock: newStock } : product
    );
    setProducts(updatedProducts);
  };

  const addToCart = async (product) => {
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

  const removeFromCart = async (productId) => {
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

  const categories = [
    { name: 'Sofas', value: 'sofas' },
    { name: 'Sillas', value: 'chairs' },
    { name: 'Mesas', value: 'tables' },
  ];

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div>
      <h1>Armando Esteban Quito</h1>
      
      <div className="categories">
        <button onClick={() => setSelectedCategory(null)} className="active">
          Home
        </button>
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => setSelectedCategory(category.value)}
            className={selectedCategory === category.value ? 'active' : ''}
          >
            {category.name}
          </button>
        ))}
      </div>
      
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
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
        ))}
      </div>
      
      <button 
        onClick={() => setIsCartOpen(!isCartOpen)} 
        className="cart-button"
      >
        {isCartOpen ? 'Cerrar carrito' : 'Ver carrito'}
      </button>
      
      {isCartOpen && (
        <div className="cart">
          <h2>Carrito</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
                <button onClick={() => removeFromCart(item.id)} className="remove-item-button">
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
          <p>Total: ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}</p>
          <button onClick={handleCheckout} className="checkout-button">
            Finalizar compra
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
