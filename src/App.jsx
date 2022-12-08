import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import VisionMission from "./components/VisionMission";
import Products from "./components/Products";
import Footer from "./components/Footer";
import AboutUsAndForm from "./components/AboutUsAndForm";
import bgImg from "./assets/bg-img.png";
import svg1 from "./assets/blob.svg";
import svg2 from "./assets/blob1.svg";

function App() {

  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <div className="svg1">
        <img src={svg2} alt="" />
      </div>
      <div className="svg2">
        <img src={svg1} alt="" />
      </div>
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
