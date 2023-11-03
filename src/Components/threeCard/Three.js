import React from 'react';
import delivery from '../../Assest/delivery-truck.png';
import Secure from '../../Assest/protection.png';
import returnImg from '../../Assest/return.png';
import './threecard.css'
const Three = () => {
  const data = [
    {
      img: delivery,
      text: 'Free Shipping',
      subText: 'On Order Of 499',
    },
    {
      img: Secure,
      text: 'Secure Payments',
      subText: 'dd',
    },
    {
      img: returnImg,
      text: 'Easy Returns',
      subText: 'On all orders',
    },
  ];

  return (
    <div className="three-cards">
      {data.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-img">
            <img src={item.img} alt={item.text} />
          </div>
          <div className="card-text">
            <h3>{item.text}</h3>
            <p>{item.subText}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Three;
