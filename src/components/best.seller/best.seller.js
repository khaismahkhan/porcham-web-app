import "./best.seller.scss";
import React from "react";
// import { useStyle } from "./best.seller.style";
import { Box, Typography } from "@mui/material";

export const BestSeller = (props) => {
  const { image, label, name } = props;
  // const classes = useStyle();

  return (
    <div className="w-100" id="best-seller">
      <Box
        style={{
          height: 400,
          className: "w-100",
          backgroundImage: image ? `url(${image})` : "",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%, cover",
        }}
      >
        <div className="h-10 d-flex justify-content-start">
          <Typography
            className="pl-2 pr-3 label"
            // classes={{
            //   root: classes.muilabel,
            // }}
          >
            {label ? label : "#1"}
          </Typography>
        </div>

        <div className="d-flex align-items-end justify-content-between p-2 h-90">
          <Typography>{name ? name : "Hand Bag"}</Typography>

          <Typography class="material-icons arrow rounded-circle m-0 p-1 paper-root">
            arrow_forward
          </Typography>
        </div>
      </Box>
    </div>
  );
};
export default BestSeller;
