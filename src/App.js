import './App.css';
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import LandingPage from './components/LandingPage';
import { burger, pizza, chicken, food, Beverages, snacks } from './data';
import { CiShoppingCart } from "react-icons/ci";

function App() {
  const [selectedMenu, setSelectedMenu] = useState({ main: '', sub: '' });
  const [showLandingPage, setShowLandingPage] = useState(true);
  let items = [];
  
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const handleMenuSelect = (main, sub) => {
    setSelectedMenu({ main, sub });
    setShowLandingPage(false);
  };
  const filterItemsByCategory = (menuItems, category) => {
    return category ? menuItems.filter(item => item.category === category) : menuItems;
  };
  const handlePlaceOrder = () => {
    
    alert('Your order has been successfully placed!');
    
  };


  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };

  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  switch (selectedMenu.main) {
    case 'burger':
      items = filterItemsByCategory(burger, selectedMenu.sub);
      break;
    case 'pizza':
      items = filterItemsByCategory(pizza, selectedMenu.sub);
      break;
    case 'chicken':
      items = filterItemsByCategory(chicken, selectedMenu.sub);
      break;
    case 'snacks':
      items = snacks;
      break;
    case 'Beverages':
      items = Beverages;
      break;
    case 'food':
      items = food;
      break;
    default:
      items = [];
  }

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="container">
      {showLandingPage ? (
        <LandingPage onOrderClick={() => setShowLandingPage(false)} />
      ) : showCart ? (
        
        <div className="cart-overlay" onClick={toggleCart}>
          
          <div className="cart-content" onClick={e => e.stopPropagation()}>
          <h2>Your Cart</h2>
          <ul>
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
              <span>{item.name} x {item.quantity}</span>
              <span>Rs {item.price * item.quantity}</span> {/* Assuming each item has a 'price' property */}
            </li>
            ))}
          </ul>
          <div className="cart-actions">
          <button className="close-cart" onClick={handlePlaceOrder} >Order</button>
              <button className="close-cart" onClick={toggleCart} style={{marginLeft:'25px'}}>Close Cart</button>
              
            </div>
        </div>
        </div>
      ) : (
        <>
          <Sidebar onSelect={handleMenuSelect} />
          <Content items={items} selectedMenu={selectedMenu.main} onSelectMenu={handleMenuSelect} addToCart={addToCart} />
          <div className="cart" onClick={toggleCart} style={{marginTop:'15px'}}>
            <CiShoppingCart style={{ fontSize: '2.25rem', lineHeight: '2.5rem', cursor: 'pointer' }} />
            {cartItemsCount > 0 && <span className="cart-count">{cartItemsCount}</span>}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
