import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "@material-ui/core/Container";

import { updatePageTitle } from "../../components/Navigation/navigationSlice";
import { localValue } from "../../components/Language/languageSlice";

import { locals } from "../../app/locals";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

export function About() {
  const classes = useStyles();
  const local = useSelector(localValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePageTitle(locals[local].navigation.titleAbout));
  });

  return (
    <>
      <Container maxWidth="sm" className={classes.offset}>
        <h1 style={{ textAlign: "center" }}>
          <span
            aria-label="Diamond"
            role="img"
            style={{ fontSize: "80px", display: "block", textAlign: "center" }}
          >
            👨🏻‍💻
          </span>
        </h1>
        <Typography variant="h6" component="h1">
          {locals[local].about.title}
        </Typography>
        <div className={classes.wrapper}>
          {locals[local].about.text.map((item: string) => (
            <Typography
              variant="body1"
              component="p"
              className={classes.paragraph}
              key={item}
            >
              {item}
            </Typography>
          ))}
        </div>
      </Container>
    </>
  );
}
