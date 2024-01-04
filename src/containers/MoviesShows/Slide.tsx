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
import NewDocButton from "../../components/NewDocButton";

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
  const { data } = useFetch<Item[]>(
    BASE_URL + "/movie/now_playing?language=en-US&page=1&api_key=" + API_KEY,
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
    <div className="container slide">
      {swiper}
      {data && swiper ? (
        <div className="pagination">
          <NewDocButton
            className="btn-dark swiper-button__prev slider__arrow1"
            buttonIcon={<HiArrowNarrowLeft />}
          />
          <div className="swiper-pagination"></div>
          <NewDocButton
            className="btn-dark swiper-button__next slider__arrow2"
            buttonIcon={<HiArrowNarrowRight />}
          />
        </div>
      ) : null}
    </div>
  );
}

export default Slide;
