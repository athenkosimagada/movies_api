import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Genre from "../../components/Genre";
import { BASE_URL, API_KEY } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { images } from "../../constants";

interface GenreItem {
  id: number;
  name: string;
}

function Genres() {
  const { data } = useFetch<GenreItem[]>(
    BASE_URL + "/genre/tv/list?api_key=" + API_KEY,
    []
  );

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
    <div className="container explore">
      <div className="explore__container">
        <h2>Our Genres</h2>
        <div className="explore__controler">
          <div className="swiper-button_prev slider__arrow">
            <HiArrowNarrowLeft />
          </div>
          <div className="swiper-button_next slider__arrow">
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className="explore-type">
        <Swiper
          navigation={{
            nextEl: ".swiper-button_next",
            prevEl: ".swiper-button_prev",
          }}
          spaceBetween={3}
          breakpoints={breaks}
          modules={[Navigation, Autoplay]}
          className="genre-swiper"
        >
          {data.map((genre: GenreItem) => (
            <SwiperSlide key={genre.id}>
              <Genre type={genre.name} image={images.image_icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Genres;
