
import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onOrderClick }) => {
  return (
    <div className="landing-page" onClick={onOrderClick}>
      <button className="order-button">Order Now</button>
    </div>
  );
};

export default LandingPage;
