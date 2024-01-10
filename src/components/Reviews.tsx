import { useEffect, useState } from "react";
import tmdbApi from "../api/tmdbApi";
import { useParams } from "react-router-dom";
import { Review } from "../api/apiTypes";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import apiConfig from "../api/apiConfig";
import { FaStar } from "react-icons/fa6";
import { images } from "../constants";
import NoPage from "../pages/NoPage";

function Reviews() {
  const { category = "", id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const response = await tmdbApi.reviews(category, id);
        setReviews(response.results);
      } catch {
        return <NoPage />;
      }
    };

    getReviews();
  }, [category, id]);
  return (
    <div className="reviews">
      <div className="card">
        <p className="title">Reviews</p>
        <div>
          <Swiper
            navigation={{
              nextEl: `.swiper-button_next${id}`,
              prevEl: `.swiper-button_prev${id}`,
            }}
            spaceBetween={3}
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            className="cast_list-swiper"
          >
            {reviews.map(
              (review, index) =>
                (
                  <SwiperSlide key={index}>
                    <div className="actor">
                      <div className="user">
                        {review.author_details.avatar_path
                        ?<img
                        width={100}
                        src={apiConfig.originalImage(
                          review.author_details.avatar_path
                        )}
                        alt={review.author_details.name}
                      />
                      : <img
                      width={100}
                      src={images.image_icon}
                      alt={review.author_details.name}
                    />
                        }
                        
                        <span>
                          <p>{review.author}/10</p>
                          <p>
                            <FaStar /> {review.author_details.rating}/10
                          </p>
                        </span>
                      </div>
                      <p>{review.content}</p>
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

export default Reviews;
