import { Link } from "react-router-dom";

function NoPage() {
  return (
    <div className="no_page">
      <h1>Something Went Wrong</h1>
      <p>We apologize for the inconvenience. Please try again later.</p>
      <img
        src="https://example.com/error-image.png" // Replace with your error image URL
        alt="Error Illustration"
        style={{ width: "300px", marginTop: "20px" }}
      />
      <br/>
      <Link to="/">Home</Link>
    </div>
  );
}

export default NoPage;
