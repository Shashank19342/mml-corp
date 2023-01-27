import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Aboutus from "./components/Aboutus";
import svg1 from "./assets/blob.svg";
import svg2 from "./assets/blob1.svg";
import logo_with_name from "./assets/logo-with-name.png";
import logo_without_name from "./assets/logo-without-name.png";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

function App() {
  
  window.addEventListener("scroll", () => {
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (scrollTop > 100) {
      document.getElementById("navbar").style.backgroundColor = "#fff3dd";
      document.getElementById("navbar").style.boxShadow = "2px 2px 6px #dbd4c5";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("navbar").style.boxShadow = "none";
    }
  });
  
  const openSidebar = () => {
    document.getElementById("sidebar").style.left = "0%";
    document.getElementById("overlay").style.display = "block";
  };
  const closeSidebar = () => {
    document.getElementById("sidebar").style.left = "-100%";
    document.getElementById("overlay").style.display = "none";
  };

  function handleProductClick() {
    closeSidebar();
  }

  function ContactUsClick() {
    closeSidebar();
  }

  function handleHomeClick() {
    closeSidebar();
  }


  
  return (
    <Router>
      <div className="app">
        <div className="nav" id="navbar">
          <div className="navbar">
            <div className="logo">
              <img
                src={
                  window.innerWidth <= 600 ? logo_without_name : logo_with_name
                }
                alt="MML Corporation"
              ></img>
            </div>
            <div className="links">
              <ul>
                <Link to="mml-corp/"><li onClick={handleHomeClick}>Home</li></Link>
                <Link to="mml-corp/products"><li onClick={handleProductClick}>Products</li></Link>
                <Link to="mml-corp/contact"><li onClick={ContactUsClick}>Contact Us</li></Link>
                <Link to="mml-corp/aboutus"><li onClick={handleHomeClick}>About Us</li></Link>
              </ul>
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
                <Link to="mml-corp/"><li onClick={handleHomeClick}>Home</li></Link>
                <Link to="mml-corp/products"><li onClick={handleProductClick}>Products</li></Link>
                <Link to="mml-corp/contact"><li onClick={ContactUsClick}>Contact Us</li></Link>
                <Link to="mml-corp/aboutus"><li onClick={handleHomeClick}>About Us</li></Link>
              </ul>
            </div>
          </div>
          <div className="bg-overlay" id="overlay" onClick={closeSidebar}></div>
        </div>
        <Routes>
          <Route exact path='mml-corp/' element={<Home />}></Route> 
          <Route exact path='mml-corp/contact' element={<Contact />}></Route>
          <Route exact path='mml-corp/aboutus' element={<Aboutus />}></Route>
        </Routes>
        <div className="footer">
          <div className="footer-card">
            <div>
              <p className="footer-lable">Reg. Off.</p>
              <p>
                303, Amber plaza 1, survey no. 51, Hissa no. 3, Near Petrol pump,
                Badlapur(East), Maharashtra
              </p>
            </div>
            <div>
              <p className="footer-lable">Works</p>
              <p>
                Saraswati nagar colony Malahiya, po-Ramma Gharwaghat road, near
                brick market, Varanasi, 2210
              </p>
            </div>
          </div>
          <div className="footer-card">
            <div>
              <p className="footer-lable">Mobile No.</p>
              <p>+91 - 7387513536</p>
            </div>
            <div>
              <p className="footer-lable">Email</p>
              <p>mmlcorporation22@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="svg1">
          <img src={svg2} alt="" />
        </div>
        <div className="svg2">
          <img src={svg1} alt="" />
        </div>
      </div>
    </Router>
  );
}

export default App;
