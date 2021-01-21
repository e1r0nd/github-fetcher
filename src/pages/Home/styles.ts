import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  offset: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
