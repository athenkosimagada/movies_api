import { useEffect, useState } from "react";
import tmdbApi, { category, movieType } from "../../api/tmdbApi";
import NewDocButton from "../../components/NewDocButton";
import CustomContainer from "../CustomContainer";
import Genres from "./Genres";
import NoPage from "../../pages/NoPage";
interface Movie {
  id: number;
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
}

function Movies() {
  const [popular, setPopular] = useState<Movie[]>([]);
  const [upcoming, setUpcoming] = useState<Movie[]>([]);
  const [top_rated, setTopRated] = useState<Movie[]>([]);

  useEffect(() => {
    const getPopular = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getMoviesList(movieType.popular, {
          params,
        });
        setPopular(response.results);
      } catch {
        return <NoPage />;
      }
    };
    const getUpcoming = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getMoviesList(movieType.upcoming, {
          params,
        });
        setUpcoming(response.results);
      } catch {
        return <NoPage />;
      }
    };
    const getTopRated = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getMoviesList(movieType.top_rated, {
          params,
        });
        setTopRated(response.results);
      } catch {
        return <NoPage />;
      }
    };

    getPopular();
    getUpcoming();
    getTopRated();
  }, []);
  return (
    <div className="movies container">
      <NewDocButton className="btn-primary" buttonName="Movies" />
      <Genres id={2} category={category.movie} />
      <CustomContainer data={popular} heading="Popular" id={1} />
      <CustomContainer data={upcoming} heading="Upcoming"  id={2} />
      <CustomContainer data={top_rated} heading="Top Rated"  id={3} />
    </div>
  );
}

export default Movies;
