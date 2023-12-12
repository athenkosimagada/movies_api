import NewDocButton from "../components/NewDocButton";

function Banner() {
  return (
    <div className="body-container">
      <div className="banner container">
        <div className="banner-content">
          <h2>Start your free trial today!</h2>
          <p>
            This is a clear and concise call to action that encourages users to
            sign up for a free trial of StreamVibe.
          </p>
        </div>
        <NewDocButton
          className="btn-primary"
          buttonName="Start a Free Trail     "
        />
      </div>
    </div>
  );
}

export default Banner;
