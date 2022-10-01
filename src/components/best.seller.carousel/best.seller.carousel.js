import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../product.card/product.card";
import "./best.seller.carousel.scss";

const BestSellerCarousel = (props) => {
  const {} = props;

  const bestSellerItems = [
    {
      name: "Best Collection",
      price: "3,800",
      desc: "4 meter cloth with simple stitching ",
    },
    {
      name: "Hot Collection",
      price: "4,200",
      desc: "4 meter cloth with simple stitching ",
    },
    {
      name: "Exclusive Collection",
      price: "5,000",
      desc: "4 meter cloth with simple stitching ",
    },
    {
      name: "Premium Collection",
      price: "5,800",
      desc: "4 meter cloth with simple stitching ",
    },
  ];
  const breakpoints = {
    320:{
      slidesPerView:1
    },
    480:{
      slidesPerView:1.5
    },
    650:{
      slidesPerView:2
    },
    768: {
      slidesPerView: 2.5,
    },
    1080: {
      slidesPerView: 3,
    },
    1200: {
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
              <ProductCard {...item} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestSellerCarousel;
