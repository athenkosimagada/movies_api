import { useEffect, useState } from "react";
import tmdbApi, { category, tvType } from "../../api/tmdbApi";
import NewDocButton from "../../components/NewDocButton";
import CustomContainer from "../CustomContainer";
import Genres from "./Genres";
import NoPage from "../../pages/NoPage";
interface Show {
  id: number;
  name: string;
  vote_average: number;
  first_air_date: string;
  poster_path: string;
}

function Shows() {
  const [popular, setPopular] = useState<Show[]>([]);
  const [onTheAir, setOnTheAir] = useState<Show[]>([]);
  const [top_rated, setTopRated] = useState<Show[]>([]);

  useEffect(() => {
    const getPopular = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getTvList(tvType.popular, {
          params,
        });
        setPopular(response.results);
      } catch {
        return <NoPage />;
      }
    };
    const getOnTheAir = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getTvList(tvType.on_the_air, {
          params,
        });
        setOnTheAir(response.results);
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
        const response = await tmdbApi.getTvList(tvType.top_rated, {
          params,
        });
        setTopRated(response.results);
      } catch {
        return <NoPage />;
      }
    };

    getPopular();
    getOnTheAir();
    getTopRated();
  }, []);
  return (
    <div className="movies container">
      <NewDocButton className="btn-primary" buttonName="TV Shows" />
      <Genres id={1} category={category.tv} />
      <CustomContainer data={popular} heading='Popular' type="t" id={4}/>
      <CustomContainer data={onTheAir} heading='On The Air' type="t" id={5}/>
      <CustomContainer data={top_rated} heading='Top Rated' type="t" id={6}/>
    </div>
  );
}

export default Shows;
