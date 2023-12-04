import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation } from "swiper/modules";

import Genre from "../components/Genre";
import { useEffect, useState } from "react";

function Explore() {
  const [IsMobile, setIsMobile] = useState<Boolean>(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const breaks = {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
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
        <div className={`explore__controler ${IsMobile ? 'mobile__pagination' : ''}`}>
            <div className="swiper-button__prev slider__arrow">
              <HiArrowNarrowLeft />
            </div>
            <div className='swiper__pagination'></div>
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
          grid={{
            rows: 1,
          }}
          spaceBetween={10}
          pagination={{
            el: ".swiper__pagination",
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          breakpoints={breaks}
          loop={true}
          className="genre-swiper"
        >
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
          <SwiperSlide>
            <Genre />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Explore;
