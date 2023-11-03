import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import Loader from '../Loader/Loader'
const Product = () => {
    const [productList, setProductList] = useState([])
    const [loading, setLoading] = useState(true);    // Fetch fake products from the API

    const fetchFakeProducts = async(req,res)=>{
        try {
            const response = await axios.get("https://fakestoreapi.com/products")
            setProductList(response.data)
            setLoading(false);
        } catch (error) {
            console.log('Error:', error);
            setLoading(false);
            
        }
    }
useEffect(()=>{
    fetchFakeProducts()

})

  return (
    <div>
    {loading ? (
        // Display the Loader component while loading
        <Loader />
    ) : (
        // When loading is complete, render the ProductCard component
        <ProductCard product={productList} />
    )}
</div>

  )
}

export default Product