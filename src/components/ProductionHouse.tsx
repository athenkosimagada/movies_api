import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiFire } from "react-icons/hi";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  backdrop_path: string;
  name: string;
  title: string;
  overview: string;
  // Add other properties as needed
}

function ProductionHouse() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    getTreddingVideos();

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(3);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      console.log(respond.data.results);
      setMovieList(respond.data.results);
    });
  };
  return (
    <div className="flex flex-col py-2 gap-8 relative md:top-[-100px] z-20 gradient-bg sm-gradient-bg">
      <h2 className="flex justify-center items-center gap-2 font-bold">
        <HiFire /> <span>Treding Now</span> <HiFire />
      </h2>
      <div className="flex gap-4 px-5">
      <Swiper
            navigation={{ nextEl, prevEl }}
            slidesPerView={slidesPerView}
            spaceBetween={10}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            speed={1000}
            loop={true}
            modules={[Navigation, Autoplay]}
            onSlideChange={(swiper) => setCurrentPos(swiper.activeIndex)}
          >
          {movieList.map((item, index) => (
            <SwiperSlide key={index}>
              <MovieItem
                key={index}
                name={item.name != null ? item.name : item.title}
                pic={IMAGE_BASE_URL + item.backdrop_path}
              />
            </SwiperSlide>
          ))}
          </Swiper>
        <div className="flex flex-col gap-2">
          <IoCaretForward
            className={`flex-1 text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px]`}
          />
          <IoCaretBack
            className={`flex-1 text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px]`}
          />
        </div>
      </div>
      <div className="flex">
        {movieList.map((item, index) => (
          <div
            key={index}
            className={`flex-1 bg-[#55a0c1] h-[2px] ${
              index <= currentPos ? "opacity-90" : "opacity-20"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProductionHouse;
