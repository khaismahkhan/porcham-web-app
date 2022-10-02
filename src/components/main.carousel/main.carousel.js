import React from "react";
import "./main.carousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { ListItemSecondaryAction, Typography } from "@mui/material";
import clsx from "clsx";
import { IsMobileWidth } from "../utils/utils";

const MainCarousel = () => {
  const mobileWidth = IsMobileWidth();
  const carouselItems = [
    {
      titleHeading: "Custom Tailored Menswear",
      title: "Pioneer of ZERO STITCH",
      desc: "Our vision is to preserve all kinds of culture with ZERO STITCH of 'Kameez shalwar/ Kurta Pajama' with the best fabric.",
    },
    {
      titleHeading: "Made to Measure",
      title: "title name",
      desc: "24 / 7 free delivery across Pakistan",
    },
    {
      titleHeading: "Exclusive Cufflinks",
      title: "Graceful & Elegant",
      desc: "Porcham cufflinks may let you express your uniqueness.",
    },
  ];
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
        {carouselItems.map((item, index) => (
          <SwiperSlide>
            <div className="d-flex w-100 h-100">
              <div
                className="w-60 d-flex align-items-start justify-content-center flex-column "
                key={index}
              >
                <Typography
                  variant="h3Joined"
                  className={clsx("title-heading",!mobileWidth && "")}
                >
                  {item.titleHeading}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={clsx("pb-2 pt-2 title", !mobileWidth && "")}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="subtitle1"
                  className={clsx("desc fw-light",!mobileWidth && "w-85", mobileWidth && "w-70")}
                >
                  {item.desc}
                </Typography>
              </div>
              <div className="w-40 main-carousel paper-root">
                <img
                  className="image"
                  src={`${process.env.PUBLIC_URL}/assets/images/kk.jpg`}
                  alt="product-img"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainCarousel;
