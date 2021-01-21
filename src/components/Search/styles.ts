import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      display: "flex",
      justifyContent: "space-between",
    },
    searchField: {
      width: "100%",
    },
    formControl: {
      marginLeft: theme.spacing(3),
      minWidth: 120,
    },
  })
);
