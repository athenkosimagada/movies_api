import Header from "../containers/Header";
import Explore from "../containers/Explore";
import Devices from "../containers/Devices";
import FAQ from "../containers/FAQ";
import Pricing from "../containers/Pricing";
import Banner from "../containers/Banner";

function Home() {
  return (
    <div>
      <Header />
      <div className="body-container">
        <Explore />
        <Devices />
        <FAQ />
        <Pricing />
        <Banner />
      </div>
    </div>
  );
}

export default Home;
