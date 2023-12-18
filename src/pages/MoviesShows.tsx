import { useEffect } from "react";
import Genres from "../containers/MoviesShows/Genres"
import Slide from "../containers/MoviesShows/Slide"

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
      <Genres />
    </div>
  )
}

export default MoviesShows