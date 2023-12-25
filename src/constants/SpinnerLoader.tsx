import { useEffect } from "react";
import { images } from ".";

function SpinnerLoader() {

  useEffect(() => {
    setTimeout(() => {

    }, 3000)
  }, []);
  
  return (
    <div className="loader body-container padding_top">
      <img width={100} src={images.desktop} alt="Stream Vibe Logo" />
      <img width={120} src={images.spinner} alt="Loadig Spinner" />
    </div>
  )
}

export default SpinnerLoader