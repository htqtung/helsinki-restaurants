// @flow
import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import CustomizedDialog from "../RestaurantList/CustomizedDialog";
import { API_KEY } from "../../db/API_KEY";

const useStyles = makeStyles(theme => ({
  map: {
    height: "100vh",
    width: "100%",
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

type Props = {
  center?: { lat: number, lng: number },
  zoom?: number,
  restaurants: [Object]
};

const MapView = ({ center, zoom, restaurants }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [restaurantInfo, setRestaurantInfo] = useState({});

  const handleClickOpen = info => {
    setOpen(true);
    setRestaurantInfo(info);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <Container className={classes.map} maxWidth="md">
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }} //Your Google API key here
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {restaurants.map(marker => (
            <LocationOnIcon
              lng={marker.location[0]}
              lat={marker.location[1]}
              text={marker.name}
              color="primary"
              onClick={() => handleClickOpen(marker)}
            />
          ))}
        </GoogleMapReact>
        <CustomizedDialog
          open={open}
          handleClose={handleClose}
          restaurantInfo={restaurantInfo}
        />
      </Container>
    </React.Fragment>
  );
};
MapView.defaultProps = {
  center: {
    lat: 60.170437,
    lng: 24.941546
  },
  zoom: 16
};
export default MapView;
