// @flow
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import MapHOC from "../MapHOC";

const useStyles = makeStyles(theme => ({
  map: {
    height: "100vh",
    width: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

type Props = {
  restaurants: [Object]
};

const MapView = ({ restaurants }: Props) => {
  const classes = useStyles();
  const key: any = process.env.REACT_APP_GOOGLE_KEY;
  return (
    <Container className={classes.map} maxWidth="md">
      <MapHOC
        restaurants={restaurants}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${key}`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </Container>
  );
};

MapView.defaultProps = {
  restaurants: []
};
export default MapView;
