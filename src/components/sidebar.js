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

  const handleSnacksClick = () => {
    onSelect('snacks', ''); // Passing 'snacks' as the main option
    setBurgerOptionsVisible(false); // Hide other options if necessary
    setPizzaOptionsVisible(false);
  };


  return (
    <div className="sidebar">
      <h2>Order Food</h2>
      <button onClick={handleBurgerClick}>Burger</button>
      {burgerOptionsVisible && (
        <div className="submenu">
          <button onClick={() => handleSelect('burger', 'veg')}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXDkY14JPfE73BPcy6uZ1gpRWeciztqG1OMI9Yiw5Hg&s' alt='veg/non-veg symbol' style={{height:'17px',width:'17px'}} /> Veg</button>
          <button onClick={() => handleSelect('burger', 'non-veg')}><img src='https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' alt='veg/non-veg symbol' style={{height:'15px',width:'15px'}} /> Non-Veg</button>
        </div>
      )}

      <button onClick={handlePizzaClick}>Pizza</button>
      {pizzaOptionsVisible && (
        <div className="submenu">
          <button onClick={() => handleSelect('pizza', 'veg')}><img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTXDkY14JPfE73BPcy6uZ1gpRWeciztqG1OMI9Yiw5Hg&s' alt='veg/non-veg symbol' style={{height:'17px',width:'17px'}} /> Veg</button>
          <button onClick={() => handleSelect('pizza', 'non-veg')}><img src='https://foodsafetyhelpline.com/wp-content/uploads/2013/05/non-veg-300x259.jpg' alt='veg/non-veg symbol' style={{height:'15px',width:'15px'}} /> Non-Veg</button>
        </div>
      )}
      <button onClick={() => handleSelect('chicken', '')}>Chicken</button>
      <button onClick={handleSnacksClick}>Snacks</button>

    </div>
  );
};

export default Sidebar;
