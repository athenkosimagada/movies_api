import { FaPlay } from "react-icons/fa6";
import {
  HiOutlinePlus,
  HiOutlineThumbUp,
  HiOutlineVolumeUp,
} from "react-icons/hi";
import NewDocButton from "./NewDocButton";
import apiConfig from "../api/apiConfig";
import { useEffect, useRef, useState } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "react-loading-skeleton";

interface MovieProps {
  overview: string;
  backdrop_path: string;
  title: string;
}

function Movie({ title, overview, backdrop_path }: MovieProps) {
  const [imageSrc, setImageSrc] = useState(backdrop_path);

  useEffect(() => {
    setImageSrc(apiConfig.originalImage(backdrop_path))
  }, [backdrop_path])
  
const image = <LazyLoadImage
src={imageSrc}
alt={`${title} Poster`}
effect="blur"
/>
  return (
    <div className="movie">
      {image}
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
