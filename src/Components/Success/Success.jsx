import React from 'react';
import './Success.css'; // Import your CSS file
import MetaData from '../Meta/MetaData';

const Success = () => {
  return (
    <div className='success-container'>
        <MetaData title="Order-Success"/>
      <h1 className='success-heading'>Order Placed Successfully</h1>
      <div className='success-message'>
        Thank you for your order! You will receive an email confirmation shortly.
      </div>
      <button onClick={() => { window.location.href = "/Shop" }} className='continue-shopping-btn'>
  Continue Shopping
</button>
    </div>
  );
}

export default Success;
