import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit
  }
});

const toggleReset = state => (state > 0 ? "true" : "none");

function Timer(props) {
  const { title, description, time, running, classes } = props;
  return (
    <Card className={classes.root}>
      <CardContent>
        <List component="nav">
          <Typography
            // className={classes.title}
            component="h2"
            variant="h5"
            gutterBottom
          >
            {time}
          </Typography>
          <ListItem button>
            <ListItemText primary={title} secondary={description} />
          </ListItem>
        </List>
        <Divider />
      </CardContent>
      <CardActions>
        {!running ? (
          <Button color="primary" className={classes.button} size="small">
            Start
          </Button>
        ) : (
          <Button color="inherit" className={classes.button} size="small">
            Stop
          </Button>
        )}
        <Button
          style={{ display: toggleReset(time) }}
          color="default"
          className={classes.button}
          size="small"
        >
          Reset
        </Button>
        <Button color="secondary" className={classes.button} size="small">
          Edit
        </Button>
        {/* <IconButton className={classes.button} aria-label="Delete">
            <DeleteIcon />
          </IconButton> */}
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Timer);
