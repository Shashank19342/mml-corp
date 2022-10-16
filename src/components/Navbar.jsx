import "./Navbar.css";
import logo_with_name from "../assets/logo-with-name.jpeg";
import logo_without_name from "../assets/logo-without-name.jpeg";
import { useState } from "react";

function Navbar(){

    function handleProductSroll() {
        document.getElementById('products').scrollIntoView();
    }

    function ContactUsScroll() {
        document.getElementById('contact-form').scrollIntoView();
    }

    return(
        <div className="navbar">
            <div className="logo">
                <img src={window.innerWidth <= 600? logo_without_name:logo_with_name} alt="MML Corporation"></img>
            </div>
            <div className="links">
                <ul>
                    <li onClick={handleProductSroll}>Products</li>
                    <li onClick={ContactUsScroll}>Contact Us</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;

