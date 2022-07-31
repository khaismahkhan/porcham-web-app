import React from "react";
import { useTheme, useMediaQuery } from "@mui/material";

export const IsMobileWidth = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("xs", "md"));
};
