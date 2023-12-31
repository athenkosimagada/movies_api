import Pricing from "../containers/Home/Pricing";
import PlansDeatails from "../containers/MoviesShows/Subscriptions/PlansDeatails";
import { ToggleProvider } from "../utils/ToggleProvider ";

function Subscriptions() {
  return (
    <ToggleProvider>
      <div className="body-container padding_top">
        <div className="container">
          <Pricing />
          <PlansDeatails />
        </div>
      </div>
    </ToggleProvider>
  );
}

export default Subscriptions;
