import { FaPlay } from "react-icons/fa6";
import {
  HiOutlinePlus,
  HiOutlineThumbUp,
  HiOutlineVolumeUp,
} from "react-icons/hi";
import { API_KEY } from "../constants/api";
import NewDocButton from "./NewDocButton";

interface MovieProps {
  overview: string;
  poster_path: string;
  title: string;
}

function Movie({ title, overview, poster_path }: MovieProps) {
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

          <NewDocButton className="btn-dark" buttonIcon={<HiOutlinePlus />} />
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
