import React from "react";

import {
  Typography,
  CardMedia,
  CardContent,
  CardActionArea,
  CardHeader,
} from "@material-ui/core";

import { useStyles } from "./styles";
import { RepoType } from "../RepoList/repoSlice";
import { Share, Star } from "@material-ui/icons";

export function RepoItem(props: { repo: RepoType }) {
  const classes = useStyles();
  const { repo } = props;

  return repo ? (
    <CardActionArea>
      <CardHeader
        title={repo.name}
        subheader={
          <div className={classes.features}>
            <Star />
            {repo.stargazers_count}
            <Share />
            {repo.forks}
          </div>
        }
      />
      <CardMedia
        className={classes.media}
        image={repo.owner.avatar_url}
        title={repo.full_name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {repo.full_name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {repo.description}
        </Typography>
      </CardContent>
    </CardActionArea>
  ) : null;
}
