import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
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
  time: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  title: {},
  description: {
    fontSize: 18
  },
  button: {
    margin: theme.spacing.unit
  }
});

function Timer(props) {
  const { title, description, time, classes, editTimer, index, update } = props;
  const [isRunning, runTimer] = useState(false);
  const [display, displayReset] = useState(false);


  return (
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.time}
            component="h2"
            variant="h5"
            gutterBottom
          >
            {!isRunning ? (
              <div id="time">{time}</div>
            ) : (
              <div id="time">
                <IncrementTime startingTime={time} />
              </div>
            )}
          </Typography>
          <div className={classes.info}>
            <Typography
              className={classes.title}
              component="h2"
              variant="h5"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              className={classes.description}
              component="h2"
              variant="h5"
              gutterBottom
            >
              {description}
            </Typography>
          </div>
          <Divider />
        </CardContent>
        <CardActions>
          {!isRunning ? (
            <Button
              color="primary"
              onClick={() => {
                displayReset(true);
                runTimer(true);
              }}
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
              onClick={function() {
                const currentTime = document.getElementById("time");
                update(index, currentTime.textContent);
                runTimer(false);
              }}
            >
              Stop
            </Button>
          )}
          {display && (
            <Button
              color="secondary"
              className={classes.button}
              size="small"
              onClick={() => {
                runTimer(false);
                update(index, "00:00:00");
                displayReset(false);
              }}
            >
              Reset
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
