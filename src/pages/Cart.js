import React, { useState, useEffect } from 'react';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(savedCart);
  }, []);

  const handleQuantityChange = (id, delta) => {
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity + delta, 1) } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDelete = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className='Cart_title'>Your Cart</h1>
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div className="cart-item" key={item.id}>
              <img src={item.img} alt={item.title} className="cart-item-img" />
              <div className="cart-item-details">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p className="cart-item-price">Price: ${item.price}</p>
                <p className="cart-item-quantity">
                  Quantity: 
                  <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                  {item.quantity}
                  <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                </p>
                <button className="delete-btn" onClick={() => handleDelete(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="total-price">Total Price: ${calculateTotalPrice()}</div>
    </div>
  );
};

export default Cart;
