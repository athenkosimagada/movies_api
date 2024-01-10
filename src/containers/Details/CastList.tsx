import { useEffect, useState } from "react";
import tmdbApi from "../../api/tmdbApi";
import { useParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import apiConfig from "../../api/apiConfig";
import NoPage from "../../pages/NoPage";

interface Cast {
  id: number;
  name: string;
  character: string;
  popularity: number;
  profile_path: string;
}

function CastList() {
  const { category = "", id } = useParams();
  const [casts, setCasts] = useState<Cast[]>([]);

  const breaks = {
    0: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 4,
    },
    768: {
      slidesPerView: 5,
    },
    1080: {
      slidesPerView: 6,
    },
  };

  useEffect(() => {
    const getCredits = async () => {
      try {
        const response = await tmdbApi.credits(category, id);
        setCasts(response.cast);
      } catch {
        return <NoPage />;
      }
    };

    getCredits();
  }, [category, id]);

  const sortedCasts = [...casts].sort((a, b) => b.popularity - a.popularity);
  return (
    <div className="casts">
      <div className="card">
        <p className="title">Casts</p>
        <div>
          <Swiper
            navigation={{
              nextEl: `.swiper-button_next${id}`,
              prevEl: `.swiper-button_prev${id}`,
            }}
            spaceBetween={3}
            breakpoints={breaks}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            modules={[Navigation, Pagination, Autoplay]}
            className="cast_list-swiper"
          >
            {sortedCasts.slice(0, 12).map(
              (cast, index) =>
                cast.profile_path && (
                  <SwiperSlide key={index}>
                    <div className="actor">
                      <img
                        width={200}
                        src={apiConfig.originalImage(cast.profile_path)}
                        alt={cast.character}
                      />
                      <p>{cast.character}</p>
                    </div>
                  </SwiperSlide>
                )
            )}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default CastList;
