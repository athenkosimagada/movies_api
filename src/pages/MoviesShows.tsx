import { useEffect, useState } from "react";
import Slide from "../containers/MoviesShows/Slide";
import Movies from "../containers/MoviesShows/Movies";
import Shows from "../containers/MoviesShows/Shows";

function MoviesShows() {
  const [isMoviesVisible, setMoviesVisible] = useState(true);
  const [isShowsVisible, setShowsVisible] = useState(false);

  const toggleMovies = () => {
    setMoviesVisible(true);
    setShowsVisible(false);
  };

  const toggleShows = () => {
    setMoviesVisible(false);
    setShowsVisible(true);
  };

  useEffect(() => {
    // Scroll to the top of the page when the Layout component is rendered
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="body-container padding_top">
      <Slide />
      <div className="toogle_btn">
        <button
          className={`${isMoviesVisible ? "active" : ""}`}
          onClick={toggleMovies}
        >
          Movies
        </button>
        <button
          className={`${isShowsVisible ? "active" : ""}`}
          onClick={toggleShows}
        >
          Shows
        </button>
      </div>
      <div className="content-container">
        <div className={`movies-container ${isMoviesVisible ? "visible" : ""}`}>
          <Movies />
        </div>
        <div className={`shows-container ${isShowsVisible ? "visible" : ""}`}>
          <Shows />
        </div>
      </div>
    </div>
  );
}

export default MoviesShows;
