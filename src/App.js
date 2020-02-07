// @flow
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import { ThemeProvider } from "@material-ui/styles";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";

import data from "./db/restaurants.js";
import RestaurantList from "./components/RestaurantList";
import "./App.css";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  }
}));

// Dark mode
const darkTheme = createMuiTheme({
  palette: {
    primary: { main: "#0093d7" },
    type: "dark"
  }
});

// Compare function to use with JS sort()
function compareValues(key: string, order: "asc" | "desc" = "asc") {
  return function innerSort(a, b) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }

    const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
    const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];
    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return order === "desc" ? comparison * -1 : comparison;
  };
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Tung Huynh
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function App() {
  const classes = useStyles();
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
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Helsinki Restaurants
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragraph
              >
                Fifty restaurants in Helsinki area shown on a React web page
                with Material UI Design.
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={sortAsc}
                    >
                      Sort A-Z
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button
                      variant="outlined"
                      color="primary"
                      onClick={sortDesc}
                    >
                      Sort Z-A
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <RestaurantList restaurants={restaurantArray} />
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Have a nice day! :)
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
