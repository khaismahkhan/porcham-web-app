import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

export default function MessageDialog(props) {
  const { open, header, message, redirect } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          <Typography variant="h6" className="text-theme fw-semibold">
            {header}
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText className="text-theme">
            <Typography variant="subtitle1">{message}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions >
          <Button autoFocus variant="outlined" onClick={props.handleClose}>
            Cancel
          </Button>
          <Button
            href={redirect ? "https://m.me/porchamstore" : null}
            onClick={props.handleClose}
            autoFocus
            variant="contained"
            className={redirect ? "ms-2" : ""}
          >
            Order Here
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
