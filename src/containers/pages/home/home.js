import React from "react";
import "./home.scss"
import { Typography } from "@mui/material";
import OfferLabel from "../../../components/offer.label/offer.label";
import ComingSoonCarousel from "../../../components/carousels/coming.soon.carousel/coming.soon.carousel";
import { IsMobileWidth } from "../../../components/utils/utils";
import clsx from "clsx";
import MainCarousel from "../../../components/carousels/main.carousel/main.carousel";
import BestSellerCarousel from "../../../components/carousels/best.seller.carousel/best.seller.carousel";
import CufflinksCarousel from "../../../components/carousels/cufflinks.carousel/cufflinks.carousel";

const Home = () => {
  const mobileWidth = IsMobileWidth();
 
  return (
    <div className="w-100" id="home">
      <div className={clsx(!mobileWidth && "m-5", mobileWidth && "m-2")}>
        <MainCarousel />
      </div>
      <div
        className={clsx(!mobileWidth && "m-5", mobileWidth && "mt-5 ms-3 me-3")}
      >
        <OfferLabel />
      </div>
      <div className="mt-5 mb-5 mx-2">
        <Typography
          variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
          className="text-center font-weight-bolder text-theme pt-3 pb-4 main-heading"
          
        >
          COMING SOON
        </Typography>
        <div className="mt-5 mb-5">
          <ComingSoonCarousel/>
        </div>
      </div>
      <div
        className={clsx(
          "mt-5 d-flex justify-content-center flex-column align-items-center",
          !mobileWidth && "mx-5",
          mobileWidth && "mx-2"
        )}
      >
        <Typography
          variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
          className="text-center font-weight-bolder text-theme pt-5 main-heading"
        >
          Custom Tailored Menswear
        </Typography>
        <div className="w-100 mt-5">
          <BestSellerCarousel />
        </div>

        {/* <BestSeller image="https://us.123rf.com/450wm/semilyon/semilyon2007/semilyon200700011/151133655-red-female-glossy-leather-bag-isolated-on-white-background.jpg?ver=6" /> */}
        {/* <InstagramFeed backgroundimage="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" brandtag="https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png" /> */}
      </div>
      <div
        className={clsx(
          "mt-5 d-flex justify-content-center flex-column align-items-center",
          !mobileWidth && "mx-5",
          mobileWidth && "mx-2"
        )}
      >
        <Typography
          variant={clsx(!mobileWidth && "h2", mobileWidth && "h5")}
          className="text-center font-weight-bolder text-theme pt-5 main-heading"
        >
          Exclusive Cufflinks
        </Typography>
        <div className="w-100 mt-5">
          <CufflinksCarousel />
        </div>
      </div>
    </div>
  );
};

export default Home;
