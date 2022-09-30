import React from "react";
import "./Products.css";
import boppTape from "../assets/bopp-self-adhesive-tapes.png";
import printedboppTape from "../assets/printed-bopp-tape.png";
import maskingTape from "../assets/masking-tape.png";
import doubleSideTissueTape from "../assets/double-side-tissue-tape.png";
import doubleSidedFoamTape from "../assets/double-side-foam-tape.png";
import doubleSidePolyesterTape from "../assets/double-side-polyester-tape.png";
import electricInsulationTape from "../assets/electrical-insulation-tape.png";
import ductTape from "../assets/duct-tape.png";

function Products() {
  return (
    <div className="products">
      <h1>Products</h1>
      <div className="cards">
        <div className="card">
          <img src={boppTape} alt="Bopp Self Adhesive Tape" />
          <h3>Bopp Self Adhesive Tape</h3>
          <p>
            Biaxially Oriented Polypropylene (BOPP) carton sealing tape with
            water based acrylic adhesive. It has excellent adhesive,
            superior impact resistance, and excellent shelflife and UV
            resistance.
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
            We are supplying printed bopp tapes i.e. multi color printing.
            The commonly used adhesive packing tapes that are used in
            sealing medium to heavy-duty cartons.
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
            Its for bonding, sealing and fixing different types of goods.
            They are made of rubber-based highly versatile materials
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
          <img
            src={electricInsulationTape}
            alt="Electric Insulation Tape"
          />
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
      </div>
    </div>
  );
}

export default Products;
