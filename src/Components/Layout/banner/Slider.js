import React, { useState } from 'react';
import img1 from '../../../Assest/model-1.jpg'
import img2 from '../../../Assest/model-2.png'
import img3 from '../../../Assest/model-3.png'
import './slider.css'
const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(1);
    const handleRightClick = () => {
        // Set the current slide to the next one or wrap around
        setCurrentSlide((currentSlide % sliderData.length) + 1);
      };



  const sliderData = [
    {
      img: img1, // Corrected the asset folder name from 'Assest' to 'Assets'
      collection: "Winters Collection",
      text: "EFFORTLESSLY",
      subText: "STYLISH FASHION"
    },
    {
      img: img2, // Corrected the asset folder name from 'Assest' to 'Assets'
      collection: "Developer Choice",
      text: "EFFORTLESSLY",
      subText: "STYLISH FASHION And Coding"
    },
    {
      img: img3, // Corrected the asset folder name from 'Assest' to 'Assets'
      collection: "Gamers Choice", // Corrected typo from 'Gammers Choice' to 'Gamers Choice'
      text: "Great And Cool Laptops",
      subText: "Comfort For Gaming And Coding"
    }
  ];

  return (

    <>
    <div className='slider__container'>
      {
        sliderData.map((item, index) => (
          <div key={index}   style={{ display: index + 1 === currentSlide ? 'flex' : 'none' }} className='slider'>
            <div className='slider-img-side'>
              <img src={item.img} alt=""/>
            </div>
            <div className='slider-img-content'>
              <h4 className="collection">{item.collection}</h4>
              <h2 className="text">{item.text}</h2>
              <h2 className="subText">{item.subText}</h2>
              <br/>
              <button className='shop-cta'>Shop Now</button>
            </div>
          </div>
        ))
      }

      
    </div>
    <div className='btn-cta'>
    <i className="ri-arrow-left-fill"></i> {/* Changed 'class' to 'className' for React */}
    <i className="ri-arrow-right-fill" onClick={handleRightClick}></i> {/* Changed 'class' to 'className' for React */}
  </div>
  </>
  );
}

export default Slider;
