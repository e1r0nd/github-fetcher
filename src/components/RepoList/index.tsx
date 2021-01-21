import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Button, CardActions, Card, Link, Chip } from "@material-ui/core";
import { useSnackbar } from "notistack";

import { useStyles } from "./styles";
import {
  listValue,
  addToFavorites,
  removeFromFavorites,
  RepoType,
} from "./repoSlice";
import { localValue } from "../../components/Language/languageSlice";
import { locals } from "../../app/locals";
import { RepoItem } from "../RepoItem";

export function RepoList() {
  const classes = useStyles();
  const local = useSelector(localValue);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const list = useSelector(listValue);

  function handleAction(repo: RepoType) {
    if (repo.is_favorite) {
      dispatch(removeFromFavorites(repo));
      enqueueSnackbar(locals[local].repositories.unstarred, {
        variant: "info",
      });
    } else {
      dispatch(addToFavorites(repo));
      enqueueSnackbar(locals[local].repositories.starred, {
        variant: "success",
      });
    }
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {list.length ? (
          list.map((repo) => (
            <Grid item xs={12} key={repo.id}>
              <Card>
                <RepoItem repo={repo} />
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleAction(repo)}
                  >
                    {
                      locals[local].repositories[
                        repo.is_favorite ? "unstar" : "start"
                      ]
                    }
                  </Button>
                  <Link className={classes.learnmore} href={repo.html_url}>
                    {locals[local].repositories.learnmore}
                  </Link>
                  {!!repo.language && (
                    <Chip className={classes.language} label={repo.language} />
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))
        ) : (
          <h1 style={{ textAlign: "center" }}>
            <span
              aria-label="empty"
              role="img"
              style={{
                fontSize: "80px",
                display: "block",
                textAlign: "center",
              }}
            >
              🍽
            </span>
            <br />
            {locals[local].repositories.noresults}
          </h1>
        )}
      </Grid>
    </div>
  );
}
