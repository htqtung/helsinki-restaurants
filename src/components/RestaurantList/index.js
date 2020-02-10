// @flow
import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { BlurhashCanvas } from "react-blurhash";

import CustomizedDialog from "./CustomizedDialog";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  emptyContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center"
  }
}));

type Props = {
  restaurants: Array<Object>,
  isBlurred?: boolean
};

const RestaurantList = ({ restaurants, isBlurred }: Props) => {
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

  return restaurants !== undefined ? (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          {restaurants.map(card => (
            <Grid item key={card.name} xs={12} sm={6} md={4}>
              <Card
                className={classes.card}
                onClick={() => handleClickOpen(card)}
              >
                {isBlurred ? (
                  <BlurhashCanvas hash={card.blurhash} height={200} />
                ) : (
                  <CardMedia
                    className={classes.cardMedia}
                    image={card.image}
                    title={card.name}
                  />
                )}
                <CardContent className={classes.cardContent}>
                  <Typography gutterBottom variant="h5" component="h2">
                    {card.name}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => handleClickOpen(card)}
                  >
                    View
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <CustomizedDialog
          open={open}
          handleClose={handleClose}
          restaurantInfo={restaurantInfo}
        />
      </Container>
    </React.Fragment>
  ) : (
    <Container className={classes.emptyContent} maxWidth="sm">
      <p>
        There is no data to show{" "}
        <span role="img" aria-label="crying">
          &#128546;
        </span>{" "}
      </p>
    </Container>
  );
};

RestaurantList.defaultProps = {
  restaurants: []
};

export default RestaurantList;
