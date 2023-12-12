import Header from "../containers/Home/Header";
import Explore from "../containers/Home/Explore";
import Devices from "../containers/Home/Devices";
import FAQ from "../containers/Home/FAQ";
import Pricing from "../containers/Home/Pricing";

function Home() {
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
