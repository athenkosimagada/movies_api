import Genres from "../containers/MoviesShows/Genres"
import Slide from "../containers/MoviesShows/Slide"

function MoviesShows() {
  return (
    <div className="body-container padding_top">
      <Slide />
      <Genres />
      <Genres />
    </div>
  )
}

export default MoviesShows