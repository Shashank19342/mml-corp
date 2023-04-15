import "./home.css";
import React, { useState } from "react";
import printedboppTape from "../assets/printed-bopp-tape.png";
import doubleSidedFoamTape from "../assets/double-side-foam-tape.png";
import electricInsulationTape from "../assets/electrical-insulation-tape.png";
import floorMarkingTape from "../assets/floor-marking-tape.png";
import kraftPaperTape from "../assets/kraft-paper-tape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faClipboardCheck,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";

// Importing Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import swiper required modules
import { Pagination, Navigation } from "swiper";

import { productsDetails } from "./productsdetails"

export const SERVICE_ID = "service_d9pdw89";
export const TEMPLATE_ID = "template_4zlnkvl";
export const PUBLIC_KEY = "user_2zDol7bSrAHjTXt85E49r";

function Home() {
  const [fontSize1, setFontSize1] = useState(60);
  const [fontSize2, setFontSize2] = useState(80);
  const [spaceBwtslides, setSpaceBwtSlides] = useState(50);
  const [slidesPerView, setSlidesPerView] = useState(3);

  window.addEventListener("resize", () => {
    if(window.innerWidth <= 400){
      setFontSize1(38);
      setFontSize2(55);
    } else if (window.innerWidth <= 500) {
      setSlidesPerView(1);
    }
    else if (window.innerWidth <= 700) {
      setFontSize1(45);
      setFontSize2(65);
      setSlidesPerView(2);
    } else if (window.innerWidth <= 800){
      setSpaceBwtSlides(20);
      setSlidesPerView(2);
    } else if (window.innerWidth <= 1000) {
      setFontSize1(55);
      setFontSize2(75);
      setSpaceBwtSlides(50);
      setSlidesPerView(3);
    } else {
      setFontSize1(60);
      setFontSize2(80);
    }
  });


  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <p>
            MANUFACTURER{" "}
            <span style={{ fontSize: fontSize1 + "px", fontWeight: 600 }}>
              EXPORTER &#38;
            </span>{" "}
            <span style={{ fontSize: fontSize2 + "px", fontWeight: 300 }}>
              SUPPLIER
            </span>
          </p>
          <p>
            ...of Bopp Tapes, Printed Tapes, Colour Tapes, Brown Tapes, Masking
            Tapes, Tissue Tapes, Foam Tapes, Surface Protection Tapes and all
            other kindes of tapes.
          </p>
        </div>
        <div className="heroImages">
          <div className="heroImageColumn">
            <img src={printedboppTape} alt="Printed bopp tape"/>
            <img src={doubleSidedFoamTape} alt="Double sided foam tape"/>
            <img src={electricInsulationTape} alt="Electric Insulation Tape"/>
          </div>
          <div className="heroImageColumn">
            <img src={floorMarkingTape} alt="Floor marking Tape"/>
            <img src={kraftPaperTape} alt="Kraft Paper Tape"/>
          </div>
        </div>
      </div>
      <div className="visionWrapper">
        <div className="vision">
          <h1>Vision</h1>
          <p>
            MML Corporation was founded with the commitment to offer an
            ever-improving standard of custom packaging excellence. To accomplish
            this goal, we have followed three guiding standards.
          </p>
          <div className="goals">
            <div className="goals-card">
              <h3>Value in Addition to Price</h3>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className="vision-icons"
              />
              <p>
                Offer a great product at great price. Our goal is to consistently
                offer the highest packaging at the lowest prices in the
                industries.
              </p>
            </div>
            <div className="goals-card">
              <h3>Selection Second to None</h3>
              <FontAwesomeIcon icon={faClipboardCheck} className="vision-icons" />
              <p>
                Offer an extensive array of sizes, lenghts, color and printing
                options with an equally impressive pricing.
              </p>
            </div>
            <div className="goals-card">
              <h3>Respect for the Customer</h3>
              <FontAwesomeIcon icon={faHandsPraying} className="vision-icons" />
              <p>
                Simply stated, we will treat you as we ourselves would like to be
                treated. Our passion for outstanding customer service means we are
                not staisfied until you are satisfied.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="topProds">
        <h1>Top Products</h1>
        <div className="swiperContainer">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={slidesPerView}
            spaceBetween={spaceBwtslides}
            pagination={{
              clickable: true,
            }}
            navigation
            className="mySwiper"
          >
            {
              productsDetails.map((prod,i) => {
                return <SwiperSlide key={i}>
                  <div className="swiperCard">
                    <div className='tapeImg'>
                      <img src={prod.imgLink} alt={prod.name} />
                      <h3>{prod.name}</h3>
                    </div>
                    <div className='tapeInfo'>
                      {prod.productType?<p><b>Product Type:</b> {prod.productType}</p>:""}
                      {prod.color?<p><b>Color:</b> {prod.color}</p>:""}
                      {prod.length?<p><b>Length:</b> {prod.length}</p>:""}
                      {prod.width?<p><b>Width:</b> {prod.width}</p>:""}
                      {prod.productType?<p><b>Product Type:</b> {prod.productType}</p>:""}
                    </div>
                    <button>Details</button>
                  </div>
                </SwiperSlide>
              })
            }
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Home;
