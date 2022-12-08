import "./VisionMission.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandHoldingDollar, faClipboardCheck, faHandsPraying } from "@fortawesome/free-solid-svg-icons";

function VisionMission() {
  return (
    <div className="vision">
      <h1>Vision</h1>
      <p>
        MML Corporation was founded with the commitment to offer an
        ever-improving standard of custom packaging excellence. To accomplish this goal, we have
        followed three guiding standards.
      </p>
      <div className="goals">
        <div className="goals-card">
          <h3>Value in Addition to Price</h3>
          <FontAwesomeIcon icon={faHandHoldingDollar} className="vision-icons" />
          <p>
            Offer a great product at great price. Our goal is to consistently
            offer the highest packaging at the lowest prices in the industries.
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
  );
}

export default VisionMission;
