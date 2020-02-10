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

type Props = {
  title: string,
  subtitle: string,
  primaryButton: string,
  secondaryButton: string,
  primaryFunction: () => any,
  secondaryFunction: () => any
};

const HeroContent = ({
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  primaryFunction,
  secondaryFunction
}: Props) => {
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
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          {subtitle}
        </Typography>
        <div className={classes.heroButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={primaryFunction}
              >
                {primaryButton}
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                onClick={secondaryFunction}
              >
                {secondaryButton}
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

HeroContent.defaultProps = {
  title: "Hero Title",
  subtitle:
    "Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.",
  primaryButton: "Main call to action",
  secondaryButton: "Secondary action",
  primaryFunction: () => {},
  secondaryFunction: () => {}
};

export default HeroContent;
