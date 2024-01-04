import './App.css'
import React, { useState } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import { burger, pizza, chicken } from './data';
import LandingPage from './components/LandingPage';
function App() {
  const [selectedMenu, setSelectedMenu] = useState({ main: '', sub: '' });
  const [showLandingPage, setShowLandingPage] = useState(true); // State to control landing page visibility
  let items = [];

  const handleMenuSelect = (main, sub) => {
    setSelectedMenu({ main, sub });
    setShowLandingPage(false); // Hide landing page when menu is selected
  };

  const filterItemsByCategory = (menuItems, category) => {
    return category ? menuItems.filter(item => item.category === category) : menuItems;
  };

  switch (selectedMenu.main) {
    case 'burger':
      items = filterItemsByCategory(burger, selectedMenu.sub);
      break;
    case 'pizza':
      items = pizza; // For Pizza, no sub-options, so display all items
      break;
    case 'chicken':
      items = chicken; // For Chicken, no sub-options, so display all items
      break;
    default:
      items = [];
  }

  return (
    <div className="container">
      {showLandingPage ? (
        <LandingPage onOrderClick={() => setShowLandingPage(false)} />
      ) : (
        <>
          <Sidebar onSelect={handleMenuSelect} />
          <Content items={items} />
        </>
      )}
    </div>
  );
}

export default App;
