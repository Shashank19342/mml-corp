import React from "react";
import hero_vid from "../assets/hero-video.mp4";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <div className="aboutus">
      <div className="mission">
        <h2>Mission</h2>
        <p>
          Trus, Integrity, Commitment and Value are the key elements that drive
          the business dealings with our customers.
        </p>
      </div>
      <div className="aboutusInfo">
        <p>
          We are a Noted Manufacturer, Exporter and Supplier, we deal in a wide array of
          Self Adhesive Tapes, Packing Tapes, Clear Tapes, which are
          manufactured in our in-house automatic production setup. The production
          process is conducted with extreme vigilance and focus towards quality
          which includes selection of the potential vendor for the supply of raw
          material and the production process itself. Supervised by our industry
          experts, these processes are carried off flawessly reducing the human
          errors to a bare minimum. The products we offer are known for their
          excellent finishing, adhesiveness and appropriate thickness alongwith
          exceptional packaging. We offer quality range of ahesive tapes with
          environment friendly characteristcs that offer high binding capacity.
          These Self Adhesive Tapes are easily removable and pasted manually.
          Our tapes are widely applicable in various industries for packaging
          purposes and also for domestic packaging and sealing.
        </p>
        <div className="hero-vid">
          <video loop autoPlay muted>
            <source src={hero_vid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
