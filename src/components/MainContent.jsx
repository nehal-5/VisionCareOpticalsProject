// import React from "react";
import Navbar from './Navbar'

import Hero from "./Hero";
import Products from "./Products";
import Services from "./Services";
import Appointment from "./Appointment";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Footer from "./Footer";


function MainContent () {
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
            <Services />
            <Appointment />
            <Blogs />
            <Contact />
            <Footer />
        </>
    );
};

export default MainContent;