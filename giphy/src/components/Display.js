import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
// import Placeholder from "./Placeholder";
import LazyLoad from "react-lazyload";
const Placeholder = lazy(() => import("./Placeholder"));

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function Display(props) {
  const { classes, id } = props;
  return (
    <Grid item xs={3} md={6}>
      <Suspense fallback={<Placeholder />}>
        <Card className={classes.card}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            className={classes.media}
            height="140"
            image={`https://media.giphy.com/media/${id}/giphy.gif`}
            title="Contemplative Reptile"
          />
        </Card>
      </Suspense>
    </Grid>
  );
}

Display.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Display);
