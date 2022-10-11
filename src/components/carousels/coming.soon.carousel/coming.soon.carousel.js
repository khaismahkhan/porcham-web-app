import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./coming.soon.carousel.scss";

const ComingSoonCarousel = (props) => {
  const comingItems = [
    { name: "COAT PANT", image: "coat.jpeg", bg: "#131313", color: "#bb8a30" },
    { name: "SHERWANI", image: "sherwani.jpeg", bg: "#055bb8", color: "white" },
    { name: "SHIRTS", image: "kk.jpg", bg: "#ebebeb", color: "#101010" },
    { name: "PRINCE COAT", image: "kk.jpg", bg: "#fdc11e", color: "#101010" },
    { name: "PERFUME", image: "kk.jpg", bg: "#d62196", color: "white" },
  ];
  const breakpoints = {
    320: {
      slidesPerView: 1.6,
    },
    400: {
      slidesPerView: 1.8,
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
        className="mySwiper py-3"
        slidesPerView={5}
        spaceBetween={10}
        breakpoints={breakpoints}
      >
        {comingItems.map((item, index) => (
          <SwiperSlide className="d-flex justify-content-center" key={index}>
            <div
              className="d-flex justify-content-center align-items-center paper-root circle cursor-pointer"
              style={{ background: item.bg }}
            >
              <Typography
                variant="subtitle1"
                className="fw-semibold pt-3 txt"
                style={{ color: item.color }}
              >
                {item.name}
              </Typography>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ComingSoonCarousel;
