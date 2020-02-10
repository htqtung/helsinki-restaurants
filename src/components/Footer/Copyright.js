// @flow
import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

type Props = {
  name: string
};

// Take in a name from props to display if no name is given - use the default value
const Copyright = ({ name }: Props) => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        {name}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

Copyright.defaultProps = {
  name: "A React Developer"
};

export default Copyright;
