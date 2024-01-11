import { useEffect, useState } from "react";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import Genre from "../../components/Genre";
import { images } from "../../constants";

import tmdbApi, { category } from "../../api/tmdbApi";
import NoPage from "../../pages/NoPage";

interface Genre {
  id: number;
  name: string;
}

function Explore() {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await tmdbApi.getGenres(category.tv);
        setGenres(response.genres);
      } catch {
        return <NoPage />;
      }
    };

    getGenres();
  }, []);

  const breaks = {
    0: {
      slidesPerView: 2,
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
        <div className="explore-content">
          <h2>Explore our wide variety of categories</h2>
          <p>
            Whether you're looking for a comedy to make you laugh, a drama to
            make you think, or a documentary to learn something new
          </p>
        </div>
        <div className="explore__controler">
          <div className="swiper-button__prev slider__arrow">
            <HiArrowNarrowLeft />
          </div>
          <div className="swiper-button__next slider__arrow">
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className="explore-type">
        <Swiper
          navigation={{
            nextEl: ".swiper-button__next",
            prevEl: ".swiper-button__prev",
          }}
          spaceBetween={3}
          breakpoints={breaks}
          modules={[Navigation, Autoplay]}
          className="genre-swiper"
        >
          {genres.map((genre) => (
            <SwiperSlide key={genre.id}>
              <Genre type={genre.name} image={images.image_icon} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Explore;
