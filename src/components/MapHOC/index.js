// @flow
import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import Typography from "@material-ui/core/Typography";

import mapStyles from "../../utils/map-styles";

type Props = {
  center?: { lat: number, lng: number },
  zoom?: number,
  restaurants: [Object]
};

const MapHOC = withScriptjs(
  withGoogleMap(({ center, zoom, restaurants }: Props) => {
    const [selected, setSeleted] = useState(null);

    return (
      <GoogleMap
        defaultCenter={center}
        defaultZoom={zoom}
        defaultOptions={{ styles: mapStyles }}
      >
        {restaurants.map((marker, index) => {
          if (marker.location === null) return null;
          else
            return (
              <Marker
                key={index}
                position={{
                  lng: marker.location[0],
                  lat: marker.location[1]
                }}
                onClick={() => {
                  setSeleted(marker);
                }}
              />
            );
        })}
        {selected && (
          <InfoWindow
            position={{
              lng: selected.location[0],
              lat: selected.location[1]
            }}
            onCloseClick={() => {
              setSeleted(null);
            }}
            defaultOptions={{ styles: { backgroundColor: "inherit" } }}
          >
            <Typography variant="subtitle1" color="primary" noWrap>
              {selected.name}
            </Typography>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  })
);

MapHOC.defaultProps = {
  center: {
    lat: 60.170437,
    lng: 24.941546
  }, // Helsinki City Center
  zoom: 15
};
export default MapHOC;
