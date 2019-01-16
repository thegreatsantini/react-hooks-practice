import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import List from '@material-ui/core/List';
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from '@material-ui/core/Divider';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  button: {
    margin: theme.spacing.unit,
  }
});

function Timer(props) {
  const { timers, classes } = props;
  console.log(props);
  return timers.map((timer, i) => {
    return (
      <Card>
        <CardContent>
          <List component="nav">
            <ListItem button>
              <ListItemText
                primary={timer.title}
                secondary={timer.description}
              />
            </ListItem>
          </List>
          <Divider />
        </CardContent>
        <CardActions>
          <Button color='primary' className={classes.button} size="small">Start</Button>
          <Button color='inherit' className={classes.button} size="small">Stop</Button>
          <Button color='default' className={classes.button} size="small">Reset</Button>
          <Button color='secondary' className={classes.button} size="small">Edit</Button>
          <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
        </CardActions>
      </Card>
    );
  });
}

export default withStyles(styles)(Timer);
