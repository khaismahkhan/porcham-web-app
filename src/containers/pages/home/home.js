import { Typography } from "@mui/material";
import React from "react";
import { Button } from "../../../components/button/button";
import AdvertismentPanelCarousel from "../../../components/advertisment.panel.carousel/advertisment.panel.carousel";
import OfferLabel from "../../../components/offer.label/offer.label";
import BestSeller from "../../../components/best.seller/best.seller";
import InstagramFeed from "../../../components/instagram.feed/instagram.feed";
import ProductCard from "../../../components/product.card/product.card";
import SwiperCarousel from "../../../components/swiper.carousel/swiper.carousel";
import { IsMobileWidth } from "../../../components/utils/utils";
import clsx from "clsx";
import MainCarousel from "../../../components/main.carousel/main.carousel";
import BestSellerCarousel from "../../../components/best.seller.carousel/best.seller.carousel";
import CufflinksCarousel from "../../../components/cufflinks.carousel/cufflinks.carousel";

const Home = () => {
  const mobileWidth = IsMobileWidth();
  const products = [4, 9, 16, 25, 1, 1, 1, 1, 1, 1, 1];
  const comingItems = [
    { name: "Coat Pant", image: "coat.jpeg" },
    { name: "Sherwani", image: "sherwani.jpeg" },
    { name: "Shirts", image: "kk.jpg" },
    { name: "Prince Coat", image: "kk.jpg" },
    { name: "Pants", image: "kk.jpg" },
  ];
  return (
    <div className="w-100">
      <div className="m-5">
        <MainCarousel />
      </div>
      <div
        className={clsx(!mobileWidth && "m-5", mobileWidth && "mt-5 ms-3 me-3")}
      >
        <OfferLabel />
      </div>
      <div className="mt-5 mb-5">
        <Typography
          variant="h2"
          className="text-center font-weight-bolder text-theme pt-3 pb-4"
          style={{ letterSpacing: 5 }}
        >
          COMING SOON
        </Typography>
        <div className="mt-5 mb-5">
          <SwiperCarousel comingItems={comingItems} />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center flex-column align-items-center mx-5">
        <Typography
          variant="h2"
          className="text-center font-weight-bolder text-theme pt-5"
          style={{ letterSpacing: 5 }}
        >
          Custom Tailored Menswear
        </Typography>
        <div className="w-100 mt-5">
          <BestSellerCarousel />
        </div>

        {/* <BestSeller image="https://us.123rf.com/450wm/semilyon/semilyon2007/semilyon200700011/151133655-red-female-glossy-leather-bag-isolated-on-white-background.jpg?ver=6" /> */}
        {/* <InstagramFeed backgroundimage="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" brandtag="https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png" /> */}
      </div>
      <div className="mt-5 d-flex justify-content-center flex-column align-items-center mx-5">
        <Typography
          variant="h2"
          className="text-center font-weight-bolder text-theme pt-5"
          style={{ letterSpacing: 5 }}
        >
          Exclusive Cufflinks
        </Typography>
        <div className="w-100 mt-5">
          <CufflinksCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Home;
