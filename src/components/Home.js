import "./home.css";
import React, { useState } from "react";
import boppTape from "../assets/bopp-self-adhesive-tapes.png";
import printedboppTape from "../assets/printed-bopp-tape.png";
import maskingTape from "../assets/masking-tape.png";
import doubleSideTissueTape from "../assets/double-side-tissue-tape.png";
import doubleSidedFoamTape from "../assets/double-side-foam-tape.png";
import doubleSidePolyesterTape from "../assets/double-side-polyester-tape.png";
import electricInsulationTape from "../assets/electrical-insulation-tape.png";
import ductTape from "../assets/duct-tape.png";
import floorMarkingTape from "../assets/floor-marking-tape.png";
import kraftPaperTape from "../assets/kraft-paper-tape.png";
import aluminimumFoilTape from "../assets/aluminimum-foil-tape.png";
import crosslinkGasketFoamTape from "../assets/crosslink-gasket-foam-tape.png";
import hdpeAdhesiveTape from "../assets/hdpe-adhesive-tape.png";
import dsFoamTape from "../assets/ds-foam-tape.png";
import stationaryTape from "../assets/stationary-tape.png";
import specialityAdhesiveTapes from "../assets/speciality-adhesive-tape.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandHoldingDollar,
  faClipboardCheck,
  faHandsPraying,
} from "@fortawesome/free-solid-svg-icons";

export const SERVICE_ID = "service_d9pdw89";
export const TEMPLATE_ID = "template_4zlnkvl";
export const PUBLIC_KEY = "user_2zDol7bSrAHjTXt85E49r";

function Home() {
  const [fontSize1, setFontSize1] = useState(60);
  const [fontSize2, setFontSize2] = useState(80);

  window.addEventListener("resize", () => {
    if(window.innerWidth <= 400){
      setFontSize1(38);
      setFontSize2(55);
    }
    else if (window.innerWidth <= 700) {
      setFontSize1(45);
      setFontSize2(65);
    } else if (window.innerWidth <= 1000) {
      setFontSize1(55);
      setFontSize2(75);
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
            <h3>A Selection that is Second to None</h3>
            <FontAwesomeIcon icon={faClipboardCheck} className="vision-icons" />
            <p>
              Offer an extensive array of sizes, lenghts, color and printing
              options with an equally impressive pricing.
            </p>
          </div>
          <div className="goals-card">
            <h3>Genuine Respect for the Customer</h3>
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
  );
}

export default Home;
