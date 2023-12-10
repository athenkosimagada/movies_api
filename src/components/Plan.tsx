import Button from "./NewDocButton";

function Plan() {
  return (
    <div className="plan">
      <div className="plan-content">
        <h3>Basic Plan</h3>
        <p>Enjoy an extensive library of movies and shows, featuring a ran</p>
      </div>
      <p>
        <span>$9.99</span>/month
      </p>
      <div className="plan-btns">
        <Button className="btn-dark" buttonName="Start Free Trial" />
        <Button className="btn-primary" buttonName="Choose Plan" />
      </div>
    </div>
  );
}

export default Plan;
