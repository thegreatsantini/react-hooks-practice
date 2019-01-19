import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IncrementTime from "./IncrementTime";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px 0",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Timer(props) {
  const {
    title,
    description,
    time,
    classes,
    id,
    editTimer,
    index,
    update
  } = props;
  const [isRunning, runTimer] = useState(false);
  return (
    <Card id={id} className={classes.root}>
      <CardContent>
        <List component="nav">
          <Typography
            className={classes.title}
            component="h2"
            variant="h5"
            gutterBottom
          >
            {!isRunning ? (
              time
            ) : (
              <div id="time">
                <IncrementTime startingTime={time} />
              </div>
            )}
          </Typography>
          <ListItem button>
            <ListItemText primary={title} secondary={description} />
          </ListItem>
        </List>
        <Divider />
      </CardContent>
      <CardActions>
        {!isRunning ? (
          <Button
            color="primary"
            onClick={() => runTimer(true)}
            className={classes.button}
            size="small"
          >
            Start
          </Button>
        ) : (
          <Button
            color="inherit"
            className={classes.button}
            size="small"
            onClick={function(e) {
              const item = document.getElementById("time");
              update(index, item.textContent);
              runTimer(false);
              // console.log('clicked', )
            }}
          >
            Stop
          </Button>
        )}
        <Button
          color="secondary"
          className={classes.button}
          size="small"
          onClick={editTimer}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(Timer);
