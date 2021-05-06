import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { UserContext } from "../../App";
import "./CheckOut.css";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const { id } = useParams();
  const { value, value2 } = useContext(UserContext);
  const [loggedInUser, setLoggedInUser] = value2;

  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`https://mighty-hollows-77897.herokuapp.com/product/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  console.log(product);

  const handleOrder = () => {
    const newOrder = { ...loggedInUser, ...product };
    fetch("https://mighty-hollows-77897.herokuapp.com/addOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newOrder),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <div className="checkout">
        <img src={product.imageURL} alt="" />
        <div>
          <h4>{product.name}</h4>
          <h4>Price: {product.price} tk</h4>
          <h4>Weight: {product.weight} kg</h4>
          <Link to="/orders">
            <button onClick={handleOrder} className="btn btn-primary">
              Place Order
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
