import React from "react";
import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <header>
            <nav className="navBar">
                <div className="vclogo">
                    <img src="/assets/vcLogo.png" alt="Vision Care Opticals Logo Image" />
                </div>
                <ul className="navLinks">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#products">Products</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;