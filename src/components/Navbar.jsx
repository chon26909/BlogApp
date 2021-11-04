import React from 'react';
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="background-navbar">
            <div className="container navbar-blog">
                <div aria-label="nav left" className="nav-left">
                    <Link to="/">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Blogger_logo.svg/1280px-Blogger_logo.svg.png" alt="logo" />
                    </Link>
                </div>
                <div aria-label="nav right" className="nav-right">
                    right
                </div>
            </div>
        </nav>
    )
}

export default Navbar
