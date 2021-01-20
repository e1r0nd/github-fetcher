import React from "react";
import { useSelector } from "react-redux";

import { CircularProgress, Backdrop } from "@material-ui/core";

import { useStyles } from "./styles";
import { isVisibleValue } from "./spinnerSlice";

export function Spinner() {
  const classes = useStyles();
  const isVisible = useSelector(isVisibleValue);

  return (
    <Backdrop className={classes.backdrop} open={isVisible}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}
