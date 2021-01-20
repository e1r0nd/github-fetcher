import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  menuButton: {
    padding: 0,
    margin: 0,
    minWidth: theme.spacing(3),
    color: theme.palette.background.default,
  },
}));
