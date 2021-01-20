import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";

import { Help, Home } from "@material-ui/icons";
import MenuIcon from "@material-ui/icons/Menu";

import { localValue } from "../../components/Language/languageSlice";

import { locals } from "../../app/locals";
import { useStyles } from "./styles";

export function Navigation() {
  const classes = useStyles();
  const local = useSelector(localValue);
  const [drawerState, setDrawerState] = useState(false);
  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <RouterLink to="/" className={classes.menuItem}>
          <ListItem button key="Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={locals[local].navigation.linkHome} />
          </ListItem>
        </RouterLink>
        <RouterLink to="/about" className={classes.menuItem}>
          <ListItem button key="About">
            <ListItemIcon>
              <Help />
            </ListItemIcon>
            <ListItemText primary={locals[local].navigation.linkAbout} />
          </ListItem>
        </RouterLink>
      </List>
    </div>
  );

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={drawerState} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
