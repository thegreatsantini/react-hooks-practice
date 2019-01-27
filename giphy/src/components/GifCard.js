import React, { Suspense, lazy } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Display from "./Display";
import Grid from "@material-ui/core/Grid";
// import Placholder from "./Placholder";
const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function GifCard(props) {
  const { classes, ids } = props;
  return (
    <Grid container spacing={24}>
      {ids.map((val, i) => {
        return (
            <Display key={i} id={val} />
        );
      })}
    </Grid>
  );
}

GifCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GifCard);
