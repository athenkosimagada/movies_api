import React, { useEffect, useState, useRef } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiFire } from "react-icons/hi";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import MovieItem from "./MovieItem";
import { HiChevronDoubleLeft } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

interface Movie {
  backdrop_path: string;
  name: string;
  title: string;
  overview: string;
  // Add other properties as needed
}

function ProductionHouse() {
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);

  useEffect(() => {
    getTreddingVideos();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if(end !== movieList.length - 1) {
        nextItems();
      } else {
        setEnd(3);
        setStart(0);
      }
    }, 6000);

    return () => {
      clearInterval(timer);
    };
  }, [start,end]);

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      console.log(respond.data.results);
      setMovieList(respond.data.results);
    });
  };

  function nextItems() {
    if(end + 4 > movieList.length - 1) {
      setEnd(movieList.length - 1);
      setStart(movieList.length - 1 - 3);
    } else {
      setEnd(end + 4);
      setStart(start + 4);
    }
  }

  function prevItems() {
    if(start - 4 < 0) {
      setEnd(3);
      setStart(0);
    } else {
      setEnd(end - 4);
      setStart(start - 4);
    }
  }

  const items: Movie[] = movieList.filter((item, index) => index >= start && index <= end && item);

  return (
    <div className="flex flex-col py-2 gap-8">
      <h2 className=" flex justify-center items-center gap-2 font-bold">
        <HiFire /> <span>Treding Now</span> <HiFire />
      </h2>
      <div className="flex gap-4">
        <div className="flex gap-3">
          {items.map((item, index) => (
            <MovieItem
              key={index}
              name={item.name != null ? item.name : item.title}
              pic={IMAGE_BASE_URL + item.backdrop_path}
            />
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <IoCaretForward
            className={`flex-1 text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px] ${
              end === movieList.length - 1 ? 'disable opacity-20' : 'cursor-pointer'
            }`}
              onClick={nextItems}
          />
          <IoCaretBack
            className={`flex-1 text-[#000000bc] text-[30px] bg-[#ffffffbb] rounded-[5px] ${
              start === 0 ? 'disable opacity-20' : 'cursor-pointer'
            }`}
            onClick={prevItems}
          />
        </div>
      </div>
      <div className="flex">
              {movieList.map((item, index) => (
                <div
                  key={index}
                  className={`flex-1 bg-[#55a0c1] h-[2px] ${
                    index <= end
                      ? "opacity-90"
                      : "opacity-20"
                  }`}
                ></div>
              ))}
            </div>
    </div>
  );
}

export default ProductionHouse;
