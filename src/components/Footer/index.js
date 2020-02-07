// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";

import Copyright from "./Copyright";

const Footer = () => {
  return (
    <React.Fragment>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        Have a nice day! :)
      </Typography>
      <Copyright />
    </React.Fragment>
  );
};

export default Footer;
