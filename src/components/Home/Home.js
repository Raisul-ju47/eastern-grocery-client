import React, { useContext, useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css';
import { UserContext } from '../../App';
import Header from '../Header/Header';

const Home = () => {
    const { value, value2 } = useContext(UserContext);
    const [products, setProducts] = value;
   

    return (
        <div className="home">
            <div className="container mt-5 products">
                <div className="row d-flex justify-content-between">
                    {
                        products.map(product => <Product product={product}></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;