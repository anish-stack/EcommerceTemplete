import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './SingleProduct.css'; // Import your CSS file
import Loader from '../Loader/Loader';
import MetaData from '../../Components/Meta/MetaData'
import {  toast } from 'react-toastify';

const SingleProduct = ({ increaseCount,decreaseCount }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [quantity, setQuantity] = useState(0); // Default quantity
    const [cartProduct,setCartProduct] = useState()
    const fetchProduct = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
    }, [id]);

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
        increaseCount(); 
    }

    const decreaseQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
        decreaseCount()

    }

    const handleCart = (e)=>{
        e.preventDefault();

        //check qunatyty is more than zero and not to be zero
        if(quantity>0){
            
        }

        const productToAdd = { ...product, quantity };

         // Check if the session storage is available
    if (sessionStorage) {
        // Retrieve the existing cart items from session storage or initialize an empty array
        const existingCart = JSON.parse(sessionStorage.getItem('cart')) || [];

        // Add the product to the cart
        existingCart.push(productToAdd);

        // Store the updated cart in session storage
        sessionStorage.setItem('cart', JSON.stringify(existingCart));

        // You can also add some user feedback here, e.g., a success message
        console.log('Product added to cart:', productToAdd);
        toast.success('Product added to cart');

    } else {
        // Handle the case where session storage is not available (e.g., in some private browsing modes)
        console.error('Session storage is not available.');
    }
    }



    return (
        <>

        <MetaData title="Single Product" />

        <div className="single-product-container">
            {loading ? (
                <Loader />
            ) : product ? (
                <div className="single-product-details">
                    <div className="single-product-img">
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className="single-product-info">
                        <h2>{product.title}</h2>
                        <p>Price: Rs{product.price}</p>
                        <p>{product.description}</p>
                        <p>Category: {product.category}</p>
                        <p>Rating: {product.rating.rate}</p>
                        <p>Quantity: {quantity}</p>
                        <div className="quantity-controls">
                            <button onClick={decreaseQuantity}>-</button>
                            <span>{quantity}</span>
                            <button onClick={increaseQuantity}>+</button>
                        </div>
                        <button onClick={handleCart} className="add-to-cart-button">Add to Cart</button>
                    </div>
                </div>
            ) : (
                <p>Product not found</p>
            )}
        </div>

        </>

    );
}

export default SingleProduct;
