import { Link } from "react-router-dom";
import { images } from "../constants";

function NoPage() {
  return (
    <div className="no_page">
      <h1>Something Went Wrong</h1>
      <p>We apologize for the inconvenience. Please try again later.</p>
      <img
        src={images.error}
        alt="Error Illustration"
        style={{ width: "300px", marginTop: "20px" }}
      />
      <br />
      <span>Go back <Link to="/">Home</Link></span>
    </div>
  );
}

export default NoPage;
