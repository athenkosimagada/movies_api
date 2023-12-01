import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Grid, Pagination, Navigation} from "swiper/modules";

import Genre from "../components/Genre";

function Explore() {
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
          <div className="swiper__pagination"></div>
          <div className="swiper-button__next slider__arrow">
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
      <div className="explore-type">
        <Swiper
          navigation={{
            nextEl: '.swiper-button__next',
            prevEl: '.swiper-button__prev',
            clickable: true,
          }}
          grid={{
            rows: 1,
          }}
          spaceBetween={10}
          pagination={{
            el: '.swiper__pagination',
            clickable: true,
          }}
          modules={[Grid, Pagination, Navigation]}
          breakpoints={{
            // when window width is >= 320px
            0: {
              slidesPerView: 1,
            },
            // when window width is >= 480px
            480: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            768: {
              slidesPerView: 3,
            },
            // when window width is >= 768px
            1024: {
              slidesPerView: 4,
            },
          }}
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
