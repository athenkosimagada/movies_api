import { useEffect, useState } from "react";
import data from "../../../constants/data";
import { useToggleContext } from "../../../utils/ToggleProvider ";

function PlansDeatails() {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [width, setWidth] = useState<number>(getWidth());
  const [plans, setPlans] = useState(data.monthly);
  const { plan } = useToggleContext();

  useEffect(() => {
    if (plan === "monthly") {
      setPlans(data.monthly);
    } else {
      setPlans(data.yearly);
    }

    console.log(plan);
  }, [plan]);

  function handgleChange(index: number) {
    setActiveIndex(index);
  }

  function getWidth(): number {
    return window.innerWidth;
  }

  window.addEventListener("resize", () => {
    setWidth(getWidth());
  });
  return (
    <div className="container plans">
      <div className="plans-container">
        <div className="plans-content">
          <h2>Compare our plans and find the right one for you</h2>
          <p>
            StreamVibe offers three different plans to fit your needs: Basic,
            Standard, and Premium. Compare the features of each plan and choose
            the one that's right for you.
          </p>
        </div>
        <div className={`pricing-table ${width <= 768 ? "mobile-table" : ""}`}>
          <div className="plans-heading">
            {width <= 768 ? null : (
              <div className="plan-heading">
                <h3>Features</h3>
              </div>
            )}

            {plans.map((plan, index) => (
              <div
                onClick={() => handgleChange(index)}
                className={`plan-heading ${width <= 768 ? "mobile" : ""} ${
                  activeIndex === index ? "active" : ""
                }`}
                key={index}
              >
                <h3>{plan.feature}</h3>
              </div>
            ))}
          </div>
          <div className="plans-rows">
            <div className="row">
              <div className="cell">
                <p>Price</p>
                {width <= 768 ? (
                  <p className="white">$ {plans[activeIndex].price}</p>
                ) : null}
              </div>
              {width <= 768 ? (
                <div className="cell">
                  <p>Free Trial</p>
                  <p className="white">{plans[activeIndex].trail}</p>
                </div>
              ) : null}
              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>$ {plan.price}</p>
                  </div>
                ))}
            </div>
            <div className="row">
              <div className="cell">
                <p>Content</p>
                {width <= 768 ? (
                  <p className="white">{plans[activeIndex].description}</p>
                ) : null}
              </div>
              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>{plan.description}</p>
                  </div>
                ))}
            </div>
            <div className="row">
              <div className="cell">
                <p>Devices</p>
                {width <= 768 ? (
                  <p className="white">{plans[activeIndex].devices}</p>
                ) : null}
              </div>
              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>{plan.devices}</p>
                  </div>
                ))}
            </div>

            {width > 768 ? (
              <div className="row">
                <div className="cell">
                  <p>Free Trail</p>
                  {width <= 768 ? (
                    <p className="white">{plans[activeIndex].trail}</p>
                  ) : null}
                </div>
                {width > 768 &&
                  plans.map((plan, index) => (
                    <div className="cell" key={index}>
                      <p>{plan.trail}</p>
                    </div>
                  ))}
              </div>
            ) : null}
            <div className="row">
              <div className="cell">
                <p>Cancel Anytime</p>
                {width <= 768 ? (
                  <p className="white">{plans[activeIndex].cancel}</p>
                ) : null}
              </div>
              {width <= 768 ? (
                <div className="cell">
                  <p>HDR</p>
                  <p className="white">{plans[activeIndex].hdr}</p>
                </div>
              ) : null}

              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>{plan.cancel}</p>
                  </div>
                ))}
            </div>

            {width > 768 ? (
              <div className="row">
                <div className="cell">
                  <p>HDR</p>
                  {width <= 768 ? (
                    <p className="white">{plans[activeIndex].hdr}</p>
                  ) : null}
                </div>
                {width > 768 &&
                  plans.map((plan, index) => (
                    <div className="cell" key={index}>
                      <p>{plan.hdr}</p>
                    </div>
                  ))}
              </div>
            ) : null}
            <div className="row">
              <div className="cell">
                <p>Dolby Atmos</p>
                {width <= 768 ? (
                  <p className="white">{plans[activeIndex].dolby}</p>
                ) : null}
              </div>
              {width <= 768 ? (
                <div className="cell">
                  <p>Ad - Free</p>
                  <p className="white">{plans[activeIndex].ad}</p>
                </div>
              ) : null}
              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>{plan.dolby}</p>
                  </div>
                ))}
            </div>
            {width > 768 ? (
              <div className="row">
                <div className="cell">
                  <p>Ad - Free</p>
                  {width <= 768 ? (
                    <p className="white">{plans[activeIndex].ad}</p>
                  ) : null}
                </div>
                {width > 768 &&
                  plans.map((plan, index) => (
                    <div className="cell" key={index}>
                      <p>{plan.ad}</p>
                    </div>
                  ))}
              </div>
            ) : null}

            <div className="row">
              <div className="cell">
                <p>Offline Viewing</p>
                {width <= 768 ? (
                  <p className="white">{plans[activeIndex].offline}</p>
                ) : null}
              </div>
              {width <= 768 ? (
                <div className="cell">
                  <p>Family Sharing</p>
                  <p className="white">{plans[activeIndex].sharing}</p>
                </div>
              ) : null}
              {width > 768 &&
                plans.map((plan, index) => (
                  <div className="cell" key={index}>
                    <p>{plan.offline}</p>
                  </div>
                ))}
            </div>
            {width > 768 ? (
              <div className="row">
                <div className="cell">
                  <p>Family Sharing</p>
                  {width <= 768 ? (
                    <p className="white">{plans[activeIndex].sharing}</p>
                  ) : null}
                </div>
                {width > 768 &&
                  plans.map((plan, index) => (
                    <div className="cell" key={index}>
                      <p>{plan.sharing}</p>
                    </div>
                  ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlansDeatails;
