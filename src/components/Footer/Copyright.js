// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

// Take in a name from props to display
const Copyright = (props: any) => {
  // if name is not available - use a defaultcopyright
  return props.name !== undefined ? (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {props.name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  ) : (
    <Link color="inherit" href="https://material-ui.com/">
      Copyright © A React Developer 2020.
    </Link>
  );
};

export default Copyright;
