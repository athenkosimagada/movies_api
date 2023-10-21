import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import {
  IoCaretBack,
  IoCaretForward,
  IoBookmarkOutline,
} from "react-icons/io5";
import { HiPlay } from "react-icons/hi";
import ProductionHouse from "./ProductionHouse";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

function Slider() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentSign, setCurrentSign] = useState("");

  interface Movie {
    backdrop_path: string;
    name: string;
    title: string;
    overview: string;
    // Add other properties as needed
  }

  useEffect(() => {
    getTreddingVideos();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 20000);

    return () => {
      clearInterval(timer);
    };
  }, [currentSlide]);

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      console.log(respond.data.results);
      setMovieList(respond.data.results);
    });
  };

  const prevSlide = () => {
    const isFistSlide = currentSlide === 0;
    const newIndex = isFistSlide ? movieList.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentSlide === movieList.length - 1;
    const newIndex = isLastSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="relative">
      {movieList.length && (
        <>
          <div
            style={{
              backgroundImage: `url(${
                IMAGE_BASE_URL + movieList[currentSlide].backdrop_path
              })`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top left",
              transform: `translateX(${currentSign})`,
            }}
            className="flex px-5 relative
            transition-transform duration-900 md:min-h-[150vh]"
          >
            <div
              className="absolute inset-0"
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.6) 80%, rgba(0, 0, 0, 0.9) 100%),
                            linear-gradient(to left, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 50%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.7) 100%)`,
              }}
            ></div>
          </div>

          <div
            className=" flex flex-col gap-10
          absolute bottom-9 p-3 px-4 w-full"
          >
            <div className="flex flex-col gap-2">
              <h2 className="text-white font-bold text-4xl opacity-80">
                {movieList[currentSlide].name != null
                  ? movieList[currentSlide].name
                  : movieList[currentSlide].title}
              </h2>
              <p className="flex text-sm opacity-60 md:w-[80%] lg:w-[60%]">
                {movieList[currentSlide].overview}
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
              <div className="flex gap-1 justify-end">
                <IoCaretBack
                  className={`text-[#000000bc] text-[30px]
                 bg-[#ffffffbb] rounded-[5px]
                ${currentSlide === 0 ? "opacity-20" : "cursor-pointer"}`}
                  onClick={currentSlide !== 0 && prevSlide}
                />
                <IoCaretForward
                  className={`text-[#000000bc] text-[30px] 
                bg-[#ffffffbb] rounded-[5px]
                ${currentSlide === movieList.length - 1 ? "opacity-20" : "cursor-pointer"}`}
                  onClick={currentSlide !== movieList.length - 1 && nextSlide}
                />
              </div>
            </div>
            <div className="flex">
              {movieList.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 bg-[#fff] h-[0.5px] ${
                    movieList[currentSlide] === item
                      ? "opacity-90"
                      : "opacity-20"
                  }`}
                ></div>
              ))}
            </div>
            <ProductionHouse />
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
