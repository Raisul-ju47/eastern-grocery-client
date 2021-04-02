import React from 'react';
import './Product.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

const Product = ({product}) => {
    return (
        <div className="col-md-4 product">
            <img src={product.imageURL} alt=""/>
            <h6>{product.name}</h6>
            <div className="d-flex justify-content-around">
                <h4>Price: {product.price}</h4>
                <Link to={`/product/${product._id}`}><button class="btn btn-primary">Buy Now</button></Link>
            </div>
        </div>
    );
};

export default Product;