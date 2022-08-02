import React from "react";
import {
  Typography,
  Box,
  IconButton,
  Menu,
  Button,
  MenuItem,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import clsx from "clsx";
import { IsMobileWidth } from "../../../components/utils/utils";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const pages = ["HOME", "SHOP", "BLOG", "CONTACT", "TOOLS"];

const Header = () => {
  const mobileWidth = IsMobileWidth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div className="w-100 paper-root">
      {/* for desktop */}
      <div
        className={clsx(
          mobileWidth && "d-none",
          !mobileWidth &&
            "d-flex justify-content-between align-items-center w-100 p-2"
        )}
      >
        <div className="w-100">
          <div className="d-flex">
            {pages.map((page) => (
              <Button key={page} onClick={handleCloseNavMenu}>
                {page}
              </Button>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-center w-100">
          <img
            style={{ height: "60px", width: "230px" }}
            src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
            alt="header-logo"
          />
        </div>
        <div className="w-100 d-flex justify-content-end">
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="primary" />
            </Badge>
          </IconButton>
           
        </div>
      </div>
      {/* for mobile */}
      <div
        className={clsx(
          mobileWidth &&
            "d-flex justify-content-between align-items-center w-100 pe-2",
          !mobileWidth && "d-none"
        )}
      >
        <div className="d-flex align-items-center">
          <Box>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="ps-2">
            <img
              style={{ height: "40px", width: "150px" }}
              src={`${process.env.PUBLIC_URL}/assets/images/header-logo.png`}
              alt="header-logo"
            />
          </div>
        </div>
        <div>
          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="secondary">
              <ShoppingCartIcon color="primary" />
            </Badge>
          </IconButton>
         
        </div>
      </div>
    </div>
  );
};

export default Header;
