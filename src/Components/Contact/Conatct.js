import React, { useState, useEffect } from 'react';
import MetaData from '../Meta/MetaData';
import {toast} from 'react-toastify'
const Conatct = () => {
    const [formdata, setFormdata] = useState({
        Name: '',
        Email: '',
        Message: '',
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
          !formdata.Name ||
          !formdata.Email ||
          !formdata.landmark ||
          !formdata.pincode ||
          !formdata.contactNumber
        ) {
          toast.error("Please fill in all fields");
        } else {
          // All form fields are filled, you can proceed with order placement logic
          // Display success message or submit the form data to an API, for example
          toast.success("We Contact You in Next 24hr");
          sessionStorage.clear()
    
          
    
        //   window.location.href="/Success"
        }
      };
      
  return (
    <div className='conatct-bg'>
        <MetaData title="Conatct"/>
          <div className='checkout-form'>
        <div className='forms-cont'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                name="Name"
                value={formdata.Name}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="Email">Email</label>
              <input
                type="text"
                name="Email"
                required
                value={formdata.Email}
                onChange={handleFormChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="Message">Message</label>
              <input
                type="text"
                name="Message"
                required
                value={formdata.Message}
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
  )
}

export default Conatct