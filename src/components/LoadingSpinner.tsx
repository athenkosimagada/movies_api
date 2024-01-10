import ClipLoader from "react-spinners/ClipLoader";
import { CSSProperties } from "react";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  color: "green",
};

function LoadingSpinner() {
  return (
    <div className="spinner">
      <ClipLoader
        loading={true}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingSpinner;
