import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  offset: {
    height: `calc(100vh - ${theme.spacing(14)}px)`,
    alignItems: "center",
    display: "flex",
    marginTop: theme.spacing(7),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
}));
