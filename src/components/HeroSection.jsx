import "./HeroSection.css";
import React, {useState} from "react";
import hero_vid from "../assets/hero-video.mp4";

function HeroSection(){

    const [fontSize1, setFontSize1] = useState(60);
    const [fontSize2, setFontSize2] = useState(80);

    window.addEventListener('resize', ()=>{
        if(window.innerWidth <= 700){
            setFontSize1(45);
            setFontSize2(65);
        }
        else if(window.innerWidth <= 1000){
            setFontSize1(55);
            setFontSize2(75);
        }
        else{
            setFontSize1(60);
            setFontSize2(80);
        }
    })

    return(
        <div className="hero">
            <div className="hero-text">
                <p>MANUFACTURER <span style={{fontSize: fontSize1 + "px",fontWeight: 600}}>EXPORTER &#38;</span> <span style={{fontSize: fontSize2 + "px", fontWeight: 300}}>SUPPLIER</span></p>
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