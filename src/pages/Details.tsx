import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
import { Genre } from "../api/apiTypes";
import Reviews from "../components/Reviews";
import Content from "../containers/Details/Content";
import CustomContainer from "../containers/CustomContainer";
import NoPage from "./NoPage";

export interface Language {
  name: string;
}

interface Item {
  id: number;
  title: string;
  name: string;
  overview: string;
  backdrop_path: string;
  poster_path: string;
  genres: Genre[];
  vote_average: number;
  first_air_date: string;
  release_date: string;
  spoken_languages: Language[];
  runtime: number;
}

function Details() {
  const { category = "", id } = useParams();
  const [item, setItem] = useState<Item>(Object);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [languages, setLanguages] = useState<Genre[]>([]);
  const [similar, setSimilar] = useState<Item[]>([]);

  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await tmdbApi.details(category, id, { params: {} });
        setGenres(response.genres);
        setItem(response);
        setLanguages(response.spoken_languages);
      } catch {
        console.log("error");
      }
    };

    const getSimilar = async () => {
      try {
        const response = await tmdbApi.similar(category, id);
        setSimilar(response.results);
      } catch {
        return <NoPage />;
      }
    };

    getDetails();
    getSimilar();
  }, [category, id]);

  return (
    <div className="body-container padding_top">
      <div className="container">
        {item && (
          <>
            <Movie
              key={item.id}
              title={item.name ? item.name : item.title}
              overview={item.overview}
              backdrop_path={
                item.backdrop_path ? item.backdrop_path : item.poster_path
              }
            />
            <Content
              description={item.overview}
              genres={genres}
              year={
                item.first_air_date ? item.first_air_date : item.release_date
              }
              rate={item.vote_average}
              languages={languages}
              time={item.runtime}
            />
          </>
        )}

        <Reviews />
        <CustomContainer data={similar} heading="Similar" id={7} />
      </div>
    </div>
  );
}

export default Details;
