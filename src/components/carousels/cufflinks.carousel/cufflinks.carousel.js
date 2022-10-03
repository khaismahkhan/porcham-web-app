import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../product.card/product.card";
import "./cufflinks.carousel.scss";

const CufflinksCarousel = (props) => {
  const {} = props;

  const cufflinksItems = [
    { name: "Exclusive Contrast Buttons", price: "350", image:'hq-cuff.jpg' },
    { name: "Exclusive Four Part (tich) Buttons", price: "500", image:'hq-cuff.jpg' },
    { name: "Normal Cufflinks", price: "1,000", image:'hq-cuff.jpg' },
    { name: "Mid Quality Cufflinks", price: "2,000", image:'hq-cuff.jpg' },
    { name: "High Quality Cufflinks", price: "3,000", image:'hq-cuff.jpg' },
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
    <div id="cufflinks-carousel">
      <Swiper
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={breakpoints}
      >
        {cufflinksItems.map((item, index) => (
          <SwiperSlide className="" key={index}>
            <div className="d-flex justify-content-center m-3" >
              <ProductCard {...item}/>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CufflinksCarousel;
