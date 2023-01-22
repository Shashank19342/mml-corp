import "./home.css";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import svg1 from "../assets/blob.svg";
import svg2 from "../assets/blob1.svg";
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
  faBars,
  faArrowRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import hero_vid from "../assets/hero-video.mp4";
import logo_with_name from "../assets/logo-with-name.png";
import logo_without_name from "../assets/logo-without-name.png";

const SERVICE_ID = "service_d9pdw89";
const TEMPLATE_ID = "template_4zlnkvl";
const PUBLIC_KEY = "user_2zDol7bSrAHjTXt85E49r";

function Home() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alert("Success", result.text);
      },
      (error) => {
        alert("Failed", error.text);
      }
    );
  };
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

  function handleProductSroll() {
    document.getElementById("products").scrollIntoView();
  }

  function ContactUsScroll() {
    document.getElementById("contact-form").scrollIntoView();
  }

  const openSidebar = () => {
    document.getElementById("sidebar").style.left = "0%";
    document.getElementById("overlay").style.display = "block";
  };
  const closeSidebar = () => {
    document.getElementById("sidebar").style.left = "-100%";
    document.getElementById("overlay").style.display = "none";
  };

  window.addEventListener("scroll", () => {
    var scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;
    if (scrollTop > 200) {
      document.getElementById("navbar").style.backgroundColor = "#fff3dd";
      document.getElementById("navbar").style.boxShadow = "2px 2px 6px #dbd4c5";
    } else {
      document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0,0)";
      document.getElementById("navbar").style.boxShadow = "none";
    }
  });

  return (
    <div className="home">
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
              <li onClick={handleProductSroll}>Products</li>
              <li onClick={ContactUsScroll}>Contact Us</li>
            </ul>
          </div>
          <div className="nav-btn">
            <button>
              Explore{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="arrow-icon"
              />
            </button>
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
            <button>
              Explore{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                size="lg"
                className="arrow-icon"
              />
            </button>
          </div>
        </div>
        <div className="bg-overlay" id="overlay" onClick={closeSidebar}></div>
      </div>
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
        <div className="hero-vid">
          <video loop autoPlay muted>
            <source src={hero_vid} type="video/mp4" />
          </video>
        </div>
      </div>
      <div className="svg1">
        <img src={svg2} alt="" />
      </div>
      <div className="svg2">
        <img src={svg1} alt="" />
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
      <div className="products" id="products">
        <h1>Products</h1>
        <div className="cards">
          <div className="card">
            <img src={boppTape} alt="Bopp Self Adhesive Tape" />
            <h3>Bopp Self Adhesive Tape</h3>
            <p>
              Biaxially Oriented Polypropylene (BOPP) carton sealing tape with
              water based acrylic adhesive. It has excellent adhesive, superior
              impact resistance, and excellent shelflife and UV resistance.
            </p>
          </div>
          <div className="card">
            <img src={maskingTape} alt="Masking Tape" />
            <h3>Masking Tape</h3>
            <p>
              Masking Tapes comes with different grades like Paint grade,
              Furniture grade, Automobile grade and High temprature resistance
              grade.
            </p>
          </div>
          <div className="card">
            <img src={printedboppTape} alt="Printed Bopp Tape" />
            <h3>Printed Bopp Tape</h3>
            <p>
              We are supplying printed bopp tapes i.e. multi color printing. The
              commonly used adhesive packing tapes that are used in sealing
              medium to heavy-duty cartons.
            </p>
          </div>
          <div className="card">
            <img src={doubleSideTissueTape} alt="Double Side Tissue Tape" />
            <h3>Double Side Tissue Tape</h3>
            <p>
              It is hotmelt coated on thermal polymeric which gives efficient
              nad quick bonding with strong adhesive, easy tear property that
              makes it convenient to use for any general applications.
            </p>
          </div>
          <div className="card">
            <img src={doubleSidedFoamTape} alt="Double Side Foam Tape" />
            <h3>Double Side Foam Tape</h3>
            <p>
              Its for bonding, sealing and fixing different types of goods. They
              are made of rubber-based highly versatile materials
            </p>
          </div>
          <div className="card">
            <img
              src={doubleSidePolyesterTape}
              alt="Double Side Polyester Tape"
            />
            <h3>Double Side Polyester Tape</h3>
            <p>
              Its a double-sided adhesive tape consisting of transparent
              polyester film and Acrylic adhesive on both sides. The adhesive
              system is especially resistance to plasticizer and high
              tempratures.
            </p>
          </div>
          <div className="card">
            <img src={electricInsulationTape} alt="Electric Insulation Tape" />
            <h3>Electric Insulation Tape</h3>
            <p>
              We make the materials like paper, cloth, plastic film, foam and
              foils with bonding agents such as rubber, acrylic and silicon as
              per temprature or electrical insulation required.
            </p>
          </div>
          <div className="card">
            <img src={ductTape} alt="Duct Tape" />
            <h3>Duct Tape</h3>
            <p>
              Duct tape is a cloth or scrim backed pressure sensitive tapes
              often laminated with polyethylene. There are a variety of
              constructions of these tapes depending upon cloth or scrim
              construction and adhesive.
            </p>
          </div>
          <div className="card">
            <img src={floorMarkingTape} alt="Duct Tape" />
            <h3>Floor Marking Tape</h3>
            <p>
              Floor Marking Tapes and aisle marking tapes are widely used in
              aisle marking, marking of hazardous area, cautionary arking or
              identification of specific areas, floor and exit marking.
              Available in all Colours.
            </p>
          </div>
          <div className="card">
            <img src={kraftPaperTape} alt="Duct Tape" />
            <h3>Kraft Paper Tapes</h3>
            <p>
              Kraft paper adhesive tape consists of tape of Kraft paper and a
              sticky surface on one or both sides. The tape is applied by light
              and has numerous uses, commercially or industrially.
            </p>
          </div>
          <div className="card">
            <img src={aluminimumFoilTape} alt="Duct Tape" />
            <h3>Aluminimum Foil Tapes</h3>
            <p>
              Aluminimum Foil Tape is designed to cater to all key application
              areas where high-temprature resistance and electrical or thermal
              conductivity are required.
            </p>
          </div>
          <div className="card">
            <img src={crosslinkGasketFoamTape} alt="Duct Tape" />
            <h3>Crosslink Gasket Foam Tape</h3>
            <p>
              Crosslink foam tapes are basically single side adhesive foam,
              precisely cut in accurate width and available in long length.
              Rubber concept is engaged in manufacturing and supply of different
              sizes of foam tapes.
            </p>
          </div>
          <div className="card">
            <img src={hdpeAdhesiveTape} alt="Duct Tape" />
            <h3>HDPE Adhesive Tapes</h3>
            <p>
              A self adhesive which has been specially made for joining and
              sealing of bags with HDPE base. The tape has high adhesions and
              tensile which help in keeping joints well sealed and required for
              permanent applications mainly in preparing FIBC bag industry.
            </p>
          </div>
          <div className="card">
            <img src={dsFoamTape} alt="Duct Tape" />
            <h3>D S Foam Tapes</h3>
            <p>
              Multipurpose Double/Both Sided White Foam Tape made from supreme
              quality material, it is duarble nature. The self adhesive
              polyethylene foam tape is extremely strong and is budget friendly
              as well.
            </p>
          </div>
          <div className="card">
            <img src={stationaryTape} alt="Duct Tape" />
            <h3>Stationary Tapes</h3>
            <p>
              Stationary Tapes is used in general purposes and it can be found
              in most offices anf homes. The stationary tape cannot be reloaded,
              and it usually comes with a disposable dispenser or a permanent
              one taht can be reloaded.
            </p>
          </div>
          <div className="card">
            <img src={specialityAdhesiveTapes} alt="Duct Tape" />
            <h3>Speciality Adhesive Tapes</h3>
            <p>
              We are a prominent manufacturing and suppliers of wide range of
              Speciality self-adhesive tapes, we manufacture custom types of
              Adhesive Tapes per Customer requirement.
            </p>
          </div>
        </div>
      </div>
      <div className="aboutUsNForm">
        <div className="aboutusAndForm" id="contact-form">
          <div className="aboutus">
            <h2>About Us</h2>
            <p>
              A Noted Manufacturer, Exporter and Supplier, we deal in a wide
              array of Self Adhesive Tapes, Packing Tapes, Clear Tapes, which
              are manufactured in our in-house automatic production setup. The
              production process is conducted with extreme vigilance and focus
              towards quality which includes selection of the potential vendor
              for the supply of raw materials and the production process itself.
              Supervised by our industry experts, these process are carried off
              flawlessly reducing the human errors to bare minimum. The products
              we are offer are known for their excellent finishing, adhesiveness
              and appropriate thichness aling with exceptional packaging.
            </p>
          </div>
            <div className="contact-form">
              <h2>Connect with Us</h2>
              <form ref={form} onSubmit={handleSubmit}>
                <label>Name </label>
                <input type="text" placeholder="Name" name="user_name" />
                <label>Email</label>
                <input type="email" placeholder="Email" name="user_email" />
                <label>Message</label>
                <textarea
                  rows="4"
                  placeholder="Enter your message"
                  name="message"
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
      </div>
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
    </div>
  );
}

export default Home;
