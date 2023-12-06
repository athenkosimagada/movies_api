import Device from "../components/Device";

function Devices() {
  return (
    <div className="container devices">
      <div className="devices-content">
        <h2>We Provide you streaming experience across various devices.</h2>
        <p>
          With StreamVibe, you can enjoy your favorite movies and TV shows
          anytime, anywhere. Our platform is designed to be compatible with a
          wide range of devices, ensuring that you never miss a moment of
          entertainment.
        </p>
      </div>
      <div className="devices-types">
        <Device />
        <Device />
        <Device />
        <Device />
        <Device />
        <Device />
      </div>
    </div>
  );
}

export default Devices;
