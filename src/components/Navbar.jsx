import React from 'react';
import "../styles/navbar.css";

const Navbar = () => {
    return (
        <nav className="background-navbar">
            <div className="container navbar-blog">
                <div className="nav-left">
                    <img className="logo" src="https://cdn.freelogovectors.net/wp-content/uploads/2020/11/line_man_logo.png" alt="logo" />
                </div>
                <div className="nav-right">
                    right
                </div>
            </div>
        </nav>
    )
}

export default Navbar
