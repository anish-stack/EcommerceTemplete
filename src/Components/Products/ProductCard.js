import React from "react";
import { Link } from "react-router-dom";
import './Productcard.css'
function renderStars(rating) {
  const stars = [];
  const maxRating = 5; // Maximum rating (e.g., 5 stars)
  
  const filledStars = Math.floor(rating); // Number of filled stars
  const emptyStars = maxRating - filledStars; // Number of empty stars
  
  for (let i = 0; i < filledStars; i++) {
    stars.push(<span key={i} className="star star-filled">&#9733;</span>);
  }
  
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={filledStars + i} className="star star-empty">&#9733;</span>);
  }
  
  return stars;
}

const ProductCard = (props) => {
  const ProductData = props.product.slice(0, 8);
  console.log(ProductData.slice(0, 8));


  return (
    <div className="Product-card">
      {ProductData.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product">
            <div className="product-img">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-info">
                <h3>{product.title}</h3>
                <p>Rs {product.price}</p>
                <h4>{renderStars(product.rating.rate)}</h4>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
