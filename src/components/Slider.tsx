import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWith = window.innerWidth;

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef<HTMLDivElement>(null);

  interface Movie {
    backdrop_path: string;
    name: string;
    // Add other properties as needed
  }

  useEffect(() => {
    getTreddingVideos();
  }, []);

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      setMovieList(respond.data.results);
    });
  };

  const slideRight = (element: HTMLDivElement) => {
    element.scrollLeft += screenWith - 108;
  };

  const slideLeft = (element: HTMLDivElement) => {
    element.scrollLeft -= screenWith - 108;
  };

  return (
    <div>
      <HiChevronLeft className="hidden md:block text-white text-[30px] 
      absolute mx-8 mt-[150px] cursor-pointer" onClick={() => slideLeft(elementRef.current)}/>
      <HiChevronRight className="hidden md:block text-white text-[30px] 
      absolute mx-8 mt-[150px] cursor-pointer right-0" onClick={() => slideRight(elementRef.current)}/>
      <div
        className="flex overflow-x-auto w-full px-16 
        py-4 scrollbar-hide scroll-smooth" ref={elementRef}>
        {movieList.map((item: Movie, index) => (
          <img
            className="min-w-full md:h-[310px] object-cover 
        object-left-top mr-5 rounded-md"
            src={IMAGE_BASE_URL + item.backdrop_path}
            alt={item.name}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
