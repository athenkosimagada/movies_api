import { Navigation, Pagination } from "swiper/modules";
import MovieCard from "../components/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

interface MovieProps {
  title: string;
  vote_average: number;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
}

interface ContainerProps {
  data: MovieProps[];
  heading: string;
  id:number;
}

function CustomContainer({ data, heading, id }: ContainerProps) {
  const breaks = {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1080: {
      slidesPerView: 4,
    },
  };

  return (
    <div className="custom_container">
      <div className="explore__container">
        <h1>{heading}</h1>
        <div className="explore__controler">
          <div className={`swiper--button__prev${id} slider__arrow`}>
            <HiArrowNarrowLeft />
          </div>
          <div className={`swiper--button__next${id} slider__arrow`}>
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
      <Swiper
        breakpoints={breaks}
        slidesPerView={4}
        spaceBetween={16}
        navigation={{
          nextEl: `.swiper--button__next${id}`,
          prevEl: `.swiper--button__prev${id}`,
        }}
        pagination={{
          el: `.swiper--pagination${id}`,
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="custom-swiper"
      >
        {data.map(
          (movie, index) =>
            movie &&
            movie.poster_path && (
              <SwiperSlide key={index}>
                <MovieCard movie={movie} />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </div>
  );
}

export default CustomContainer;
