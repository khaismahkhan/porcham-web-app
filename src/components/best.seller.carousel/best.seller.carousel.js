import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product.card/product.card";
import "./best.seller.carousel.scss";

const BestSellerCarousel = (props) => {
  const {  } = props;

  const bestSellerItems = [
    { name: "Coat Pant", image: "coat.jpeg" },
    { name: "Sherwani", image: "sherwani.jpeg" },
    { name: "Shirts", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
  ]
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
      slidesPerView: 4,
    },
  };
  return (
    <div id="best-seller-carousel">
      <Swiper
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={breakpoints}
        
      >
        {bestSellerItems.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <div className="m-3" key={index}>
              <ProductCard />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerCarousel;
