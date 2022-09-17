import { Typography } from "@mui/material";
import React from "react";
import { Button } from "../../../components/button/button";
import AdvertismentPanelCarousel from "../../../components/advertisment.panel.carousel/advertisment.panel.carousel";
import OfferLabel from "../../../components/offer.label/offer.label";
import BestSeller from "../../../components/best.seller/best.seller";
import InstagramFeed from "../../../components/instagram.feed/instagram.feed";
import ProductCard from "../../../components/product.card/product.card";

const Home = () => {
  const products = [4, 9, 16, 25, 1, 1, 1, 1, 1, 1, 1];
  return (
    <div className="w-100">
      <div className="">
        <AdvertismentPanelCarousel />
      </div>
      <div>
        <OfferLabel />
      </div>
      <div className="">
        <Typography variant="h2" className="text-center font-weight-bold pt-5 pb-4">
          BEST DEALS
        </Typography>
        <div className="w-100 d-flex flex-wrap justify-content-center">
          {products.map((product, index) => (
            <div className="m-3" key={index}>
              <ProductCard />
            </div>
          ))}
        </div>

        {/* <BestSeller image="https://us.123rf.com/450wm/semilyon/semilyon2007/semilyon200700011/151133655-red-female-glossy-leather-bag-isolated-on-white-background.jpg?ver=6" /> */}
        {/* <InstagramFeed backgroundimage="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" brandtag="https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png" /> */}
      </div>
    </div>
  );
};

export default Home;
