import React from 'react';
import './styles.css';

function Navbar() {
    return (
        <div className="navbar__container">
            <h2 className="navbar__title">MathExpert</h2>
            <div className="navbar__items">
                <h4 className="navbar__item">Home</h4>
                <h4 className="navbar__item">Content</h4>
                <h4 className="navbar__item">About Us</h4>
                <button className="navbar__loginBtn">Login</button>
            </div>
        </div>
    )
}

export default Navbar
