import React from 'react';

const CartPage = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = () => {
    alert('Your order has been placed successfully!');
  };

  return (
    <div>
      <h2>Your Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Rs{item.price}
          </li>
        ))}
      </ul>
      <h3>Total Amount: Rs{totalAmount}</h3>
      <button onClick={placeOrder}>Place Order</button> {/* Use the placeOrder function here */}
    </div>
  );
};

export default CartPage;
