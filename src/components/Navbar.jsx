import logo from "../assets/logo-with-name.jpeg";
import "./Navbar.css";

function Navbar(){

    return(
        <div className="navbar">
            <div className="logo">
                <img src={logo} alt="MML Corporation"></img>
            </div>
            <div className="links">
                <ul>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Specialities</li>
                </ul>
            </div>
        </div>
    )
}


export default Navbar;

