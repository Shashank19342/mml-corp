import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUsAndForm from "./components/AboutUsAndForm";

function App() {
  
  window.onscroll = function(ev) {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 100) {
      document.querySelector('.bg-svg1').style.bottom = 270 + "px";
      document.querySelector('.bg-svg2').style.bottom = 230 + "px";
    }
    if ((window.innerHeight + window.pageYOffset) <= document.body.offsetHeight - 100) {
      document.querySelector('.bg-svg1').style.bottom = 140 + "px";
      document.querySelector('.bg-svg2').style.bottom = 140 + "px";
    }
  };

  return (
    <div className="app">
      <Navbar />
      <div className="fadeEffect"></div>
      <div className="bg-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="bg-svg1" viewBox="0 0 1440 320">
          <path
            fill="#ffa812"
            fillOpacity="1"
            d="M0,160L30,176C60,192,120,224,180,213.3C240,203,300,149,360,154.7C420,160,480,224,540,245.3C600,267,660,245,720,224C780,203,840,181,900,154.7C960,128,1020,96,1080,69.3C1140,43,1200,21,1260,37.3C1320,53,1380,107,1410,133.3L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bg-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="bg-svg2" viewBox="0 0 1440 320">
          <path
            fill="#2db1fd"
            fillOpacity="1"
            d="M0,288L30,240C60,192,120,96,180,85.3C240,75,300,149,360,176C420,203,480,181,540,170.7C600,160,660,160,720,176C780,192,840,224,900,245.3C960,267,1020,277,1080,250.7C1140,224,1200,160,1260,154.7C1320,149,1380,203,1410,229.3L1440,256L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="bottom-bg"></div>
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
