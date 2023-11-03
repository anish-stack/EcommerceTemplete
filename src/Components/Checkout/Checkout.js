import React, { useState, useEffect } from 'react';
import MetaData from '../Meta/MetaData';
import {toast} from 'react-toastify'
import './checkout.css'
const Checkout = () => {
  const [checkoutData, setCheckoutData] = useState([]);
  const [formdata, setFormdata] = useState({
    address: '',
    state: '',
    landmark: '',
    pincode: '',
    contactNumber: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formdata.address ||
      !formdata.state ||
      !formdata.landmark ||
      !formdata.pincode ||
      !formdata.contactNumber
    ) {
      toast.error("Please fill in all fields");
    } else {
      // All form fields are filled, you can proceed with order placement logic
      // Display success message or submit the form data to an API, for example
      toast.success("Order Placed Successfully");
      sessionStorage.clear()

      

      window.location.href="/Success"
    }
  };
  

  useEffect(() => {
    // Fetch the checkout data from sessionStorage and update the state
    const getCheckoutProduct = sessionStorage.getItem('checkout-data')
      ? JSON.parse(sessionStorage.getItem('checkout-data'))
      : [];

    setCheckoutData(getCheckoutProduct);
  }, []); 

  const total = checkoutData.reduce((acc, item) => {
    const itemPrice = parseFloat(item.price); // Convert to a number
    return acc + (isNaN(itemPrice) ? 0 : itemPrice); // Handle non-numeric values
  }, 0);

  return (
<div className='padding20'>
  

    <div className='checkout-page'>
      <MetaData title="Checkout" />
      <div className='checkout-product'>
        <ul className='checkout-list'>
          {checkoutData &&
            checkoutData.map((item, index) => (
              <li key={index}>
                <h5>{item.title}</h5>
                <p>Price: Rs{item.price}</p>
              </li>
              
            ))}
                  <h2>Total Price: Rs{total.toFixed(2)}</h2>

        </ul>
      </div>
      <div className='checkout-form'>
        <div className='forms-cont'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={formdata.address}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                required
                value={formdata.state}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="landmark">Landmark</label>
              <input
                type="text"
                name="landmark"
                required
                value={formdata.landmark}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="pincode">Pincode</label>
              <input
                type="text"
                name="pincode"
                required
                value={formdata.pincode}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="contactNumber">Contact Number</label>
              <input
                type="text"
                name="contactNumber"
                required
                value={formdata.contactNumber}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <button className='shop-cta' type="submit">Place Order</button>
            </div>
          </form>
        </div>
      </div>

    </div>

    </div>

  );
};

export default Checkout;
