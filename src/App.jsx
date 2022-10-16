import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUsAndForm from "./components/AboutUsAndForm";
import bgImg from "./assets/bg-img.png";

function App() {
  
  window.onscroll = function() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
      document.querySelector('.bg-svg').style.bottom = 0 + "px";
    }
    if ((window.innerHeight + window.pageYOffset) <= document.body.offsetHeight - 100) {
      document.querySelector('.bg-svg').style.bottom = -100 + "px";
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="fadeEffect"></div>
      <div className="bg-full">
        <img src={bgImg}  alt="" className="bg-svg"/>
      </div>
      <HeroSection />
      <VisionMission />
      <Products />
      <div className="aboutUsNForm">
        <AboutUsAndForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
