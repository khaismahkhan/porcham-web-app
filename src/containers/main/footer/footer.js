import React from "react";
import { Typography } from "@mui/material";
import clsx from "clsx";
import { IsMobileWidth } from "../../../components/utils/utils";

const Footer = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="bg-primary w-100 ps-3">
      <div className="w-100 pt-3">
        <img
          style={{ height: "60px", width: "230px" }}
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          alt="header-logo"
        />
      </div>
      <div className="d-flex w-100 flex-wrap pt-4 pb-3">
        <div
          className={clsx(
            "d-flex",
            !mobileWidth && "w-40",
            mobileWidth && "w-100"
          )}
        >
          1
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-12",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography>Information</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-12",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography>Information</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-12",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography>Information</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-12",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography>Information</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-12",
            mobileWidth && "w-100 pt-3" 
          )}
        >
          <Typography>Information</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
          <Typography>data</Typography>
        </div>
      </div>
    </div>
  );
};

export default Footer;
