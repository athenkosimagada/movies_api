import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import Movie from "../../components/Movie";
import NewDocButton from "../../components/NewDocButton";
import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import { Genre } from "../../api/apiTypes";
import { Language } from "../../pages/Details";
import NoPage from "../../pages/NoPage";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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

function Slide() {
  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    const getAll = async () => {
      const params = {
        page: 1,
        language: "en-US",
      };
      try {
        const response = await tmdbApi.getAllList({ params });
        setData(response.results);
      } catch {
        return <NoPage />;
      }
    };

    getAll();
  }, []);

  const swiper = (
    <>
      <Swiper
        navigation={{
          nextEl: `.swiper-button__next`,
          prevEl: `.swiper-button__prev`,
        }}
        pagination={{
          el: `.swiper-pagination`,
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{
          delay: 12001,
          disableOnInteraction: false,
        }}
        loop={true}
        className="movie-swiper"
      >
        {data.slice(0, 10).map(
          (item) =>
            item.backdrop_path && (
              <SwiperSlide key={item.id}>
                <Movie
                  title={item.title ? item.title : item.name}
                  overview={item.overview}
                  backdrop_path={item.backdrop_path}
                />
              </SwiperSlide>
            )
        )}
      </Swiper>
      <div className="pagination">
        <NewDocButton
          className={`btn-dark swiper-button__prev slider__arrow1`}
          buttonIcon={<HiArrowNarrowLeft />}
        />
        <div className="swiper-pagination"></div>
        <NewDocButton
          className={`btn-dark swiper-button__next slider__arrow2`}
          buttonIcon={<HiArrowNarrowRight />}
        />
      </div>
    </>
  );

  return <div className="container slide">{swiper}</div>;
}

export default Slide;
