import React from "react";
import { Link, Typography } from "@mui/material";
import clsx from "clsx";
import { IsMobileWidth } from "../../../components/utils/utils";

const Footer = () => {
  const mobileWidth = IsMobileWidth();
  return (
    <div className="paper-root w-100 ps-3 position-absolute bottom-0">
      <div className="w-100 pt-3">
        <img
          style={{ height: "60px", width: "230px" }}
          src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
          alt="header-logo"
        />
      </div>
      <div className="d-flex w-100 flex-wrap pt-4 pb-4">
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-40",
            mobileWidth && "w-100"
          )}
        >
          <Typography>About Us</Typography>
          <Typography>Address</Typography>
          <Typography>Phone#</Typography>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">Our Collections</Typography>
          <Link href="" underline="hover">data</Link>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">Information</Typography>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>

        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">Helpful Links</Typography>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
        </div>
        <div
          className={clsx(
            "d-flex flex-column align-items-start",
            !mobileWidth && "w-15",
            mobileWidth && "w-100 pt-3"
          )}
        >
          <Typography className="pb-2" variant="h6">Connect With Us</Typography>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>
          <Link href="" underline="hover">data</Link>

        </div>
      </div>
    </div>
  );
};

export default Footer;
