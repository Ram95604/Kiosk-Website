// src/components/Sidebar.js

import React, { useState } from 'react';

const Sidebar = ({ onSelect }) => {
  const [burgerOptionsVisible, setBurgerOptionsVisible] = useState(false);
  const [pizzaOptionsVisible, setPizzaOptionsVisible] = useState(false);

  const handleSelect = (mainOption, subOption) => {
    onSelect(mainOption, subOption);
  };

  const handleBurgerClick = () => {
    setBurgerOptionsVisible(!burgerOptionsVisible);
    setPizzaOptionsVisible(false); // Hide pizza options
  };

  const handlePizzaClick = () => {
    setPizzaOptionsVisible(!pizzaOptionsVisible);
    setBurgerOptionsVisible(false); // Hide burger options
  };

  return (
    <div className="sidebar">
      <h2>Order Food</h2>
      <button onClick={handleBurgerClick}>Burger</button>
      {burgerOptionsVisible && (
        <div className="submenu">
          <button onClick={() => handleSelect('burger', 'veg')}>Veg</button>
          <button onClick={() => handleSelect('burger', 'non-veg')}>Non-Veg</button>
        </div>
      )}

      <button onClick={handlePizzaClick}>Pizza</button>
      {pizzaOptionsVisible && (
        <div className="submenu">
          <button onClick={() => handleSelect('pizza', 'veg')}>Veg</button>
          <button onClick={() => handleSelect('pizza', 'non-veg')}>Non-Veg</button>
        </div>
      )}

      <button onClick={() => handleSelect('chicken', '')}>Chicken</button>
      <button onClick={() => handleSelect('snacks', '')}>Snacks</button>
    </div>
  );
};

export default Sidebar;
