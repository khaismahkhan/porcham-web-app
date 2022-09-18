import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.carousel.scss";

const SwiperCarousel = (props) => {
  const { comingItems } = props;
  const breakpoints = {
    320: {
      slidesPerView: 1.5,
    },
    400: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    868: {
      slidesPerView: 4,
    },
    1024: {
      slidesPerView: 5,
    },
  };
  return (
    <div id="swiper-carousel">
      <Swiper
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={breakpoints}
      >
        {comingItems.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <div className="d-flex flex-column align-items-center">
              <img
                className="image paper-root cursor-pointer"
                src={`${process.env.PUBLIC_URL}/assets/images/${item.image}`}
                alt="product-img"
              />
              <Typography variant="body1" className="fw-lighter pt-3">
                {item.name}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
