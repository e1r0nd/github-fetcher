import React from "react";
import { useStyles } from "./styles";

export function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footerWrapper}>
      <div className={classes.footer}>Acme Inc. &copy; XXVI</div>
    </div>
  );
}
