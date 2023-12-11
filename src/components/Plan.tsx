import Button from "./NewDocButton";

interface PlanProps {
  name: string,
  description: string,
  price: number,
  period:string
}

function Plan({name, description, price, period}: PlanProps) {
  return (
    <div className="plan">
      <div className="plan-content">
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
      <p>
        <span>${price}</span>/{period}
      </p>
      <div className="plan-btns">
        <Button className="btn-dark" buttonName="Start Free Trial" />
        <Button className="btn-primary" buttonName="Choose Plan" />
      </div>
    </div>
  );
}

export default Plan;
