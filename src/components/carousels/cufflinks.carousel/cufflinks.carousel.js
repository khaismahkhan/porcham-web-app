import { Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "../../product.card/product.card";
import "./cufflinks.carousel.scss";
import { Pagination, Navigation } from "swiper";
import { IsMobileWidth } from "../../utils/utils";

const CufflinksCarousel = (props) => {
  const {} = props;

  const cufflinksItems = [
    { name: "Metal Buttons", price: "350", image: "buttons.jpg" },
    { name: "Hot Cufflinks", price: "1,000", image: "00.jpg" },
    { name: "Exclusive Cufflinks", price: "2,000", image: "11.jpg" },
    { name: "Premium Quality Cufflinks", price: "3,000", image: "22.jpg" },
  ];
  const cufflinksItemsMbl = [
    { name: "Hot Cufflinks", price: "1,000", image: "00.jpg" },
    { name: "Exclusive Cufflinks", price: "2,000", image: "11.jpg" },
    { name: "Premium Quality Cufflinks", price: "3,000", image: "22.jpg" },
    { name: "Metal Buttons", price: "350", image: "buttons.jpg" },
  ];
  const breakpoints = {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 1.5,
    },
    650: {
      slidesPerView: 2,
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
  const mobileWidth = IsMobileWidth();

  return (
    <div id="cufflinks-carousel">
      <Swiper
        className="mySwiper"
        slidesPerView={5}
        spaceBetween={30}
        breakpoints={breakpoints}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {mobileWidth
          ? cufflinksItemsMbl.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <div className="d-flex justify-content-center m-3">
                  <ProductCard {...item} />
                </div>
              </SwiperSlide>
            ))
          : cufflinksItems.map((item, index) => (
              <SwiperSlide className="" key={index}>
                <div className="d-flex justify-content-center m-3">
                  <ProductCard {...item} />
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
};

export default CufflinksCarousel;
