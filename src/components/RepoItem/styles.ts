import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    media: {
      height: 140,
    },
    features: {
      display: "flex",
      alignItems: "center",
    },
    icon: {
      marginRight: theme.spacing(3),
    },
    price: {
      color: theme.palette.primary.light,
    },
  })
);
