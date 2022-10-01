import { Button, Rating, Typography } from "@mui/material";
import React, { useState } from "react";
import "./product.card.scss";
import MessageDialog from "../message.dialog/message.dialog";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductCard = (props) => {
  const { name, price, desc } = props;
  const [state, setState] = useState({
    value: 2,
    open: false,
  });

  const handleChange = (name, value) => {
    setState({ ...state, [name]: value });
  };
  const handleClickOpen = () => {
    setState({ ...state, open: true });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <div id="product-card" className="card-wrapper paper-root">
      <MessageDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        open={state.open}
        header="PORCHAM SERVICES MANAGER"
        message="We're really sorry that currently we are unable to place your
        order from here, but you can place your order through our Facebook
        or WhatsApp link."
        redirect={true}
      />
      <img
        className="image"
        src={`${process.env.PUBLIC_URL}/assets/images/kk.jpg`}
        alt="product-img"
      />

      <div className="d-flex flex-column align-items-center justify-content-center card-content">
        <Typography variant="subtitle2" className="fw-light pb-1">
          {name}
        </Typography>
        {desc && (
          <Typography variant="body2" className=" pb-1 txt-gray">
            {desc}
          </Typography>
        )}
        <Typography variant="body1" className="fw-lighter pb-1">
          Rs. {price}
        </Typography>
        <div className="d-flex align-items-center">
          <Rating
            name="simple-controlled"
            size="small"
            value={state.value}
            onChange={(e) => handleChange("value", e.target.value)}
          />
          <Typography variant="caption" className="ps-2">
            {state.value} reviews
          </Typography>
        </div>
        <Button
          variant="outlined"
          size="small"
          className="mt-2"
          onClick={handleClickOpen}
        >
          Order Now
          <AddShoppingCartIcon sx={{ fontSize: 20, marginLeft: 1 }} />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
