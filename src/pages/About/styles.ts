import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  offset: {
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  wrapper: {
    marginTop: theme.spacing(2),
    maxWidth: "100%",
    overflow: "scroll",
  },
  paragraph: {
    marginBottom: theme.spacing(2),
    textAlign: "left",
  },
}));
