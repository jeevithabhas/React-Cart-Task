
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';


const App = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  
  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      alert('Item already added to the cart ❌ ');
    } else {
      setCart([...cart, product]);
    }
  };

  
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  
  const openCart = () => {
    setIsCartOpen(true);
  };

  
  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Navbar cartCount={cart.length} openCart={openCart} />
      <ProductList addToCart={addToCart} />
      {isCartOpen && (
        <CartModal cartItems={cart} closeCart={closeCart} removeFromCart={removeFromCart} />
      )}
    </div>
  );
};

export default App;
