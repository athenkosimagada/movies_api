import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { useFetch } from "../../hooks/useFetch";
import { API_KEY, BASE_URL } from "../../constants/api";
import Movie from "../../components/Movie";
import { LoadingContext } from "../../pages/Layout";

interface Item {
  id: number;
  original_title: string;
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

function Slide() {
  const { data, loading, error } = useFetch<Item[]>(
    BASE_URL +
      "/discover/movie?api_key=" +
      API_KEY +
      "&include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    []
  );

  const swiper = (
    <Swiper
      navigation={{
        nextEl: ".swiper-button__next",
        prevEl: ".swiper-button__prev",
      }}
      pagination={{
        el: ".swiper-pagination",
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
      {data.slice(5, 15).map(
        (item: Item) =>
          item &&
          item.genre_ids &&
          item.backdrop_path && (
            <SwiperSlide key={item.id}>
              <Movie
                title={item.title}
                overview={item.overview}
                poster_path={item.backdrop_path}
              />
            </SwiperSlide>
          )
      )}
    </Swiper>
  );

  return (
    <LoadingContext.Provider value={{ loading, error }}>
      <div className="container slide">
        {error == null ? (
          <p>{error}</p>
        ) : (
          <>
            {swiper}
            {data && swiper ? (
              <div className="pagination">
                <div className="swiper-button__prev slider__arrow1 btn_arrow">
                  <HiArrowNarrowLeft />
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button__next slider__arrow2 btn_arrow">
                  <HiArrowNarrowRight />
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
    </LoadingContext.Provider>
  );
}

export default Slide;
