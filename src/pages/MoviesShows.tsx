import { useEffect } from "react";
import Slide from "../containers/MoviesShows/Slide"
import Movies from "../containers/MoviesShows/Movies";
import Shows from "../containers/MoviesShows/Shows";

function MoviesShows() {
  useEffect(() => {
    // Scroll to the top of the page when the Layout component is rendered
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <div className="body-container padding_top">
      <Slide />
      <Movies />
      <Shows />
    </div>
  )
}

export default MoviesShows