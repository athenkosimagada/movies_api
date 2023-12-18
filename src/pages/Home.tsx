import Header from "../containers/Home/Header";
import Explore from "../containers/Home/Explore";
import Devices from "../containers/Home/Devices";
import FAQ from "../containers/Home/FAQ";
import Pricing from "../containers/Home/Pricing";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    // Scroll to the top of the page when the Layout component is rendered
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="body-container">
        <Explore />
        <Devices />
        <FAQ />
        <Pricing />
      </div>
    </div>
  );
}

export default Home;
