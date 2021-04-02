import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import './Login.css';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';

const Login = () => {

    const { value, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value2;

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    

    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
        .then(res => {
            const {displayName, email} = res.user;
            console.log(displayName, email);
            const signedInUser = {name: displayName, email}
            setLoggedInUser(signedInUser);
            history.replace(from);
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="container">
            <div className="login">
                <h3>Login</h3>
                <button onClick={handleGoogleSignIn} className="login-btn btn btn-primary">Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;