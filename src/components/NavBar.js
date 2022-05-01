import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/NavBar.css';

const NavBar = () => {
    return (
        <div className="navbar">
            {/* <h1 className="Title">Tee's Restaurant</h1> */}

            <div className="links">
                <Link href="/" className="link">Home</Link>
                <Link href="/about" className="link">About</Link>
                <Link href="/product" className="link">Product</Link>
                <Link href="/contact" className="link">Contact</Link>
            </div>
        </div>
    )
}

export default NavBar;
