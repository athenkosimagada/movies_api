import { FaPlay, FaPlus } from "react-icons/fa6";
import { HiOutlinePlus, HiOutlineThumbUp, HiOutlineVolumeUp } from "react-icons/hi";
import { API_KEY, BASE_URL } from "../constants/api";
import { useFetch } from "../hooks/useFetch";
import NewDocButton from "./NewDocButton";

interface MovieProps {
  genre_ids: number[];
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}

interface GenreItem {
  id: number;
  name: string;
}

function Movie({
  title,
  overview,
  poster_path,
  vote_average,
  release_date,
  genre_ids,
}: MovieProps) {
  const genres = useFetch<GenreItem[]>(
    `${BASE_URL}/genre/tv/list?api_key=${API_KEY}`,
    []
  );

  return (
    <div className="movie">
      <img
        src={`https://image.tmdb.org/t/p/original${poster_path}?api_key=${API_KEY}`}
        alt={`${title} Poster`}
      />
      <div className="movie_content">
        <h1>{title}</h1>
        <p className="overview">{overview}</p>
        <div className="movie-other">
          <NewDocButton
            className="btn-primary"
            buttonName="Play Now"
            buttonIcon={<FaPlay />}
          />

          <NewDocButton
            className="btn-dark"
            buttonIcon={<HiOutlinePlus />}
          />
          <NewDocButton
            className="btn-dark"
            buttonIcon={<HiOutlineThumbUp />}
          />
          <NewDocButton
            className="btn-dark"
            buttonIcon={<HiOutlineVolumeUp />}
          />
        </div>
      </div>
    </div>
  );
}

export default Movie;
