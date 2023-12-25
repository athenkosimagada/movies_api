import FAQ from "../containers/Home/FAQ";
import Contact from "../containers/Support/Contact";

function Support() {
  return (
    <div className="body-container padding_top">
      <div className="container">
        <Contact />
        <FAQ />
      </div>
    </div>
  );
}

export default Support;
