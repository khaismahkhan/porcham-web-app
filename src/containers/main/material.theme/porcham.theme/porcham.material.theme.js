import { createMuiTheme } from "@mui/material";
import { materialThemeBase } from "./porcham.material.theme.base";
import { themeProps } from './porcham.material.theme.props';
import { themeStyles } from "./porcham.material.theme.style";

export const porchamTheme = createMuiTheme({
  ...materialThemeBase,
  props: {
    ...themeProps
  },
  overrides: {
    ...themeStyles
  }
});
