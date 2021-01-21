import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  offset: {
    alignItems: "center",
    display: "flex",
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
