import { HiStar } from "react-icons/hi";
import { Link } from "react-router-dom";
import apiConfig from "../api/apiConfig";

interface CardPorps {
  movie: any;
}

function MovieCard({ movie }: CardPorps) {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="movie_card">
      <Link
        to={`/${movie.name ? "tv" : "movie"}/${movie.id}`}
        onClick={handleClick}
      >
        <img
          src={apiConfig.w500Image(movie.poster_path)}
          alt={movie.title}
        />
        <div className="movie_card-content">
          <h4>
            {movie.title}
            {movie.name}
          </h4>
          <div className="min-text">
            <p className="rate">
              <HiStar />
              <span>{movie.vote_average.toFixed(2)}</span>
            </p>
            <p className="date">
              {movie.release_date}
              {movie.first_air_date}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
