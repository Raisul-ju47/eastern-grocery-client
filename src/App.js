import React, { createContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Admin from "./components/Admin/Admin";
import Deals from "./components/Deals/Deals";
import AddProducts from './components/AddProducts/AddProducts';
import Header from './components/Header/Header';
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import CheckOut from "./components/CheckOut/CheckOut";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <UserContext.Provider value={{ value: [products, setProducts], value2: [loggedInUser, setLoggedInUser]}}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/orders">
            <Orders />
          </Route>
          <PrivateRoute path="/product/:id">
            <CheckOut/>
          </PrivateRoute>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/addProducts">
            <AddProducts />
          </Route> 
          <Route path="/manageProducts">
            <ManageProduct />
          </Route>
          <Route path="/deals">
            <Deals />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
