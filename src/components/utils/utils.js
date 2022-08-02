import { useTheme, useMediaQuery } from "@mui/material";

export const IsTabletWidth = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between('sm', 'lg'));
}

export const IsMobileWidth = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.between("xs", "md"));
};


