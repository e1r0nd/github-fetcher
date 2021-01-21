import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";

import { updatePageTitle } from "../../components/Navigation/navigationSlice";
import { localValue } from "../../components/Language/languageSlice";

import { locals } from "../../app/locals";
import { useStyles } from "./styles";
import { RepoList } from "../../components/RepoList";
import { Search } from "../../components/Search";

export function Home() {
  const classes = useStyles();
  const local = useSelector(localValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePageTitle(locals[local].navigation.titleHome));
  });

  return (
    <Container maxWidth="sm" className={classes.offset}>
      <Search />
      <RepoList />
    </Container>
  );
}
