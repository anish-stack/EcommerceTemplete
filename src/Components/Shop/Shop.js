import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios for making API requests
import './Shop.css'
import MetaData from "../Meta/MetaData";
import Loader from "../Loader/Loader";

const Shop = () => {
    const [productList, setProductList] = useState([]); // Define productList as state
    const [loading, setLoading] = useState(true);    // Fetch fake products from the API
    const fetchFakeProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            setProductList(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchFakeProducts(); // Call the fetchFakeProducts function
    }, []); // Add an empty dependency array to run the effect only once

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

    return (
        <div className="Product-card">
          <MetaData title="Shop" />
          {loading ? (
            // Display the Loader component while loading
            <Loader />
          ) : (
            // Display the product list when data is loaded
            productList.map((product) => (
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
            ))
          )}
        </div>
    )
}

export default Shop;

