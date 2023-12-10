import { useState } from "react";
import Plan from "../components/Plan";

function Pricing() {
  const [toggle, setToggle] = useState("monthly");

  function handleToggle(plan: string) {
    setToggle(plan);
  }
  return (
    <div className="container pricing">
      <div className="pricing-container">
        <div className="pricing-content">
          <h2>Choose the plan that's right for you</h2>
          <p>
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="pricing-type">
          <button
            className={toggle === "monthly" ? "active" : ""}
            onClick={() => handleToggle("monthly")}
            type="button"
          >
            Monthly
          </button>
          <button
            className={toggle === "yearly" ? "active" : ""}
            onClick={() => handleToggle("yearly")}
            type="button"
          >
            Yearly
          </button>
        </div>
      </div>
      {toggle === "yearly" ? (
        <div className="pricing-plans">
          <Plan />
          <Plan />
        </div>
      ) : (
        <div className="pricing-plans">
          <Plan />
          <Plan />
          <Plan />
        </div>
      )}
    </div>
  );
}

export default Pricing;
