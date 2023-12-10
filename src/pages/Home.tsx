import Header from "../containers/Header";
import Explore from "../containers/Explore";
import Devices from "../containers/Devices";
import FAQ from "../containers/FAQ";
import Pricing from "../containers/Pricing";

function Home() {
  return (
    <div>
      <Header />
      <Explore />
      <Devices />
      <FAQ />
      <Pricing />
    </div>
  );
}

export default Home;
