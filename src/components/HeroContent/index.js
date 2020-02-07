// @flow
import React from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

export default function HeroContent(props: any) {
  const { sortAsc, sortDesc } = props;
  const classes = useStyles();
  return (
    <div className={classes.heroContent}>
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Helsinki Restaurants
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          Fifty restaurants in Helsinki area shown on a React web page with
          Material UI Design.
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary" onClick={sortAsc}>
                Sort A-Z
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary" onClick={sortDesc}>
                Sort Z-A
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
