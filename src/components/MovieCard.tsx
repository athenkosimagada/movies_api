import { useLayoutEffect, useState } from "react";
import { API_KEY } from "../constants/api";
import { HiStar } from "react-icons/hi";

interface MovieProps {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
}

interface CardPorps {
  movie: MovieProps;
}

function MovieCard({ movie }: CardPorps) {
  const [image, setImage] = useState("");
  useLayoutEffect(() => {
    setImage(
      `https://image.tmdb.org/t/p/original${movie.poster_path}?api_key=${API_KEY}`
    );
  }, []);

  return (
    <div className="movie_card">
      <img src={image} alt={movie.title} loading="lazy" />
      <div className="movie_card-content">
        <h4>{movie.title}</h4>
        <div className="min-text">
          <p className="rate"><HiStar /><span>{movie.vote_average.toFixed(2)}</span></p>
          <p className="date">{movie.release_date}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
