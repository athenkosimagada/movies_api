import NewDocButton from "../../components/NewDocButton";
import { API_KEY, BASE_URL } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import CustomContainer from "../CustomContainer";
import Genres from "./Genres";
interface MovieProps {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string
}

function Movies() {
  const { data: trending} = useFetch<MovieProps[]>(
    BASE_URL +
      "/trending/movie/day?language=en-US&api_key=" +
      API_KEY,
    []
  );
  const { data: upcoming} = useFetch<MovieProps[]>(
    BASE_URL +
      "/movie/upcoming?language=en-US&page=1&api_key=" +
      API_KEY,
    []
  );
  const { data: top_rated} = useFetch<MovieProps[]>(
    BASE_URL +
      "/movie/top_rated?language=en-US&page=1&api_key=" +
      API_KEY,
    []
  );

  return (
    <div className="movies container">
      <NewDocButton className="btn-primary" buttonName="Movies" />
      <Genres />
      <CustomContainer data={trending} heading='Trending Now' id={1}/>
      <CustomContainer data={upcoming} heading='Upcoming'id={2}/>
      <CustomContainer data={top_rated} heading='Top Rated'id={3}/>
    </div>
  );
}

export default Movies;
