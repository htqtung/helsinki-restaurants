// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import CssBaseline from "@material-ui/core/CssBaseline";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import data from "./db/restaurants.js";
import compareValues from "./utils/compareValues";
import HeroContent from "./components/HeroContent";
import RestaurantList from "./components/RestaurantList";
import MapView from "./components/MapView";
import Footer from "./components/Footer";
import "./App.css";

// Dark mode
const darkTheme = createMuiTheme({
  palette: {
    primary: { main: "#0093d7" },
    type: "dark"
  }
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

function App() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [restaurantArray, setRestaurantArray] = useState(data.restaurants);
  // Because the changes in the restaurantArray does not trigger re-render,
  // I have to add this variable to manage the state changes and re-render the list
  const [reload, setReload] = useState("unsorted");

  const sortAsc = () => {
    if (reload === "asc") return;
    setRestaurantArray(restaurantArray.sort(compareValues("name")));
    setReload("asc");
  };
  const sortDesc = () => {
    if (reload === "desc") return;
    setRestaurantArray(restaurantArray.sort(compareValues("name", "desc")));
    setReload("desc");
  };

  // Map View default props
  const mapDefaultProps = {
    // coordinates of Helsinki center
    center: {
      lat: 60.170437,
      lng: 24.941546
    },
    zoom: 16
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Wolt Summer 2020
            </Typography>
          </Toolbar>
          <Tabs value={value} onChange={handleChange} aria-label="Tab bar">
            <Tab label="Restaurants list" {...a11yProps(0)} />
            <Tab label="View on Map" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <HeroContent sortAsc={sortAsc} sortDesc={sortDesc} />
          <RestaurantList restaurants={restaurantArray} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <MapView
            restaurants={restaurantArray}
            center={mapDefaultProps.center}
            zoom={mapDefaultProps.zoom}
          />
        </TabPanel>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
