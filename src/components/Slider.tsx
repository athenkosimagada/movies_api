import React, { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay} from "swiper/modules";
import GlobalApi from "../assets/services/GlobalApi";
import {
  IoCaretBack,
  IoCaretForward,
  IoBookmarkOutline,
} from "react-icons/io5";
import { HiPlay } from "react-icons/hi";
import "swiper/css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [nextEl, setNextEl] = useState(null);
  const [prevEl, setPrevEl] = useState(null);
  const [currentPos, setCurrentPos] = useState(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);

  useEffect(() => {
    getTreddingVideos();
  }, []);

  interface Movie {
    backdrop_path: string;
    name: string;
    title: string;
    overview: string;
    // Add other properties as needed
  }

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      console.log(respond.data.results);
      setMovieList(respond.data.results);
    });
  };
  return (
    <div className="relative">
      <Swiper
        navigation={{ nextEl, prevEl }}
        slidesPerView={1}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        speed={1000}
        loop={true}
        modules={[Navigation, Autoplay]}
        onSlideChange={(swiper) => setCurrentPos(swiper.activeIndex)}
      >
        {movieList.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className="absolute inset-0 z-10"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.8) 80%, rgba(0, 0, 0, 0.9) 100%),
                            linear-gradient(to left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.7) 100%)`,
              }}
            ></div>
            <img
              className="w-full h-full object-cover object-left-top"
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.name != null ? item.name : item.title}
            />

            <div
              className=" flex flex-col lg:gap-10 gap-4
              absolute md:bottom-36 bottom-10 p-3 px-4 w-full z-10"
            >
              <div className="flex flex-col gap-2">
                <h2 className="text-white font-bold lg:text-4xl text-2xl opacity-80">
                  {item.name != null ? item.name : item.title}
                </h2>
                <p className="hidden lg:flex text-sm opacity-60 md:w-[80%] lg:w-[60%]">
                  {item.overview}
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    className=" flex items-center gap-2
                    border-none  rounded-full
                    bg-[#55a0c1] text-[#000]"
                  >
                    <HiPlay /> <span>Watch Now</span>
                  </button>
                  <button
                    type="button"
                    className=" flex items-center gap-2
                    border-none  rounded-full
                    bg-none text-[#ffffffd1]"
                  >
                    <IoBookmarkOutline /> <span>Bookmark</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="hidden md:block absolute md:bottom-32 w-full z-10 px-5">
        <div className="flex gap-1 justify-end mb-10">
        <IoCaretBack
            className={`text-[#000000bc] text-[30px]
                      bg-[#ffffffbb] rounded-[5px] cursor-pointer`}
            onClick={() => {
            }}
          />
          <IoCaretForward
            className={`text-[#000000bc] text-[30px]
            bg-[#ffffffbb] rounded-[5px] cursor-pointer`}
            onClick={() => {
            }}
          />
        </div>
        <div className="flex">
          {movieList.map((item, index) => (
            <div
              key={index}
              className={`flex-1 bg-[#fff] h-[0.5px] ${
               currentPos === index && item ? "opacity-90" : "opacity-20"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
