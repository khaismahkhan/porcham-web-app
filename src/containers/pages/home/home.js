import { Typography } from "@mui/material";
import React from "react";
import { Button } from "../../../components/button/button";
import AdvertismentPanelCarousel from "../../../components/advertisment.panel.carousel/advertisment.panel.carousel";
import OfferLabel from "../../../components/offer.label/offer.label";

const Home = () => {
  return (
    <div className="w-100">
      <div className="">
        <AdvertismentPanelCarousel />
      </div>
      <div>
        <OfferLabel />
      </div>

      {/* <Typography className="text-center text" variant="h5">Hello im ebrima</Typography>
      <Typography className="text-center text" variant="h3" color="secondary">Hello im ebrima bold</Typography>
      <Typography className="text-center text" variant="h6">Hello im cuppajoe</Typography>
      <Typography className="text-center text" variant="subtitle">Hello im enter the grid</Typography>
      <Typography className="text-center text" variant="subtitleE24">Hello im enter the grid</Typography>
      <Typography className="text-center text" >Hello im enter the grid</Typography>
      <Button>click me</Button> */}
    </div>
  );
};

export default Home;
