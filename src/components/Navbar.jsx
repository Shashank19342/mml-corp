import "./Navbar.css";
import logo_with_name from "../assets/logo-with-name.png";
import logo_without_name from "../assets/logo-without-name.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons'

function Navbar(){

    function handleProductSroll() {
        document.getElementById('products').scrollIntoView();
    }

    function ContactUsScroll() {
        document.getElementById('contact-form').scrollIntoView();
    }

    const openSidebar = ()=>{
        document.getElementById('sidebar').style.left = "0%";
        document.getElementById('overlay').style.display = "block";
    }
    const closeSidebar = ()=>{
        document.getElementById('sidebar').style.left = "-100%";
        document.getElementById('overlay').style.display = "none";
    }

    window.addEventListener('scroll',()=>{
        var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop
        if(scrollTop>200){
            document.getElementById('navbar').style.backgroundColor = "#fff3dd";
            document.getElementById('navbar').style.boxShadow = "2px 2px 6px #dbd4c5";
        }else{
            document.getElementById('navbar').style.backgroundColor = "rgba(0,0,0,0)";
            document.getElementById('navbar').style.boxShadow = "none";
        }
    })

    return(
        <div className="nav" id="navbar">
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
                <div className="nav-btn">
                    <button>Explore <FontAwesomeIcon icon={faArrowRight} size="lg" className="arrow-icon" /></button>
                </div>
                <div className="hambar" onClick={openSidebar}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </div>
            </div>
            <div className="sidebar" id="sidebar">
                <div className="closebar" onClick={closeSidebar}>
                    <FontAwesomeIcon icon={faXmark} size="xl" />
                </div>
                <div className="sidebar-content">
                    <ul>
                        <li onClick={handleProductSroll}>Products</li>
                        <li onClick={ContactUsScroll}>Contact Us</li>
                    </ul>
                    <button>Explore <FontAwesomeIcon icon={faArrowRight} size="lg" className="arrow-icon" /></button>
                </div>
            </div>
            <div className="bg-overlay" id="overlay" onClick={closeSidebar}></div>
        </div>
    )
}


export default Navbar;

