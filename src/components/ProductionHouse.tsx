import { useEffect, useState, useRef } from "react";
import GlobalApi from "../assets/services/GlobalApi";
import { HiFire } from "react-icons/hi";
import { IoCaretBack, IoCaretForward } from "react-icons/io5";
import MovieItem from "./MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
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
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [slidesPerView, setSlidesPerView] = useState<number>(3);
  const nextElRef = useRef<HTMLDivElement | null>(null);
  const prevElRef = useRef<HTMLDivElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  const [start, setStart] = useState<number>(0);
  const [end, setEnd] = useState<number>(slidesPerView);

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

    const activeIndex = swiperRef.current?.activeIndex;
    setStart(activeIndex as number);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [slidesPerView]);

  const getTreddingVideos = () => {
    GlobalApi.getTreddingVideos.then((respond) => {
      setMovieList(respond.data.results);
    });
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
      setStart(swiperRef.current.realIndex);
      setEnd(swiperRef.current.realIndex + slidesPerView - 1);
    }
  };

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
      setStart(swiperRef.current.realIndex);
      setEnd(swiperRef.current.realIndex + slidesPerView - 1);
    }
  };

  return (
    <div className="flex flex-col py-2 gap-8 relative 
    md:top-[-100px] z-20 gradient-bg sm-gradient-bg
    md:bg-transparent bg-black">
      <h2 className="flex justify-center items-center gap-2 font-bold">
        <HiFire /> <span>Treding Now</span> <HiFire />
      </h2>
      <div className="flex gap-4 px-5">
        <Swiper
          navigation={{
            nextEl:
              end !== movieList.length - 1 ? nextElRef.current : undefined,
            prevEl: start !== 0 ? prevElRef.current : undefined,
          }}
          slidesPerView={slidesPerView}
          spaceBetween={10}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          speed={1000}
          loop={false}
          modules={[Navigation, Autoplay]}
          onSlideChange={(swiper) => {
            const targetIndex = movieList.length - 1 - swiper.realIndex;
            if (targetIndex < slidesPerView - 1) {
              swiper.slideTo(0, 3000);
            }
            setStart(swiper.realIndex);
            setEnd(swiper.realIndex + slidesPerView - 1);
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            setStart(swiper.realIndex);
            setEnd(swiper.realIndex + slidesPerView - 1);  
          }}
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
        <div className="hidden md:flex flex-col gap-2">
          <div
            className={`flex items-center flex-1 
            text-[#000000bc] text-[30px] bg-[#ffffffbb] 
            rounded-[5px] ${
              end === movieList.length - 1 ? "opacity-20" : "cursor-pointer"
            }`}
          >
            <IoCaretForward
              onClick={() =>
                end !== movieList.length - 1 ? slideNext() : null
              }
            />
          </div>
          <div
            className={`flex items-center flex-1 
            text-[#000000bc] text-[30px] bg-[#ffffffbb] 
            rounded-[5px] ${start === 0 ? "opacity-20" : "cursor-pointer"}`}
          >
            <IoCaretBack onClick={() => (start !== 0 ? slidePrev() : null)} />
          </div>
        </div>
      </div>
      <div className="flex px-5">
        {movieList.map((item, index) => (
          <div
            key={index}
            className={`flex-1 bg-[#55a0c1] h-[2px] ${
              index <= end && item ? "opacity-90" : "opacity-20"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default ProductionHouse;
