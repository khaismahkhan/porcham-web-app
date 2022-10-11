import { Button, Typography } from "@mui/material";
import React from "react";
import "./offer.label.scss";
import { IsMobileWidth } from "../utils/utils";
import clsx from "clsx";

const OfferLabel = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div id="offer-label">
      <div className="label-img paper-root">
        <div
          className={clsx(
            !mobileWidth && "w-100 ms-5",
            mobileWidth && "ms-3 w-70"
          )}
        >
          <Typography
            variant={clsx(!mobileWidth && "h3Joined", mobileWidth && "joined")}
            className="text-theme font-weight-bold"
          >
            Enjoy
          </Typography>
          <Typography
            variant={clsx(!mobileWidth && "h5", mobileWidth && "subtitle1")}
            className="pt-2"
          >
            Up to 15% discount on your first purchase!
          </Typography>
          <Button
            href="https://wa.me/923142593164"
            variant="outlined"
            className="mt-2"
            target="_blank"
          >
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OfferLabel;
