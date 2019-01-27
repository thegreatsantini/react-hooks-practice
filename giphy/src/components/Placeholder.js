import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    // ⚠️ object-fit is not supported by IE 11.
    objectFit: "cover"
  }
};

function PlaceHolder(props) {
  const { classes } = props;
 
  return (
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          height="140"
          image='https://upload.wikimedia.org/wikipedia/commons/a/a7/Zulily_logo.svg'
          title="Contemplative Reptile"
        />
      </Card>
  );
}

PlaceHolder.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlaceHolder);
