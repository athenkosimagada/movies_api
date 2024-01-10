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

import tmdbApi from "../../api/tmdbApi";
import NoPage from "../../pages/NoPage";

interface Genre {
  id: number;
  name: string;
}

interface GenreProps {
  id: number;
  category: string;
}

function Genres({id, category}: GenreProps) {
  const [genres, setGenres] = useState<Genre[]>([]);

  useEffect(() => {
    const getGenres = async () => {
      try {
        const response = await tmdbApi.getGenres(category);
        setGenres(response.genres);
      } catch {
        return <NoPage />;
      }
    };

    getGenres();
  }, []);
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
          <div className={`swiper-button_prev${id} slider__arrow`}>
            <HiArrowNarrowLeft />
          </div>
          <div className={`swiper-button_next${id} slider__arrow`}>
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className="explore-type">
        <Swiper
          navigation={{
            nextEl: `.swiper-button_next${id}`,
            prevEl: `.swiper-button_prev${id}`,
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

export default Genres;
