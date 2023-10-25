import { useEffect, useState } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiOutlineFilm } from "react-icons/hi2";
import MovieItem from "../components/MovieItem";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";


function Movies() {
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getLatestVideos();
  }, []);

  interface Movie {
    backdrop_path: string;
    name: string;
    title: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    // Add other properties as needed
  }

  const getLatestVideos = () => {
    GlobalApi.getLatestVideos.then((respond) => {
      setMovieList(respond.data.results);
    });
  };

  console.log(movieList);
  return (
    <div
      className="flex flex-col gap-6 p-5 relative md:top-[-100px]"
      style={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.3) 80%, rgba(0, 0, 0, 0.6) 90%, rgba(0, 0, 0, 0.9) 100%)`,
      }}
    >
      <div className="flex items-center gap-3">
        <HiOutlineFilm />
        <h2 className="flex text-lg font-semibold">Movies</h2>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3">
      {movieList.map((item, index) => (
            <MovieItem
            key={index}
            name={item.name != null ? item.name : item.title}
            pic={IMAGE_BASE_URL + item.backdrop_path}
          />
          ))}
      </div>
    </div>
  );
}

export default Movies;
