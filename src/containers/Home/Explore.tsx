import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Genre from "../../components/Genre";
import { useEffect, useState } from "react";
import { BASE_URL, API_KEY } from "../../constants/api";
import { useFetch } from "../../hooks/useFetch";
import { images } from "../../constants";

interface GenreItem {
  id: number,
  name: string
}

function Explore() {
  const [loading, setLoading] = useState(true);
  const data = useFetch<GenreItem[]>(
    BASE_URL + "/genre/tv/list?api_key=" + API_KEY,
    []
  );

  useEffect(() => {
    if (data.length > 0) {
      setLoading(false);
    }
  }, [data]);

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
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Swiper
            navigation={{
              nextEl: ".swiper-button__next",
              prevEl: ".swiper-button__prev",
            }}
            spaceBetween={3}
            modules={[Navigation]}
            breakpoints={breaks}
            autoplay={{
              delay: 100,
              disableOnInteraction: true,
            }}
            loop={true}
            className="genre-swiper"
          >
            {data.map((genre: GenreItem) => (
              <SwiperSlide key={genre.id}>
                <Genre type={genre.name} image={images.image_icon} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Explore;
