import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="container header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        Eastern Grocery
          </a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ml-lg-auto">
                            <li class="nav-item">
                                <Link to="/"><a class="nav-link active" aria-current="page" href="#">
                                    Home
                </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/orders">
                                    <a class="nav-link" href="#">
                                        Orders
                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/admin">
                                    <a class="nav-link" href="#">
                                        Admin
                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                            <Link to="/deals">
                                    <a class="nav-link" href="#">
                                        Deals
                    </a>
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/login"><button class="btn btn-primary">Login</button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;