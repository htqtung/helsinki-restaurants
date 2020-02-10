// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import Copyright from "./Copyright";

const useStyles = makeStyles(theme => ({
  footer: {
    width: "100%",
    marginBottom: theme.spacing(4)
  }
}));

// Just a simple footer
const Footer = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.footer} maxWidth="md">
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Have a nice day!{" "}
          <span role="img" aria-label="love">
            &#10084;&#65039;
          </span>
        </Typography>
        <Copyright name="Tung Huynh" />
      </Container>
    </React.Fragment>
  );
};

export default Footer;
