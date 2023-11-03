import React, { useState } from 'react';
import {  toast } from 'react-toastify';
import './cart.css';
import MetaData from '../Meta/MetaData';

const CartProduct = () => {
  const initialCart = sessionStorage.getItem('cart')
    ? JSON.parse(sessionStorage.getItem('cart'))
    : [];
  const [cart, setCart] = useState(initialCart);

  if (initialCart.length === 0) {
    return (
      <>
        <div className="cart-empty">Your cart is empty !!
        <div>
          <button className="cart-btn"  onClick={() => { window.location.href = "/Shop" }}>Go Shopping</button>
        </div>
        </div>
      </>
    );
  }
  

  const removeFromCart = (productId) => {
    // Use the product ID to filter out the item to be removed
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
   toast.error("Product removed");
  };

  const checkout = () => {
    // Store the updatedCart in sessionStorage as a JSON string
    sessionStorage.setItem('checkout-data', JSON.stringify(cart));
   window.location.href="/Checkout"
  };


  return (
    <div className='cart'>
        <MetaData title="Cart" />
      <div className="cart-container">
        <ul className="carts-list">
          {cart.map((item) => (
            <li className="carts-item" key={item.id}>
              <div className="img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="content">
                <p>Name: {item.title}</p>
                <p>Price: {item.price}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
              <div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </li>
          ))}
                <button className="Checkout" onClick={checkout}>Checkout</button>

        </ul>
      </div>
    </div>
  );
};

export default CartProduct;
