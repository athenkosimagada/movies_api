import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import GlobalApi from "../assets/services/GlobalApi";
import {
  IoCaretBack,
  IoCaretForward,
  IoBookmarkOutline,
} from "react-icons/io5";
import { HiPlay } from "react-icons/hi";
import "swiper/css";
import { HiStar } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [currentPos, setCurrentPos] = useState(0);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const swiperRef = useRef<SwiperCore | null>(null);

  useEffect(() => {
    getTreddingVideos();
    console.log(movieList);
  }, []);

  interface Movie {
    backdrop_path: string;
    name: string;
    title: string;
    overview: string;
    release_date: string;
    first_air_date: string;
    vote_average: number;
    // Add other properties as needed
  }

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      setMovieList(respond.data.results);
    });
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 12000, disableOnInteraction: false }}
        speed={1000}
        loop={false}
        modules={[Navigation, Autoplay]}
        onSlideChange={(swiper) => {
          const targetIndex = movieList.length - 1 - swiper.realIndex;
          if (targetIndex < 0) {
            swiper.slideTo(0, 3000);
          }
          setCurrentPos(swiper.activeIndex);
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          setCurrentPos(swiper.realIndex);
        }}
      >
        {movieList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="absolute inset-0 z-10 lg-slider"></div>
            <img
              className="w-full h-full object-cover 
              object-left-top min-h-[400px]"
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.name != null ? item.name : item.title}
            />

            <div
              className="flex flex-col lg:gap-10 gap-4
              absolute md:bottom-36 bottom-1 p-3 px-4 w-full z-10"
            >
              <div className="flex flex-col gap-2">
                <h2
                  className="text-white font-bold lg:text-4xl 
                md:text-2xl opacity-80 md:text-start text-center"
                >
                  {item.name != null ? item.name : item.title}
                </h2>
                <div className="flex md:justify-start justify-center gap-4">
                  <div className="flex md:justify-start justify-center items-center">
                    <p>
                      {item.release_date
                        ? item.release_date.substring(0, 4)
                        : item.first_air_date.substring(0, 4)}
                    </p>
                  </div>
                  <div className={`flex md:justify-start justify-center items-center 
                  ${item.vote_average >= 8 && `text-green-700`}
                  ${item.vote_average < 8 && item.vote_average >= 5 && `text-orange-400`}
                  ${item.vote_average < 5 && `text-red-600`}`}>
                    <HiStar />
                    <p>{item.vote_average.toFixed(2)}</p>
                  </div>
                </div>
                <p className="hidden lg:flex text-sm opacity-60 md:w-[80%] lg:w-[60%]">
                  {item.overview}
                </p>
              </div>
              <div>
                <div className="flex gap-2 md:justify-start justify-center">
                  <button
                    type="button"
                    className=" flex items-center gap-2
                    border-none  rounded-full
                    bg-[#55a0c1] text-[#000] md:text-sm text-xs"
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
            className={`text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px] ${
              currentPos === 0 ? "opacity-20" : "cursor-pointer"
            }`}
            onClick={() => (currentPos !== 0 ? slidePrev() : null)}
          />
          <IoCaretForward
            className={`text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px] ${
              currentPos === movieList.length - 1
                ? "opacity-20"
                : "cursor-pointer"
            }`}
            onClick={() =>
              currentPos !== movieList.length - 1 ? slideNext() : null
            }
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
