import React from 'react';
import './App.css';

const Navbar = () => {
    return (
        <div className="header-nav">
            <a href="#" className="title">Wallet</a>
            <a href="#">Home</a>
            <a href="#">How It Works</a>
            <a href="#">Features</a>
            <a href="#">Testimonials</a>
            <a href="#">FAQ</a>
            <div className="auth-buttons">
                <a href="#" className="login-button">Login</a>
                <a href="#" className="signup-button">Sign Up</a>
            </div>
        </div>
    );
};

export default Navbar;