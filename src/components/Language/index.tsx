import React from "react";
import { useDispatch } from "react-redux";

import { Button, Menu, MenuItem } from "@material-ui/core";
import { Language as LanguageIcon } from "@material-ui/icons";

import { setLanguage } from "./languageSlice";
import { useStyles } from "./styles";

export function Language() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleChange(local: string) {
    dispatch(setLanguage(local));
    handleClose();
  }

  return (
    <>
      <Button
        className={classes.menuButton}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <LanguageIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleChange("ru")}>Русский</MenuItem>
      </Menu>
    </>
  );
}
