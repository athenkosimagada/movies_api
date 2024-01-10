import { FaPlay } from "react-icons/fa6";
import {
  HiOutlinePlus,
  HiOutlineThumbUp,
  HiOutlineVolumeUp,
} from "react-icons/hi";
import NewDocButton from "./NewDocButton";
import apiConfig from "../api/apiConfig";

interface MovieProps {
  overview: string;
  backdrop_path: string;
  title: string;
}

function Movie({ title, overview, backdrop_path }: MovieProps) {
  return (
    <div className="movie">
      <img src={apiConfig.originalImage(backdrop_path)} alt={`${title} Poster`} loading="lazy" />
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
