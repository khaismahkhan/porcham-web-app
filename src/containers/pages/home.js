import { Typography } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";

const Home = () => {
  return (
    <div>
      <Typography className="text-center text" variant="h5">Hello im ebrima</Typography>
      <Typography className="text-center text" variant="h3" color="secondary">Hello im ebrima bold</Typography>
      <Typography className="text-center text" variant="h6">Hello im cuppajoe</Typography>
      <Typography className="text-center text" variant="subtitle">Hello im enter the grid</Typography>
      <Typography className="text-center text" variant="subtitleE24">Hello im enter the grid</Typography>
      <Typography className="text-center text" >Hello im enter the grid</Typography>
      <Button>click me</Button>
    </div>
  );
};

export default Home;
