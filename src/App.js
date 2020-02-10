// @flow
import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
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

function App() {
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
        </AppBar>
        <main>
          <HeroContent
            title="Helsinki Restaurants"
            subtitle="Fifty restaurants in Helsinki area shown on a React web page with
          Material UI Design."
            primaryButton="Sort A-Z"
            secondaryButton="Sort Z-A"
            primaryFunction={sortAsc}
            secondaryFunction={sortDesc}
          />
          <RestaurantList restaurants={restaurantArray} />
          <MapView restaurants={restaurantArray} />
        </main>
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
