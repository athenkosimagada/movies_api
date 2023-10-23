import Slider from "../components/Slider";
import ProductionHouse from "../components/ProductionHouse";
import Movies from "../containers/Movies";

function Home() {
  return (
    <div>
      <Slider />
      <ProductionHouse />
      <Movies />
    </div>
  );
}

export default Home;
