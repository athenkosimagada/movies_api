function Device() {
  return (
    <div className="device">
      <div className="device-title">
        <div className="device-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-phone-fill"
            viewBox="0 0 16 16"
          >
            <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
          </svg>
        </div>

        <h3>Smartphones</h3>
      </div>
      <p>
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app the Google Play Store or the Apple App Store
      </p>
    </div>
  );
}

export default Device;