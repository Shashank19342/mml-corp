import "./Navbar.css";
import logo from "../assets/logo-with-name.jpeg";

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
                <img src={logo} alt="MML Corporation"></img>
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

