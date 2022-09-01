import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { IsMobileWidth } from "../utils/utils";
// import { Button } from "../button/button";
import clsx from "clsx";

const AdvertismentPanel = (props) => {
  const {
    image,
    titleHeading,
    title,
    description,
    buttonTitle,
    width,
    height,
    bannerHeight,
    textAlignment,
    textColor,
  } = props;
  const mobileWidth = IsMobileWidth();
  return (
    <div
      className={clsx(
        !mobileWidth && "d-flex align-items-center pl-5",
        mobileWidth && "d-flex align-items-center pl-3"
      )}
      style={{
        backgroundImage: image
          ? `url(${image})`
          : "url(https://moathorneby.com/photography-blog/images/Brighton-fashion-photographer-hazydays-1.jpg)",
        backgroundSize:
          width && height
            ? `${width} ${height}`
            : width
            ? `${width} 100%`
            : height
            ? `100% ${height}`
            : "100% 100%",
        backgroundRepeat: "no-repeat",
        height: bannerHeight ? bannerHeight : "80vh",
        justifyContent: textAlignment ? textAlignment : "center",
      }}
    >
      <Box
        className={clsx(!mobileWidth && "w-30 bg-dark", mobileWidth && "w-100")}
        color="primary"
        style={{ color: textColor ? textColor : "white" }}
      >
        <Typography
          variant={clsx(!mobileWidth && "h3Joined", mobileWidth && "h3Joined")}
    
        >
          {titleHeading ? titleHeading : ""}
        </Typography>
        <Typography
          variant={clsx(!mobileWidth && "h2", mobileWidth && "h4")}
          gutterBottom
          component="div"
          className="text-ellipsis-clamp-3 font-weight-bolder text-capitalize"
        >
          {title ? title : ""}
        </Typography>
        <Typography
          variant={clsx(!mobileWidth && "h5", mobileWidth && "h6")}
          gutterBottom
          component="div"
          className="text-ellipsis-clamp-1 led font-weight-light h-auto"
        >
          {description ? description : ""}
        </Typography>

        {/* {buttonTitle ? <Button>hellow</Button>: null} */}
      </Box>
    </div>
  );
};

export default AdvertismentPanel;
