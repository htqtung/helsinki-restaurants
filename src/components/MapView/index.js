import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Icon from "@material-ui/core/Icon";
import LocationOnIcon from "@material-ui/icons/LocationOn";

import CustomizedDialog from "../RestaurantList/CustomizedDialog";
import { API_KEY } from "../../db/API_KEY";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapView = (props: any) => {
  const { center, zoom, restaurants } = props;
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
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: API_KEY }} //Your Google API key here
          defaultCenter={center}
          defaultZoom={zoom}
        >
          {restaurants.map(marker => (
            // <AnyReactComponent
            //   lat={marker.location[1]}
            //   lng={marker.location[0]}
            //   text={marker.name}
            // />
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
      </div>
    </React.Fragment>
  );
};

export default MapView;
