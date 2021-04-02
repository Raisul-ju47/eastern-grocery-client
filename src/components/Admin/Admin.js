import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Admin = () => {
    return (
        <div className="container">
            <div className="admin">
                <h1 className="text-center">Welcome To Admin Panel</h1>
                <Link to='/addProducts'><button className="btn btn-primary"> Add Products</button></Link>
                <br />
                <Link to='/manageProducts'><button className="btn btn-primary mt-5"> Manage Products</button></Link>
            </div>
        </div>
    );
};

export default Admin;