import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

import { Navigation } from "../Navigation";
import { Language } from "../Language";

import { pageTitleValue } from "../Navigation/navigationSlice";
import { useStyles } from "./styles";
import { useSelector } from "react-redux";

export function Header() {
  const classes = useStyles();
  const title = useSelector(pageTitleValue);

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Navigation />
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
        <Language />
      </Toolbar>
    </AppBar>
  );
}
