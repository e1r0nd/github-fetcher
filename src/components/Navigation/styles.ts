import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  menuItem: {
    color: theme.palette.text.primary,
    textDecoration: "none",
  },
}));
