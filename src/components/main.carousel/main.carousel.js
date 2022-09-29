import React from "react";
import "./main.carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Typography } from "@mui/material";

const MainCarousel = () => {
  return (
    <div id="main-carousel">
      <Swiper
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <Typography variant="h3Joined">Collection 2</Typography>
            <Typography variant="h2">Made to measure</Typography>
            <Typography variant="h5">24 / 7 free delivery across Pakistan</Typography>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainCarousel;
