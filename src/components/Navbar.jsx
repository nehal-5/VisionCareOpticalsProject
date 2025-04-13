import React from "react";
import '../styles/Navbar.css';
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);
    return (
        <header>
            <nav className="navBar">
                <div className="vclogo">
                    <img src="/assets/vcLogo.png" alt="Vision Care Opticals Logo Image" />
                </div>
                <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={`navLinks ${isOpen ? "open" : ""}`}>
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