import { Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import "./product.card.scss";

const ProductCard = () => {
  const [value, setValue] = useState(2);
  return (
    <div id="product-card" className="card-wrapper paper-root">
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/images/kk.jpg`}
        alt="product-img"
      />

      <div className="d-flex flex-column align-items-center justify-content-center card-content">
        <Typography variant="subtitle2" className="fw-light pb-1">
          SPECIAL EDITION IRONMAN TEE
        </Typography>
        <Typography variant="body1" className="fw-lighter pb-1">
          Rs. 1,050.00
        </Typography>
        <div className="d-flex align-items-center">
          <Rating
            name="simple-controlled"
            size="small"
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          />
          <Typography variant="caption" className="ps-2">
            5 reviews
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
