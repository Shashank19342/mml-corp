import "./HeroSection.css";
import hero_vid from "../assets/hero-video.mp4";

function HeroSection(){


    return(
        <div className="hero">
            <div className="hero-text">
                <p>MANUFACTURER <span style={{fontSize: 60 + "px",fontWeight: 600}}>EXPORTER &#38;</span> <span style={{fontSize: 80 + "px", fontWeight: 300}}>SUPPLIER</span></p>
            </div>
            <div className="hero-vid">
                <video loop autoPlay muted width="400" height="400">
                    <source src={hero_vid} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )

}

export default HeroSection;